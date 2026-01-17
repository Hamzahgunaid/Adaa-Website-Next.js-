import { setRequestLocale } from 'next-intl/server';
export default function AboutPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[#1E3A5F] mb-8">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Adaa Consulting is a leading management consulting firm dedicated to transforming organizations through strategic solutions, evidence-based methodologies, and innovative approaches.
          </p>
          <h2 className="text-3xl font-bold text-[#1E3A5F] mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We empower organizations across Yemen and the region to achieve sustainable impact through locally-rooted expertise, data-driven insights, and adaptive solutions that deliver measurable results.
          </p>
          <h2 className="text-3xl font-bold text-[#1E3A5F] mt-12 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded by local experts with deep contextual knowledge and international experience, Adaa Consulting bridges the gap between global best practices and local realities. Our team brings decades of combined experience in strategic advisory, monitoring and evaluation, digital innovation, and capacity development.
          </p>
        </div>
      </div>
    </div>
  );
}
