import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default function HomePage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

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
    Arrow: ({ size = 20, color = "currentColor" }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  };

  const services = [
    {
      Icon: Icons.StrategicAdvisory,
      title: 'Strategic Advisory & Evidence-Based Design',
      description: 'We help organizations design programs that are effective, locally owned, and sustainable through rapid contextual analysis and systematic stakeholder engagement.',
      color: colors.ctaOrange,
    },
    {
      Icon: Icons.MESystems,
      title: 'Monitoring, Evaluation & Results Systems',
      description: "We improve learning, accountability, and performance through practical, context-sensitive methods and independent verification across Yemen's governorates.",
      color: colors.secondaryTeal,
    },
    {
      Icon: Icons.DigitalInnovation,
      title: 'Innovation, Technology & Digital Transformation',
      description: 'We deploy responsible AI and practical innovation to enhance organizational effectiveness in low-bandwidth, resource-constrained environments.',
      color: colors.accentYellow,
    },
    {
      Icon: Icons.CapacityBuilding,
      title: 'Capacity Strengthening & Institutional Development',
      description: 'We enhance organizational resilience and performance through people, processes, and systems, fostering sustainable institutional transformation.',
      color: colors.accentGreen,
    },
  ];

  const values = [
    { title: 'Locally Rooted', description: 'Yemeni-led with unmatched contextual intelligence', color: colors.ctaOrange },
    { title: 'Evidence-Based', description: 'Data-driven decisions for measurable impact', color: colors.secondaryTeal },
    { title: 'Innovative', description: 'Responsible technology for complex challenges', color: colors.accentYellow },
    { title: 'Adaptive', description: 'Delivering in complex, shifting environments', color: colors.accentLightBlue },
    { title: 'Impact-Oriented', description: 'Focused on sustainable, lasting change', color: colors.accentGreen },
  ];

  const insights = [
    {
      tag: 'Research',
      title: 'Strengthening Local Capacity in Humanitarian Response',
      date: 'January 2026',
      image: 'research',
      color: colors.secondaryTeal,
    },
    {
      tag: 'Innovation',
      title: 'AI-Powered Health Platforms: Lessons from Yemen',
      date: 'December 2025',
      image: 'innovation',
      color: colors.accentYellow,
    },
    {
      tag: 'Policy Brief',
      title: 'Integrating Climate Risk into Nutrition Programming',
      date: 'November 2025',
      image: 'policy',
      color: colors.accentGreen,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Content - 7 columns */}
            <div className="col-span-12 lg:col-span-7">
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: `${colors.secondaryTeal}15`, color: colors.secondaryTeal }}
              >
                Yemeni-Led · Evidence-Based · Impact-Driven
              </span>

              <h1
                className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ color: colors.primaryNavy }}
              >
                Turning Evidence into Action for Yemen's Future
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ color: colors.secondaryTeal }}>
                <em>Enabling Impact Through Evidence and Innovation</em>
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Adaa' Foundation is an independent Yemeni foundation established in 2018, specializing in institutional performance, evidence-based decision support, and capacity development for local actors operating in complex environments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="group flex items-center gap-2 px-6 py-3.5 text-white font-semibold rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: colors.ctaOrange }}
                >
                  Partner With Us
                  <Icons.Arrow size={18} color="white" />
                </Link>
                <Link
                  href={`/${locale}/work`}
                  className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-md transition-all hover:bg-gray-100"
                  style={{ color: colors.primaryNavy, border: `1.5px solid ${colors.primaryNavy}25` }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  See Our Impact
                </Link>
              </div>
            </div>

            {/* Illustration - 5 columns */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative">
                <svg viewBox="0 0 400 400" className="w-full">
                  {/* Background circles */}
                  <circle cx="200" cy="200" r="160" fill={colors.primaryNavy} opacity="0.03" />
                  <circle cx="200" cy="200" r="120" fill={colors.secondaryTeal} opacity="0.05" />

                  {/* Institutional building abstraction */}
                  <g transform="translate(120, 140)">
                    <rect x="0" y="180" width="160" height="12" rx="2" fill={colors.primaryNavy} opacity="0.1" />
                    <rect x="20" y="80" width="120" height="100" rx="4" fill={colors.primaryNavy} opacity="0.08" />
                    <rect x="30" y="90" width="100" height="80" rx="2" fill="white" />

                    {/* Windows/data grid */}
                    <g fill={colors.secondaryTeal} opacity="0.6">
                      <rect x="40" y="100" width="18" height="14" rx="2" />
                      <rect x="66" y="100" width="18" height="14" rx="2" />
                      <rect x="92" y="100" width="18" height="14" rx="2" />
                      <rect x="40" y="122" width="18" height="14" rx="2" />
                      <rect x="66" y="122" width="18" height="14" rx="2" />
                      <rect x="92" y="122" width="18" height="14" rx="2" />
                      <rect x="40" y="144" width="18" height="14" rx="2" />
                      <rect x="66" y="144" width="18" height="14" rx="2" />
                      <rect x="92" y="144" width="18" height="14" rx="2" />
                    </g>

                    <polygon points="80,40 140,80 20,80" fill={colors.primaryNavy} opacity="0.15" />
                    <circle cx="80" cy="55" r="12" fill={colors.ctaOrange} />
                  </g>

                  {/* Data flow elements */}
                  <g>
                    <circle cx="100" cy="280" r="8" fill={colors.accentGreen} opacity="0.8" />
                    <circle cx="140" cy="240" r="6" fill={colors.accentYellow} opacity="0.8" />
                    <circle cx="90" cy="200" r="7" fill={colors.ctaOrange} opacity="0.8" />
                    <circle cx="300" cy="260" r="7" fill={colors.secondaryTeal} opacity="0.8" />
                    <circle cx="320" cy="220" r="5" fill={colors.accentGreen} opacity="0.8" />
                    <circle cx="280" cy="180" r="8" fill={colors.accentYellow} opacity="0.8" />

                    <path d="M100 280 Q 120 260 140 240 Q 115 220 90 200" stroke={colors.primaryNavy} strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="4 4" />
                    <path d="M300 260 Q 310 240 320 220 Q 300 200 280 180" stroke={colors.primaryNavy} strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="4 4" />
                  </g>

                  {/* People/stakeholders abstraction */}
                  <g transform="translate(200, 320)">
                    <g transform="translate(-50, 0)">
                      <circle cx="0" cy="-20" r="10" fill={colors.ctaOrange} />
                      <rect x="-8" y="-8" width="16" height="28" rx="4" fill={colors.ctaOrange} opacity="0.6" />
                    </g>
                    <g transform="translate(0, -10)">
                      <circle cx="0" cy="-20" r="12" fill={colors.secondaryTeal} />
                      <rect x="-10" y="-6" width="20" height="32" rx="5" fill={colors.secondaryTeal} opacity="0.6" />
                    </g>
                    <g transform="translate(50, 0)">
                      <circle cx="0" cy="-20" r="10" fill={colors.accentGreen} />
                      <rect x="-8" y="-8" width="16" height="28" rx="4" fill={colors.accentGreen} opacity="0.6" />
                    </g>
                  </g>

                  {/* Magnifying glass element */}
                  <g transform="translate(280, 80)">
                    <circle cx="30" cy="30" r="28" stroke={colors.primaryNavy} strokeWidth="3" fill="white" fillOpacity="0.9" />
                    <line x1="50" y1="50" x2="70" y2="70" stroke={colors.primaryNavy} strokeWidth="4" strokeLinecap="round" />
                    <circle cx="22" cy="28" r="4" fill={colors.ctaOrange} />
                    <circle cx="35" cy="24" r="3" fill={colors.accentYellow} />
                    <circle cx="30" cy="36" r="4" fill={colors.accentGreen} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { number: '7+', label: 'Performance & Monitoring Systems', color: colors.secondaryTeal },
              { number: '20+', label: 'Knowledge Products & Tools', color: colors.ctaOrange },
              { number: '5+', label: 'Institutional Strategies', color: colors.accentGreen },
              { number: '2+', label: 'Digital Innovations', color: colors.accentYellow },
            ].map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              Our Services
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:border-gray-200 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}10` }}
                >
                  <service.Icon color={service.color} size={32} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                  style={{ color: service.color }}
                >
                  Learn More
                  <Icons.Arrow size={16} color={service.color} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ADAA SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
              Our Values
            </span>
            <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
              Why Adaa'
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: value.color }}
                />
                <h3 className="font-semibold text-sm mb-1" style={{ color: colors.primaryNavy }}>
                  {value.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST INSIGHTS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.secondaryTeal }}>
                Knowledge Hub
              </span>
              <h2 className="text-3xl font-bold mt-2" style={{ color: colors.primaryNavy }}>
                Latest Insights
              </h2>
            </div>
            <Link
              href={`/${locale}/knowledge`}
              className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all mt-4 lg:mt-0"
              style={{ color: colors.primaryNavy }}
            >
              View All Insights
              <Icons.Arrow size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Image placeholder */}
                <div
                  className="h-48 relative"
                  style={{ backgroundColor: `${insight.color}15` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${insight.color}20` }}
                    >
                      {insight.image === 'research' && (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={insight.color} strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {insight.image === 'innovation' && (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={insight.color} strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {insight.image === 'policy' && (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={insight.color} strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full text-white"
                    style={{ backgroundColor: insight.color }}
                  >
                    {insight.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-teal-600 transition-colors" style={{ color: colors.primaryNavy }}>
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{insight.date}</p>
                  <Link
                    href={`/${locale}/knowledge`}
                    className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                    style={{ color: insight.color }}
                  >
                    Read More
                    <Icons.Arrow size={16} color={insight.color} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY SECTION ===== */}
      <section className="py-16 border-y border-gray-200" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 mb-8 tracking-wider uppercase">
            Trusted By Leading Organizations
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
            {/* Partner logo placeholders */}
            {['UNDP', 'UNICEF', 'WFP', 'UN OCHA', 'FAO'].map((partner, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-lg border border-gray-200 bg-white"
              >
                <span className="text-sm font-semibold text-gray-400">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: colors.primaryNavy }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Partner with us to achieve lasting impact in Yemen
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-md transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: colors.ctaOrange }}
          >
            Contact Us
            <Icons.Arrow size={18} color="white" />
          </Link>
        </div>
      </section>
    </div>
  );
}
