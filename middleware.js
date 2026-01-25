import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default intlMiddleware;

export const config = {
  // Exclude: API routes, admin CMS, Next.js internals, Vercel internals, and static files
  matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)']
};
