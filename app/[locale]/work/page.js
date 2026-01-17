import { setRequestLocale } from 'next-intl/server';
export default function WorkPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const projects = [
    {
      title: 'Health System Strengthening Program',
      client: 'International Development Agency',
      description: 'Comprehensive M&E system design and implementation for a multi-year health program across 8 governorates.',
      impact: '500+ health facilities monitored, 2M+ beneficiaries tracked',
      category: 'M&E Systems'
    },
    {
      title: 'Digital Cash Transfer Platform',
      client: 'Humanitarian Organization',
      description: 'Development of secure, mobile-first cash assistance platform with real-time verification and reporting.',
      impact: '50,000+ households reached, $5M+ distributed',
      category: 'Digital Innovation'
    },
    {
      title: 'Education Capacity Building Initiative',
      client: 'National Ministry of Education',
      description: 'Institutional assessment and capacity strengthening program for education sector resilience.',
      impact: '200+ staff trained, 15 processes optimized',
      category: 'Capacity Building'
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E3A5F] mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable impact through evidence-based solutions and innovative approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#5BB5B0] to-[#7ECBD4] h-48 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-sm font-semibold mb-2 bg-white/20 inline-block px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{project.title}</h3>
                <p className="text-sm text-[#5BB5B0] font-medium mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700">Impact:</p>
                  <p className="text-sm text-gray-600">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
