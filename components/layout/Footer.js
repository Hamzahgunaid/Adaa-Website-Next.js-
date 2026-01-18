'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { AdaaFullLogoWhite } from '@/components/shared/Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const quickLinks = [
    { key: 'linkAbout', label: t('linkAbout'), href: `/${locale}/about` },
    { key: 'linkServices', label: t('linkServices'), href: `/${locale}/services` },
    { key: 'linkWork', label: t('linkWork'), href: `/${locale}/work` },
    { key: 'linkKnowledge', label: t('linkKnowledge'), href: `/${locale}/knowledge` },
  ];

  const serviceLinks = [
    { key: 'serviceStrategic', label: t('serviceStrategic') },
    { key: 'serviceME', label: t('serviceME') },
    { key: 'serviceInnovation', label: t('serviceInnovation') },
    { key: 'serviceCapacity', label: t('serviceCapacity') },
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="col-span-1">
            <div className="mb-6">
              <AdaaFullLogoWhite width={200} />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contactInfo')}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>{t('address')}</li>
              <li>
                <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors">
                  {t('email')}
                </a>
              </li>
              <li>{t('website')}</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adaa Consulting. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
