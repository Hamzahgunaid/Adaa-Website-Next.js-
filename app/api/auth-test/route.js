import { NextResponse } from 'next/server';

export async function GET(request) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = 'https://www.adaa-foundation.org/api/auth/callback';

  return NextResponse.json({
    message: 'Auth configuration test',
    clientId: clientId ? `${clientId.substring(0, 6)}...` : 'NOT SET',
    redirectUri: redirectUri,
    requestOrigin: request.nextUrl.origin,
    timestamp: new Date().toISOString(),
    deployed: 'v2-fixed-hard-coded-domain'
  });
}
