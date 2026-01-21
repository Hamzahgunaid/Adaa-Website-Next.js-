import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  // Exclude: api routes, Next.js internals, Vercel internals, static files, and admin CMS
  matcher: ['/((?!api|_next|_vercel|admin|.*\\..*).*)']
};
