import { setRequestLocale } from 'next-intl/server';
export default function KnowledgePage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const publications = [
    {
      type: 'Research Report',
      title: 'Strengthening Local Capacity in Humanitarian Response',
      date: 'January 2026',
      description: 'Analysis of local capacity strengthening approaches in complex humanitarian contexts.',
      tag: 'Research'
    },
    {
      type: 'White Paper',
      title: 'AI-Powered Health Platforms: Lessons from Yemen',
      date: 'December 2025',
      description: 'Insights on deploying responsible AI solutions in low-resource health settings.',
      tag: 'Innovation'
    },
    {
      type: 'Policy Brief',
      title: 'Integrating Climate Risk into Nutrition Programming',
      date: 'November 2025',
      description: 'Evidence-based recommendations for climate-sensitive nutrition interventions.',
      tag: 'Policy'
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E3A5F] mb-6">Knowledge Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research, insights, and thought leadership from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-white bg-[#5BB5B0] px-3 py-1 rounded-full">
                  {pub.tag}
                </span>
                <span className="text-xs text-gray-500">{pub.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{pub.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{pub.type}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{pub.description}</p>
              <button className="text-[#5BB5B0] font-semibold text-sm hover:text-[#4a9d99] transition-colors flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
