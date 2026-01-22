import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const provider = searchParams.get('provider');

  // If no code, redirect to GitHub OAuth
  if (!code) {
    const clientId = process.env.GITHUB_CLIENT_ID;

    if (!clientId) {
      return NextResponse.json(
        { error: 'GitHub OAuth not configured. Please add GITHUB_CLIENT_ID to environment variables.' },
        { status: 500 }
      );
    }

    // Use the custom domain for redirect URI to match GitHub OAuth app configuration
    const redirectUri = 'https://www.adaa-foundation.org/api/auth/callback';
    const scope = 'repo,user';
    const state = request.nextUrl.origin;
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope,
      state,
    });

    const githubAuthUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

    return NextResponse.redirect(githubAuthUrl);
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}
