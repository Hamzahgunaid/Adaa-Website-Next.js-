import { setRequestLocale } from 'next-intl/server';
export default function ServicesPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const services = [
    {
      title: 'Strategic Advisory & Evidence-Based Design',
      description: 'We help organizations design programs that are effective, locally owned, and sustainable through rapid contextual analysis and systematic stakeholder engagement.',
      features: [
        'Contextual Analysis & Needs Assessment',
        'Theory of Change Development',
        'Strategic Planning & Program Design',
        'Stakeholder Engagement & Consultation',
      ]
    },
    {
      title: 'Monitoring, Evaluation & Results Systems',
      description: 'We improve learning, accountability, and performance through practical, context-sensitive methods and independent verification.',
      features: [
        'M&E Framework Design',
        'Impact Evaluation Studies',
        'Real-Time Monitoring Systems',
        'Data Quality Assessments',
      ]
    },
    {
      title: 'Innovation, Technology & Digital Transformation',
      description: 'We deploy responsible AI and practical innovation to enhance organizational effectiveness.',
      features: [
        'Digital Strategy Development',
        'AI & Machine Learning Solutions',
        'Data Analytics & Visualization',
        'Technology Assessment & Integration',
      ]
    },
    {
      title: 'Capacity Strengthening & Institutional Development',
      description: 'We enhance organizational resilience and performance through people, processes, and systems.',
      features: [
        'Organizational Assessments',
        'Capacity Building Programs',
        'Process Optimization',
        'Knowledge Management Systems',
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E3A5F] mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting services tailored to your organization's unique needs and challenges
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-[#5BB5B0] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
