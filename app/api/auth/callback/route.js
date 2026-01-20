import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GitHub OAuth not configured properly. Please add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET to Vercel environment variables.' },
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
        redirect_uri: `${request.nextUrl.origin}/api/auth/callback`,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return NextResponse.json({ error: data.error_description || data.error }, { status: 400 });
    }

    // Create HTML that posts the token back to the CMS window
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Authenticating...</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
              const token = "${data.access_token}";
              const provider = "github";

              // Post message to opener window (CMS)
              if (window.opener) {
                window.opener.postMessage(
                  "authorization:${provider}:success:" + JSON.stringify({
                    token: token,
                    provider: provider
                  }),
                  window.location.origin
                );

                // Close popup after a short delay
                setTimeout(function() {
                  window.close();
                }, 1000);
              } else {
                document.querySelector('.container').innerHTML =
                  '<h2>Authentication Complete</h2><p>You can close this window now.</p>';
              }
            })();
          </script>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed: ' + error.message },
      { status: 500 }
    );
  }
}
