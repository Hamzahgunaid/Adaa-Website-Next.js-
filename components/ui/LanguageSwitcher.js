'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale) => {
    if (newLocale !== locale) {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    }
  };

  return (
    <div className="ml-4 rtl:ml-0 rtl:mr-4 px-4 py-2 text-sm font-medium rounded-md border-2 border-[#1E3A5F] transition-all hover:bg-gray-50 flex items-center gap-2">
      {/* Globe Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E3A5F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>

      {/* EN */}
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors ${locale === 'en' ? 'text-[#1E3A5F] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
        aria-label="Switch to English"
      >
        EN
      </button>

      {/* Separator */}
      <span className="text-gray-300">|</span>

      {/* عربي */}
      <button
        onClick={() => switchLocale('ar')}
        className={`transition-colors ${locale === 'ar' ? 'text-[#1E3A5F] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
        aria-label="Switch to Arabic"
      >
        عربي
      </button>
    </div>
  );
}
