import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function middleware(request) {
  const host = request.headers.get('host');

  // Redirect non-www to www
  if (host === 'adaa-foundation.org') {
    const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.adaa-foundation.org');
    return NextResponse.redirect(redirectUrl, 308);
  }

  // Handle root path explicitly
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Exclude: API routes, admin CMS, Next.js internals, Vercel internals, and static files
  matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)']
};
