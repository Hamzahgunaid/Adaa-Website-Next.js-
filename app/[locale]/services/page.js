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
        <circle cx="24" cy="4" r="3" fill={color} />
        <circle cx="24" cy="44" r="3" fill={color} />
        <circle cx="4" cy="24" r="3" fill={color} />
        <circle cx="44" cy="24" r="3" fill={color} />
      </svg>
    ),
    CapacityBuilding: ({ color = colors.accentGreen, size = 48 }) => (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        <rect x="8" y="32" width="32" height="10" rx="2" fill={color} opacity="0.4" />
        <rect x="12" y="22" width="24" height="10" rx="2" fill={color} opacity="0.6" />
        <rect x="16" y="12" width="16" height="10" rx="2" fill={color} opacity="0.8" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill={color} />
      </svg>
    ),
    Check: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    Arrow: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  };

  const services = [
    {
      Icon: Icons.StrategicAdvisory,
      title: t('strategic.title'),
      description: t('strategic.description'),
      color: colors.ctaOrange,
      features: [
        { title: t('strategic.features.feature1.title'), desc: t('strategic.features.feature1.desc') },
        { title: t('strategic.features.feature2.title'), desc: t('strategic.features.feature2.desc') },
        { title: t('strategic.features.feature3.title'), desc: t('strategic.features.feature3.desc') },
        { title: t('strategic.features.feature4.title'), desc: t('strategic.features.feature4.desc') },
      ],
    },
    {
      Icon: Icons.MESystems,
      title: t('monitoring.title'),
      description: t('monitoring.description'),
      color: colors.secondaryTeal,
      features: [
        { title: t('monitoring.features.feature1.title'), desc: t('monitoring.features.feature1.desc') },
        { title: t('monitoring.features.feature2.title'), desc: t('monitoring.features.feature2.desc') },
        { title: t('monitoring.features.feature3.title'), desc: t('monitoring.features.feature3.desc') },
        { title: t('monitoring.features.feature4.title'), desc: t('monitoring.features.feature4.desc') },
      ],
    },
    {
      Icon: Icons.DigitalInnovation,
      title: t('innovation.title'),
      description: t('innovation.description'),
      color: colors.accentYellow,
      features: [
        { title: t('innovation.features.feature1.title'), desc: t('innovation.features.feature1.desc') },
        { title: t('innovation.features.feature2.title'), desc: t('innovation.features.feature2.desc') },
        { title: t('innovation.features.feature3.title'), desc: t('innovation.features.feature3.desc') },
        { title: t('innovation.features.feature4.title'), desc: t('innovation.features.feature4.desc') },
      ],
    },
    {
      Icon: Icons.CapacityBuilding,
      title: t('capacity.title'),
      description: t('capacity.description'),
      color: colors.accentGreen,
      features: [
        { title: t('capacity.features.feature1.title'), desc: t('capacity.features.feature1.desc') },
        { title: t('capacity.features.feature2.title'), desc: t('capacity.features.feature2.desc') },
        { title: t('capacity.features.feature3.title'), desc: t('capacity.features.feature3.desc') },
        { title: t('capacity.features.feature4.title'), desc: t('capacity.features.feature4.desc') },
      ],
    },
  ];

  const approachSteps = [
    {
      number: '01',
      title: t('approach.steps.step1.title'),
      desc: t('approach.steps.step1.desc'),
      color: colors.ctaOrange
    },
    {
      number: '02',
      title: t('approach.steps.step2.title'),
      desc: t('approach.steps.step2.desc'),
      color: colors.secondaryTeal
    },
    {
      number: '03',
      title: t('approach.steps.step3.title'),
      desc: t('approach.steps.step3.desc'),
      color: colors.accentYellow
    },
    {
      number: '04',
      title: t('approach.steps.step4.title'),
      desc: t('approach.steps.step4.desc'),
      color: colors.accentGreen
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
          <p className="text-xl text-white/70 max-w-2xl">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              {t('intro.subtitle')}
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-4" style={{ color: colors.primaryNavy }}>
              {t('intro.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-16" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: Service Header */}
                  <div className="lg:col-span-5 p-10" style={{ backgroundColor: `${service.color}05` }}>
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.Icon color={service.color} size={48} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: service.color }}>
                      <span className="text-4xl font-bold opacity-10">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Right: Features Grid */}
                  <div className="lg:col-span-7 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all"
                        >
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <Icons.Check size={14} color={service.color} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1" style={{ color: colors.primaryNavy }}>
                              {feature.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              {t('approach.subtitle')}
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-4" style={{ color: colors.primaryNavy }}>
              {t('approach.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('approach.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, i) => (
              <div
                key={i}
                className="relative"
              >
                {/* Connector Line (hidden on last item) */}
                {i < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 rtl:translate-x-1/2" />
                )}

                <div className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-lg"
                    style={{ backgroundColor: `${step.color}15`, color: step.color }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-semibold text-lg mb-2" style={{ color: colors.primaryNavy }}>
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {t('cta.subtitle')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rtl:gap-2 px-8 py-4 text-white font-semibold rounded-md transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: colors.ctaOrange }}
          >
            {t('cta.button')}
            <Icons.Arrow size={18} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
}
