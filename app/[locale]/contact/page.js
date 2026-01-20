import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageClient from './ContactPageClient';

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <a href={`/${locale}`} className="text-gray-600 hover:text-[#5BB5B0] transition-colors">
              {t('breadcrumb.home')}
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-[#1E3A5F] font-medium">{t('breadcrumb.contact')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Client Component */}
            <ContactPageClient locale={locale} />

            {/* Contact Information */}
            <div>
              {/* Contact Info Card */}
              <div className="bg-[#1E3A5F] text-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-2">{t('info.title')}</h2>
                <p className="text-gray-300 mb-8">{t('info.subtitle')}</p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-[#5BB5B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.address.label')}</h3>
                      <p className="text-gray-300">{t('info.address.value')}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-[#5BB5B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.email.label')}</h3>
                      <a
                        href={`mailto:${t('info.email.value')}`}
                        className="text-[#5BB5B0] hover:text-[#7ECBD4] transition-colors"
                      >
                        {t('info.email.value')}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-[#5BB5B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.website.label')}</h3>
                      <p className="text-gray-300">{t('info.website.value')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="bg-gradient-to-br from-[#5BB5B0] to-[#7ECBD4] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">{t('info.hours.title')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t('info.hours.weekdays')}</span>
                    <span>{t('info.hours.weekdaysHours')}</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                    <span className="font-medium">{t('info.hours.weekend')}</span>
                    <span>{t('info.hours.weekendHours')}</span>
                  </div>
                </div>
              </div>

              {/* Why Work With Us */}
              <div className="mt-8 bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">{t('reasons.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#5BB5B0] rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">{t('reasons.reason1.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('reasons.reason1.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#5BB5B0] rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">{t('reasons.reason2.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('reasons.reason2.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#5BB5B0] rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">{t('reasons.reason3.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('reasons.reason3.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
