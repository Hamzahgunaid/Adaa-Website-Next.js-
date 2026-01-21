import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const cmsOrigin = state && state.startsWith('http') ? state : '';

  if (!code) {
    return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GitHub OAuth not configured. Check GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Vercel environment variables.' },
      { status: 500 }
    );
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return NextResponse.json({ error: data.error_description || data.error }, { status: 400 });
    }

    if (!data.access_token) {
      return NextResponse.json({ error: 'No access token received from GitHub' }, { status: 400 });
    }

    // Return HTML that posts the token back to the CMS
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authenticating...</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      text-align: center;
      color: white;
    }
    .spinner {
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 4px solid white;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 20px auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spinner"></div>
    <h2>Authentication Successful!</h2>
    <p>Redirecting to CMS...</p>
  </div>
  <script>
    (function() {
      try {
        const data = {
          token: "${data.access_token}",
          provider: "github"
        };
        const cmsOrigin = "${cmsOrigin}";
        const targetOrigin = cmsOrigin || "*";
        const message = "authorization:github:success:" + JSON.stringify(data);

        // Function to send message to CMS
        function sendAuthMessage() {
          const targets = [window.opener, window.parent].filter(Boolean);
          if (targets.length === 0) {
            return false;
          }
          targets.forEach((target) => {
            target.postMessage(message, targetOrigin);
          });
          console.log('Auth message sent to CMS');
          return true;
        }

        // Listen for message from CMS window first
        window.addEventListener('message', function(e) {
          console.log('Received message:', e.data);
          if (e.data === 'authorizing:github') {
            sendAuthMessage();
          }
        }, false);

        let attempts = 0;
        const maxAttempts = 5;
        const sendInterval = setInterval(function() {
          attempts += 1;
          const sent = sendAuthMessage();
          if (sent || attempts >= maxAttempts) {
            clearInterval(sendInterval);
          }
        }, 400);

        // Close window after giving time for message to be received
        setTimeout(function() {
          if (window.opener || window.parent) {
            window.close();
          } else {
            document.body.innerHTML = '<div class="container"><h2>Success!</h2><p>You can close this window.</p></div>';
          }
        }, 2500);
      } catch (err) {
        console.error('Auth error:', err);
        document.body.innerHTML = '<div class="container"><h2>Error</h2><p>' + err.message + '</p></div>';
      }
    })();
  </script>
</body>
</html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.json(
      { error: 'Authentication failed: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
