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
      const data = {
        token: "${data.access_token}",
        provider: "github"
      };
      const message = "authorization:github:success:" + JSON.stringify(data);

      console.log("Callback loaded, sending token...");

      // Try multiple methods to send the token
      function sendToken() {
        // Method 1: Direct to opener
        if (window.opener) {
          try {
            window.opener.postMessage(message, "*");
            console.log("✓ Sent to opener with wildcard origin");
          } catch (e) {
            console.error("✗ Failed to send to opener:", e);
          }

          // Also try with specific origin
          try {
            const openerOrigin = window.opener.location.origin;
            window.opener.postMessage(message, openerOrigin);
            console.log("✓ Sent to opener with specific origin:", openerOrigin);
          } catch (e) {
            console.log("✗ Could not access opener origin (cross-origin)");
          }
        }

        // Method 2: To parent
        if (window.parent && window.parent !== window) {
          try {
            window.parent.postMessage(message, "*");
            console.log("✓ Sent to parent");
          } catch (e) {
            console.error("✗ Failed to send to parent:", e);
          }
        }

        // Method 3: Broadcast to all windows
        try {
          window.postMessage(message, "*");
          console.log("✓ Broadcasted to own window");
        } catch (e) {
          console.error("✗ Failed to broadcast:", e);
        }
      }

      // Send immediately
      sendToken();

      // Listen for CMS handshake and respond
      window.addEventListener("message", function(event) {
        console.log("Received message:", event.data);

        if (event.data === "authorizing:github" ||
            event.data === "authorizing" ||
            typeof event.data === 'string' && event.data.includes('authorizing')) {
          console.log("✓ CMS handshake received, responding...");
          if (event.source) {
            event.source.postMessage(message, event.origin);
            console.log("✓ Responded to handshake");
          }
        }
      }, false);

      // Retry sending every 500ms for 3 seconds
      let attempts = 0;
      const maxAttempts = 6;
      const interval = setInterval(function() {
        attempts++;
        console.log("Retry attempt", attempts);
        sendToken();

        if (attempts >= maxAttempts) {
          clearInterval(interval);
          console.log("Max attempts reached");
        }
      }, 500);

      // Close window after 4 seconds
      setTimeout(function() {
        console.log("Attempting to close window...");
        if (window.opener || window.parent) {
          try {
            window.close();
            console.log("✓ Window closed");
          } catch (e) {
            console.log("✗ Could not close window:", e);
            document.body.innerHTML = '<div class="container"><h2>Success!</h2><p>Authentication complete. You can close this window.</p></div>';
          }
        } else {
          document.body.innerHTML = '<div class="container"><h2>Success!</h2><p>Authentication complete. You can close this window.</p></div>';
        }
      }, 4000);
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
