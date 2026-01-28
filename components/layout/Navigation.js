'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AdaaLogoIcon } from '@/components/shared/Logo';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'work', href: `/${locale}/work` },
    { key: 'knowledge', href: `/${locale}/knowledge` },
    { key: 'contact', href: `/${locale}/contact` },
    { key: 'careers', href: `/${locale}/careers` },
  ];

  const isActive = (href) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Tagline */}
          <Link href={`/${locale}`} className="flex items-center gap-3 rtl:gap-3 min-w-0">
            <AdaaLogoIcon size={48} />
            <div className="border-l border-gray-200 pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3 min-w-0">
              <span className="block text-base sm:text-xl font-bold tracking-tight text-[#1E3A5F] leading-tight">
                {locale === 'ar' ? "أداء للاستشارات" : "Adaa' Consulting"}
              </span>
              <span className="hidden sm:block text-xs text-gray-500 tracking-wide">
                {locale === 'ar' ? "قيادة التأثير بالأدلة والابتكار" : "Driving Impact with Evidence and Innovation"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rtl:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-gray-100 text-[#1E3A5F]'
                    : 'hover:bg-gray-50 text-[#1E3A5F]'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3 rtl:gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none text-[#1E3A5F]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-gray-200 text-[#1E3A5F]'
                    : 'hover:bg-gray-100 text-[#1E3A5F]'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
