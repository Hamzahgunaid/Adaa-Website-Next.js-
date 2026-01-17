import { setRequestLocale } from 'next-intl/server';
export default function CareersPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const openings = [
    {
      title: 'Senior M&E Specialist',
      location: 'Aden, Yemen',
      type: 'Full-time',
      description: 'Lead design and implementation of monitoring and evaluation systems for development programs.',
      requirements: [
        '5+ years M&E experience',
        'Advanced degree in relevant field',
        'Fluent in English and Arabic',
        'Experience in humanitarian/development contexts'
      ]
    },
    {
      title: 'Digital Innovation Consultant',
      location: 'Remote / Aden',
      type: 'Full-time',
      description: 'Drive digital transformation initiatives and deploy technology solutions for international organizations.',
      requirements: [
        '3+ years in digital innovation',
        'Experience with AI/ML applications',
        'Strong data analytics skills',
        'Technical project management experience'
      ]
    },
    {
      title: 'Research Associate',
      location: 'Aden, Yemen',
      type: 'Contract',
      description: 'Support research projects, data collection, and analysis for strategic advisory engagements.',
      requirements: [
        'Graduate degree in social sciences',
        'Research methodology expertise',
        'Excellent writing skills',
        'Bilingual (English/Arabic)'
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E3A5F] mb-6">Work With Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of experts driving impact across Yemen and the region
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-gradient-to-br from-[#5BB5B0] to-[#7ECBD4] rounded-xl shadow-lg p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Join Adaa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Meaningful Impact</h3>
              <p className="text-white/90 text-sm">Work on projects that make a real difference in people's lives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Professional Growth</h3>
              <p className="text-white/90 text-sm">Continuous learning and development opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Collaborative Culture</h3>
              <p className="text-white/90 text-sm">Work with talented professionals from diverse backgrounds</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">Current Openings</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-[#5BB5B0] hover:bg-[#4a9d99] text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-[#5BB5B0] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Don't see a fit */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Don't See the Right Role?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-[#1E3A5F] hover:bg-[#2d5179] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Submit Your CV
          </button>
        </div>
      </div>
    </div>
  );
}
