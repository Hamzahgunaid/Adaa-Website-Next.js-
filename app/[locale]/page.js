import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
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

  const services = [
    {
      title: 'Strategic Advisory & Evidence-Based Design',
      description: 'We help organizations design programs that are effective, locally owned, and sustainable through rapid contextual analysis and systematic stakeholder engagement.',
      color: colors.ctaOrange,
      icon: '🎯',
    },
    {
      title: 'Monitoring, Evaluation & Results Systems',
      description: 'We improve learning, accountability, and performance through practical, context-sensitive methods and independent verification.',
      color: colors.secondaryTeal,
      icon: '📊',
    },
    {
      title: 'Innovation, Technology & Digital Transformation',
      description: 'We deploy responsible AI and practical innovation to enhance organizational effectiveness in low-bandwidth, resource-constrained environments.',
      color: colors.accentYellow,
      icon: '💡',
    },
    {
      title: 'Capacity Strengthening & Institutional Development',
      description: 'We enhance organizational resilience and performance through people, processes, and systems, fostering sustainable institutional transformation.',
      color: colors.accentGreen,
      icon: '🏢',
    },
  ];

  const values = [
    { title: 'Locally Rooted', description: 'Yemeni-led with unmatched contextual intelligence', color: colors.ctaOrange },
    { title: 'Evidence-Based', description: 'Data-driven decisions for measurable impact', color: colors.secondaryTeal },
    { title: 'Innovative', description: 'Responsible technology for complex challenges', color: colors.accentYellow },
    { title: 'Adaptive', description: 'Delivering in complex, shifting environments', color: colors.accentLightBlue },
    { title: 'Impact-Oriented', description: 'Focused on sustainable, lasting change', color: colors.accentGreen },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2d5179] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Organization
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Driving Impact with Evidence and Innovation
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Strategic consulting solutions for modern businesses across Yemen and the region
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 bg-[#F7931E] hover:bg-[#e07a0a] text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services tailored to your organization's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1E3A5F]">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our work and define our approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border-2 hover:border-[#5BB5B0] transition-colors"
                style={{ borderColor: value.color }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#5BB5B0] to-[#7ECBD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with evidence-based strategies and innovative solutions
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-4 bg-white text-[#5BB5B0] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
