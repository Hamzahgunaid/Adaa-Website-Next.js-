import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ServicesPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Service Icons
  const Icons = {
    StrategicAdvisory: ({ color = colors.ctaOrange, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" />
        <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.5" opacity="0.4" />
        <circle cx="24" cy="24" r="2.5" fill={color} />
        <line x1="24" y1="2" x2="24" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="38" x2="24" y2="46" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="24" x2="10" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="24" x2="46" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    MESystems: ({ color = colors.secondaryTeal, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="6" y="28" width="8" height="14" rx="1" fill={color} opacity="0.4" />
        <rect x="17" y="20" width="8" height="22" rx="1" fill={color} opacity="0.6" />
        <rect x="28" y="12" width="8" height="30" rx="1" fill={color} opacity="0.8" />
        <path d="M10 32 L21 24 L32 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="8" fill={color} />
        <path d="M34 10 L37 13 L42 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    DigitalInnovation: ({ color = colors.accentYellow, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="16" y="16" width="16" height="16" rx="3" stroke={color} strokeWidth="2" />
        <rect x="20" y="20" width="8" height="8" rx="1" fill={color} />
        <line x1="24" y1="4" x2="24" y2="16" stroke={color} strokeWidth="1.5" />
        <line x1="24" y1="32" x2="24" y2="44" stroke={color} strokeWidth="1.5" />
        <line x1="4" y1="24" x2="16" y2="24" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="24" x2="44" y2="24" stroke={color} strokeWidth="1.5" />
        <line x1="16" y1="16" x2="8" y2="8" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="16" x2="40" y2="8" stroke={color} strokeWidth="1.5" />
        <line x1="16" y1="32" x2="8" y2="40" stroke={color} strokeWidth="1.5" />
        <line x1="32" y1="32" x2="40" y2="40" stroke={color} strokeWidth="1.5" />
        <circle cx="24" cy="4" r="3" fill={color} />
        <circle cx="24" cy="44" r="3" fill={color} />
        <circle cx="4" cy="24" r="3" fill={color} />
        <circle cx="44" cy="24" r="3" fill={color} />
        <circle cx="8" cy="8" r="2.5" fill={color} opacity="0.6" />
        <circle cx="40" cy="8" r="2.5" fill={color} opacity="0.6" />
        <circle cx="8" cy="40" r="2.5" fill={color} opacity="0.6" />
        <circle cx="40" cy="40" r="2.5" fill={color} opacity="0.6" />
      </svg>
    ),
    CapacityBuilding: ({ color = colors.accentGreen, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="8" y="32" width="32" height="10" rx="2" fill={color} opacity="0.4" />
        <rect x="12" y="22" width="24" height="10" rx="2" fill={color} opacity="0.6" />
        <rect x="16" y="12" width="16" height="10" rx="2" fill={color} opacity="0.8" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill={color} />
        <path d="M24 44 L24 8 M18 14 L24 6 L30 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    Arrow: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    Check: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  };

  const services = [
    {
      id: 'strategic-advisory',
      Icon: Icons.StrategicAdvisory,
      title: t('strategic.title'),
      shortDesc: t('strategic.shortDesc'),
      color: colors.ctaOrange,
      overview: t('strategic.overview'),
      offerings: [
        { title: t('strategic.offerings.offering1.title'), desc: t('strategic.offerings.offering1.desc') },
        { title: t('strategic.offerings.offering2.title'), desc: t('strategic.offerings.offering2.desc') },
        { title: t('strategic.offerings.offering3.title'), desc: t('strategic.offerings.offering3.desc') },
        { title: t('strategic.offerings.offering4.title'), desc: t('strategic.offerings.offering4.desc') },
      ],
      cta: t('strategic.cta'),
    },
    {
      id: 'me-systems',
      Icon: Icons.MESystems,
      title: t('monitoring.title'),
      shortDesc: t('monitoring.shortDesc'),
      color: colors.secondaryTeal,
      overview: t('monitoring.overview'),
      offerings: [
        { title: t('monitoring.offerings.offering1.title'), desc: t('monitoring.offerings.offering1.desc') },
        { title: t('monitoring.offerings.offering2.title'), desc: t('monitoring.offerings.offering2.desc') },
        { title: t('monitoring.offerings.offering3.title'), desc: t('monitoring.offerings.offering3.desc') },
        { title: t('monitoring.offerings.offering4.title'), desc: t('monitoring.offerings.offering4.desc') },
      ],
      cta: t('monitoring.cta'),
    },
    {
      id: 'digital-innovation',
      Icon: Icons.DigitalInnovation,
      title: t('innovation.title'),
      shortDesc: t('innovation.shortDesc'),
      color: colors.accentYellow,
      overview: t('innovation.overview'),
      offerings: [
        { title: t('innovation.offerings.offering1.title'), desc: t('innovation.offerings.offering1.desc') },
        { title: t('innovation.offerings.offering2.title'), desc: t('innovation.offerings.offering2.desc') },
        { title: t('innovation.offerings.offering3.title'), desc: t('innovation.offerings.offering3.desc') },
        { title: t('innovation.offerings.offering4.title'), desc: t('innovation.offerings.offering4.desc') },
      ],
      cta: t('innovation.cta'),
    },
    {
      id: 'capacity-building',
      Icon: Icons.CapacityBuilding,
      title: t('capacity.title'),
      shortDesc: t('capacity.shortDesc'),
      color: colors.accentGreen,
      overview: t('capacity.overview'),
      offerings: [
        { title: t('capacity.offerings.offering1.title'), desc: t('capacity.offerings.offering1.desc') },
        { title: t('capacity.offerings.offering2.title'), desc: t('capacity.offerings.offering2.desc') },
        { title: t('capacity.offerings.offering3.title'), desc: t('capacity.offerings.offering3.desc') },
        { title: t('capacity.offerings.offering4.title'), desc: t('capacity.offerings.offering4.desc') },
      ],
      cta: t('capacity.cta'),
    },
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

        <div className="relative max-w-7xl mx-auto px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6 rtl:flex-row-reverse">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">{t('breadcrumb.home')}</Link>
            <span>/</span>
            <span className="text-white">{t('breadcrumb.services')}</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-xl text-white/70 max-w-3xl">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW - QUICK NAVIGATION ===== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <a
                key={i}
                href={`#${service.id}`}
                className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.Icon color={service.color} size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-sm truncate group-hover:text-opacity-80 transition-colors"
                    style={{ color: colors.primaryNavy }}
                  >
                    {service.title.split('&')[0].trim()}
                  </h3>
                  <span
                    className="text-xs flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: service.color }}
                  >
                    {t('quickNav.jumpTo')} <Icons.Arrow size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE DETAIL SECTIONS ===== */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20`}
          style={{ backgroundColor: index % 2 === 0 ? 'white' : '#FAFBFC' }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-12 items-start">
              {/* Left Column - Main Info */}
              <div className="col-span-12 lg:col-span-5">
                {/* Service Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.Icon color={service.color} size={40} />
                  </div>
                  <span
                    className="text-5xl font-bold opacity-10"
                    style={{ color: service.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.primaryNavy }}
                >
                  {service.title}
                </h2>

                {/* Overview */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.overview}
                </p>

                {/* CTA */}
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <Icons.Arrow size={18} color={service.color} />
                </Link>
              </div>

              {/* Right Column - Offerings */}
              <div className="col-span-12 lg:col-span-7">
                <div
                  className="rounded-xl p-8"
                  style={{ backgroundColor: `${service.color}05`, border: `1px solid ${service.color}15` }}
                >
                  <h3
                    className="text-sm font-semibold tracking-wider uppercase mb-6"
                    style={{ color: service.color }}
                  >
                    {t('offeringsTitle')}
                  </h3>

                  <div className="space-y-4">
                    {service.offerings.map((offering, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white"
                        style={{ border: `1px solid ${service.color}10` }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <Icons.Check size={16} color={service.color} />
                        </div>
                        <div className="flex-1">
                          <h4
                            className="font-semibold mb-1"
                            style={{ color: colors.primaryNavy }}
                          >
                            {offering.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {offering.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ===== CROSS-SERVICE VALUE PROPOSITION ===== */}
      <section className="py-20" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: colors.secondaryTeal }}
            >
              {t('integrated.subtitle')}
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              {t('integrated.title')}
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              {t('integrated.description')}
            </p>
          </div>

          {/* Visual representation of integrated services */}
          <div className="relative">
            {/* Connection lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-64 h-64 rounded-full border-2 border-dashed opacity-20"
                style={{ borderColor: colors.secondaryTeal }}
              />
            </div>

            {/* Service nodes */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.Icon color={service.color} size={36} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {service.title.split('&')[0].trim()}
                  </h3>
                  <p className="text-white/50 text-xs mt-2">
                    {service.shortDesc.length > 60 ? service.shortDesc.substring(0, 60) + '...' : service.shortDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: t('integrated.key1.title'),
                desc: t('integrated.key1.desc')
              },
              {
                title: t('integrated.key2.title'),
                desc: t('integrated.key2.desc')
              },
              {
                title: t('integrated.key3.title'),
                desc: t('integrated.key3.desc')
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: colors.primaryNavy }}
          >
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 text-white font-semibold rounded-md transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.ctaOrange }}
            >
              {t('cta.button1')}
            </Link>
            <Link
              href={`/${locale}/work`}
              className="px-8 py-4 font-semibold rounded-md transition-all hover:bg-gray-100"
              style={{ color: colors.primaryNavy, border: `1.5px solid ${colors.primaryNavy}25` }}
            >
              {t('cta.button2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
