import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

export default async function AboutPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Value Icons Components
  const Icons = {
    LocallyRooted: ({ size = 32, color = colors.ctaOrange }) => (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
        <path d="M16 28C16 28 26 20 26 13C26 7.477 21.523 3 16 3C10.477 3 6 7.477 6 13C6 20 16 28 16 28Z" stroke={color} strokeWidth="2" />
        <circle cx="16" cy="13" r="4" fill={color} />
      </svg>
    ),

    EvidenceBased: ({ size = 32, color = colors.secondaryTeal }) => (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
        <rect x="4" y="20" width="6" height="8" rx="1" fill={color} opacity="0.5" />
        <rect x="13" y="14" width="6" height="14" rx="1" fill={color} opacity="0.7" />
        <rect x="22" y="8" width="6" height="20" rx="1" fill={color} />
        <path d="M7 18L16 12L25 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),

    Innovative: ({ size = 32, color = colors.accentYellow }) => (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
        <circle cx="16" cy="12" r="8" stroke={color} strokeWidth="2" />
        <path d="M12 20V24C12 25.1 12.9 26 14 26H18C19.1 26 20 25.1 20 24V20" stroke={color} strokeWidth="2" />
        <line x1="14" y1="28" x2="18" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 6V8M10 12H8M24 12H22M11 7L12.5 8.5M21 7L19.5 8.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),

    Adaptive: ({ size = 32, color = colors.accentLightBlue }) => (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
        <path d="M6 16C6 10.477 10.477 6 16 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M26 16C26 21.523 21.523 26 16 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 6L19 3M16 6L19 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 26L13 29M16 26L13 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="4" fill={color} />
      </svg>
    ),

    ImpactOriented: ({ size = 32, color = colors.accentGreen }) => (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
        <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2" />
        <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <circle cx="16" cy="16" r="4" fill={color} />
        <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),

    Quote: ({ size = 24, color = colors.secondaryTeal }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} opacity="0.3">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>
    ),
  };

  const values = [
    {
      Icon: Icons.LocallyRooted,
      title: t('values.local.title'),
      description: t('values.local.description'),
      color: colors.ctaOrange,
    },
    {
      Icon: Icons.EvidenceBased,
      title: t('values.evidence.title'),
      description: t('values.evidence.description'),
      color: colors.secondaryTeal,
    },
    {
      Icon: Icons.Innovative,
      title: t('values.innovative.title'),
      description: t('values.innovative.description'),
      color: colors.accentYellow,
    },
    {
      Icon: Icons.Adaptive,
      title: t('values.adaptive.title'),
      description: t('values.adaptive.description'),
      color: colors.accentLightBlue,
    },
    {
      Icon: Icons.ImpactOriented,
      title: t('values.impact.title'),
      description: t('values.impact.description'),
      color: colors.accentGreen,
    },
  ];

  const teamMembers = [
    { role: t('team.roles.ed'), placeholder: 'ED' },
    { role: t('team.roles.do'), placeholder: 'DO' },
    { role: t('team.roles.me'), placeholder: 'ME' },
    { role: t('team.roles.hi'), placeholder: 'HI' },
  ];

  const partnerCategories = [
    { icon: '🏘️', label: t('partners.categories.communities.label'), desc: t('partners.categories.communities.desc') },
    { icon: '🌐', label: t('partners.categories.un.label'), desc: t('partners.categories.un.desc') },
    { icon: '💼', label: t('partners.categories.donors.label'), desc: t('partners.categories.donors.desc') },
    { icon: '🏛️', label: t('partners.categories.government.label'), desc: t('partners.categories.government.desc') },
    { icon: '🤝', label: t('partners.categories.civil.label'), desc: t('partners.categories.civil.desc') },
    { icon: '🎓', label: t('partners.categories.academic.label'), desc: t('partners.categories.academic.desc') },
    { icon: '🏢', label: t('partners.categories.private.label'), desc: t('partners.categories.private.desc') },
    { icon: '📊', label: t('partners.categories.development.label'), desc: t('partners.categories.development.desc') },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      {/* ===== PAGE HERO ===== */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6 rtl:flex-row-reverse">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white">{t('breadcrumb.about')}</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-xl text-white/70 max-w-2xl">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* ===== MAIN ABOUT CONTENT ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12 lg:col-span-7">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong style={{ color: colors.primaryNavy }}>{t('intro.heading')}</strong> {t('intro.paragraph1')}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">{t('intro.paragraph2')}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{t('intro.paragraph3')}</p>
                <p className="text-gray-600 leading-relaxed">{t('intro.paragraph4')}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-xl p-8" style={{ backgroundColor: `${colors.primaryNavy}05`, border: `1px solid ${colors.primaryNavy}10` }}>
                <h3 className="text-lg font-semibold mb-6" style={{ color: colors.primaryNavy }}>
                  {t('glance.title')}
                </h3>

                <div className="space-y-6">
                  {['founded', 'focus', 'reach', 'team'].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 rtl:flex-row-reverse rtl:gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.secondaryTeal + '20' }}>
                        <span style={{ color: colors.secondaryTeal }} className="font-bold text-sm">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="rtl:text-right flex-1">
                        <div className="block text-xs text-gray-500 uppercase tracking-wider">{t(`glance.${item}.label`)}</div>
                        <p className="font-semibold" style={{ color: colors.primaryNavy }}>{t(`glance.${item}.value`)}</p>
                        <div className="block text-sm text-gray-500">{t(`glance.${item}.sublabel`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-20 border-t border-gray-100" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="rounded-xl p-10 relative overflow-hidden" style={{ backgroundColor: colors.primaryNavy }}>
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: colors.secondaryTeal, transform: 'translate(30%, -30%)' }} />

              <div className="relative">
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
                  {t('vision.title')}
                </span>
                <div className="mt-4 mb-6">
                  <Icons.Quote size={32} color="white" />
                </div>
                <p className="text-xl text-white leading-relaxed">{t('vision.content')}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-xl p-10 relative overflow-hidden bg-white" style={{ border: `1px solid ${colors.primaryNavy}15` }}>
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: colors.ctaOrange, transform: 'translate(30%, -30%)' }} />

              <div className="relative">
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.ctaOrange }}>
                  {t('mission.title')}
                </span>
                <div className="mt-4 mb-6">
                  <Icons.Quote size={32} color={colors.primaryNavy} />
                </div>
                <p className="text-xl leading-relaxed" style={{ color: colors.primaryNavy }}>{t('mission.content')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              {t('values.title')}
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
              {t('values.subtitle')}
            </h2>
          </div>

          <div className="space-y-4">
            {values.map((value, i) => (
              <div key={i} className="flex items-start gap-6 rtl:flex-row-reverse p-6 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: `${value.color}05`, border: `1px solid ${value.color}15` }}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${value.color}15` }}>
                  <value.Icon size={32} color={value.color} />
                </div>

                <div className="flex-1 rtl:text-right">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primaryNavy }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>

                <div className="text-2xl font-bold opacity-20 flex-shrink-0" style={{ color: value.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="py-20 border-t border-gray-100" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
                {t('team.title')}
              </span>
              <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
                {t('team.heading')}
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">{t('team.subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: `${colors.primaryNavy}10` }}>
                  <span className="text-4xl font-bold opacity-20" style={{ color: colors.primaryNavy }}>
                    {member.placeholder}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm text-gray-500">{t('team.photoPlaceholder')}</span>
                  </div>
                </div>

                <h3 className="font-semibold" style={{ color: colors.primaryNavy }}>
                  {t('team.member.name')}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t('team.member.bio')}</p>

                <div className="flex gap-2 mt-3">
                  <a href="#" className="text-xs px-2 py-1 rounded transition-colors hover:bg-gray-100" style={{ color: colors.secondaryTeal }}>
                    {t('team.member.linkedin')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              {t('partners.title')}
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
              {t('partners.heading')}
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('partners.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {partnerCategories.map((partner, i) => (
              <div key={i} className="p-5 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                <span className="text-2xl mb-3 block">{partner.icon}</span>
                <h4 className="font-semibold text-sm mb-1" style={{ color: colors.primaryNavy }}>
                  {partner.label}
                </h4>
                <p className="text-xs text-gray-500">{partner.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-8 text-center" style={{ backgroundColor: `${colors.primaryNavy}03`, border: `1px solid ${colors.primaryNavy}08` }}>
            <span className="text-sm text-gray-500 mb-6 block">{t('partners.trusted')}</span>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
              {/* Partner Logos */}
              {[
                { name: 'UNDP', logo: '/images/partners/undp.svg', width: 140, height: 80 },
                { name: 'TYF', logo: '/images/partners/tyf.svg', width: 160, height: 80 },
                { name: 'BFD', logo: '/images/partners/bfd.svg', width: 120, height: 80 },
                { name: 'YFCA', logo: '/images/partners/yfca.svg', width: 160, height: 80 },
              ].map((partner, i) => (
                <div
                  key={i}
                  className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  style={{ width: partner.width, height: partner.height }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">{t('cta.subtitle')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="px-8 py-4 text-white font-semibold rounded-md transition-all hover:shadow-lg" style={{ backgroundColor: colors.ctaOrange }}>
              {t('cta.primary')}
            </Link>
            <Link href={`/${locale}/contact`} className="px-8 py-4 font-semibold rounded-md transition-all hover:bg-white/10" style={{ color: 'white', border: '2px solid rgba(255,255,255,0.3)' }}>
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
