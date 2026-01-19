'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KnowledgePageClient({ locale, translations, navigationTranslations }) {
  const [activeTab, setActiveTab] = useState('publications');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsCategory, setNewsCategory] = useState('all');

  // Brand colors
  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Convert publication items object to array
  const publications = Object.values(translations.publications.items).map((pub, index) => ({
    id: index + 1,
    ...pub,
  }));

  // Convert insight items object to array
  const insights = Object.values(translations.insights.items).map((insight, index) => ({
    id: index + 1,
    ...insight,
  }));

  // Convert news items object to array
  const newsItems = Object.values(translations.news.items).map((news, index) => ({
    id: index + 1,
    ...news,
  }));

  // CMS INTEGRATION NOTE:
  // In future, replace the above arrays with data fetched from Decap CMS
  // Example structure for content/publications/*.md files:
  // ---
  // title: "Publication Title"
  // type: "Assessment Report"
  // date: "2025-12-01"
  // description: "Description text..."
  // tags: ["tag1", "tag2"]
  // featured: true
  // file: "/downloads/publication.pdf"
  // ---

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ backgroundColor: colors.primaryNavy }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full" style={{ backgroundColor: colors.secondaryTeal }} />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full" style={{ backgroundColor: colors.accentLightBlue }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-white/60 text-sm mb-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {translations.hero.breadcrumb}
            </Link>
            <span>/</span>
            <span className="text-white">{navigationTranslations.knowledge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {translations.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-8" style={{ color: colors.accentLightBlue }}>
            {translations.hero.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={translations.hero.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${locale === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2`}
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <div className={`absolute ${locale === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-gray-400`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`flex overflow-x-auto ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Publications Tab */}
            <button
              onClick={() => setActiveTab('publications')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all border-b-2 ${
                activeTab === 'publications' ? 'border-current' : 'border-transparent'
              }`}
              style={{ color: activeTab === 'publications' ? colors.secondaryTeal : colors.primaryNavy }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>{translations.tabs.publications}</span>
              <span
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  backgroundColor: activeTab === 'publications' ? `${colors.secondaryTeal}15` : '#F3F4F6',
                  color: activeTab === 'publications' ? colors.secondaryTeal : colors.primaryNavy
                }}
              >
                {publications.length}
              </span>
            </button>

            {/* Insights Tab */}
            <button
              onClick={() => setActiveTab('insights')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all border-b-2 ${
                activeTab === 'insights' ? 'border-current' : 'border-transparent'
              }`}
              style={{ color: activeTab === 'insights' ? colors.secondaryTeal : colors.primaryNavy }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
              <span>{translations.tabs.insights}</span>
              <span
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  backgroundColor: activeTab === 'insights' ? `${colors.secondaryTeal}15` : '#F3F4F6',
                  color: activeTab === 'insights' ? colors.secondaryTeal : colors.primaryNavy
                }}
              >
                {insights.length}
              </span>
            </button>

            {/* News Tab */}
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-all border-b-2 ${
                activeTab === 'news' ? 'border-current' : 'border-transparent'
              }`}
              style={{ color: activeTab === 'news' ? colors.secondaryTeal : colors.primaryNavy }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="m3 11 18-5v12L3 13v-2z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <span>{translations.tabs.news}</span>
              <span
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  backgroundColor: activeTab === 'news' ? `${colors.secondaryTeal}15` : '#F3F4F6',
                  color: activeTab === 'news' ? colors.secondaryTeal : colors.primaryNavy
                }}
              >
                {newsItems.length}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Publications Tab Content */}
        {activeTab === 'publications' && (
          <div>
            {/* Filter Bar */}
            <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ${locale === 'ar' ? 'md:flex-row-reverse' : ''}`}>
              <h2 className="text-2xl font-bold" style={{ color: colors.primaryNavy }}>
                {translations.publications.title}
              </h2>
              <div className={`flex items-center gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" style={{ color: colors.primaryNavy }}>
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                  style={{ color: colors.primaryNavy }}
                >
                  {Object.entries(translations.publications.filters).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Featured Publications */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`} style={{ color: colors.secondaryTeal }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.ctaOrange }} />
                {translations.publications.featured}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.filter(p => p.featured).map(pub => (
                  <PublicationCard key={pub.id} publication={pub} translations={translations} colors={colors} locale={locale} />
                ))}
              </div>
            </div>

            {/* All Publications */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primaryNavy }}>
                {translations.publications.allPublications}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publications.filter(p => !p.featured).map(pub => (
                  <PublicationCard key={pub.id} publication={pub} translations={translations} colors={colors} locale={locale} />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-10">
              <button
                className="px-6 py-3 rounded-lg font-medium border-2 transition-colors hover:bg-opacity-10"
                style={{
                  borderColor: colors.secondaryTeal,
                  color: colors.secondaryTeal,
                }}
              >
                {translations.publications.loadMore}
              </button>
            </div>
          </div>
        )}

        {/* Insights Tab Content */}
        {activeTab === 'insights' && (
          <div>
            {/* Header with Categories */}
            <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ${locale === 'ar' ? 'md:flex-row-reverse' : ''}`}>
              <h2 className="text-2xl font-bold" style={{ color: colors.primaryNavy }}>
                {translations.insights.title}
              </h2>
              <div className={`flex flex-wrap gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                {Object.entries(translations.insights.categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === key ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={selectedCategory === key ? { backgroundColor: colors.secondaryTeal } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Insight */}
            <div className="mb-10 p-8 rounded-xl" style={{ backgroundColor: `${colors.primaryNavy}08` }}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={locale === 'ar' ? 'text-right' : ''}>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{
                      backgroundColor: colors.accentYellow,
                      color: colors.primaryNavy
                    }}
                  >
                    {translations.insights.featuredArticle}
                  </span>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
                    {insights[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insights[0].excerpt}
                  </p>
                  <div className={`flex items-center gap-4 text-sm text-gray-500 mb-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span>{insights[0].author}</span>
                    <span>•</span>
                    <span>{insights[0].date}</span>
                    <span>•</span>
                    <span>{insights[0].readTime}</span>
                  </div>
                  <button
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
                    style={{ backgroundColor: colors.ctaOrange }}
                  >
                    {translations.insights.readFullArticle}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
                <div className="h-64 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.secondaryTeal}15` }}>
                  <div className="text-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 mx-auto mb-2" style={{ color: colors.secondaryTeal }}>
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                    <p className="text-sm text-gray-500">Featured Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {insights.slice(1).map(insight => (
                <InsightCard key={insight.id} insight={insight} translations={translations} colors={colors} locale={locale} />
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: colors.primaryNavy }}>
              <h3 className="text-2xl font-bold text-white mb-3">
                {translations.insights.newsletter.title}
              </h3>
              <p className="mb-6 max-w-lg mx-auto" style={{ color: colors.accentLightBlue }}>
                {translations.insights.newsletter.subtitle}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${locale === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
                <input
                  type="email"
                  placeholder={translations.insights.newsletter.placeholder}
                  className={`flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${locale === 'ar' ? 'text-right' : ''}`}
                  style={{ backgroundColor: '#FFFFFF' }}
                />
                <button
                  className="px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: colors.ctaOrange }}
                >
                  {translations.insights.newsletter.subscribe}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* News Tab Content */}
        {activeTab === 'news' && (
          <div>
            {/* Header with Categories */}
            <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ${locale === 'ar' ? 'md:flex-row-reverse' : ''}`}>
              <h2 className="text-2xl font-bold" style={{ color: colors.primaryNavy }}>
                {translations.news.title}
              </h2>
              <div className={`flex flex-wrap gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                {Object.entries(translations.news.categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setNewsCategory(key)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      newsCategory === key ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={newsCategory === key ? { backgroundColor: colors.secondaryTeal } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* News Items */}
            <div className="grid gap-4 mb-8">
              {newsItems.map(news => (
                <NewsCard key={news.id} news={news} colors={colors} locale={locale} />
              ))}
            </div>

            {/* Archive Section */}
            <div className="p-6 rounded-lg text-center mb-8" style={{ backgroundColor: `${colors.accentLightBlue}15` }}>
              <h4 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
                {translations.news.archive.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {translations.news.archive.subtitle}
              </p>
              <button
                className={`flex items-center gap-2 mx-auto px-4 py-2 rounded-lg font-medium transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
                style={{
                  color: colors.secondaryTeal,
                  backgroundColor: '#FFFFFF'
                }}
              >
                {translations.news.archive.button}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Media Contact */}
            <div
              className={`p-6 rounded-lg border-l-4 ${locale === 'ar' ? 'border-l-0 border-r-4 text-right' : ''}`}
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: colors.ctaOrange
              }}
            >
              <h4 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
                {translations.news.mediaContact.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {translations.news.mediaContact.description}
              </p>
              <a
                href={`mailto:${translations.news.mediaContact.email}`}
                className="text-sm font-medium"
                style={{ color: colors.ctaOrange }}
              >
                {translations.news.mediaContact.email}
              </a>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
            {translations.cta.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {translations.cta.subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${locale === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <button
              className="px-6 py-3 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: colors.ctaOrange }}
            >
              {translations.cta.contactTeam}
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium border-2 transition-colors"
              style={{
                borderColor: colors.primaryNavy,
                color: colors.primaryNavy
              }}
            >
              {translations.cta.requestResearch}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Publication Card Component
function PublicationCard({ publication, translations, colors, locale }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className={`p-6 ${locale === 'ar' ? 'text-right' : ''}`}>
        {/* Type Badge */}
        <div className={`flex items-center justify-between mb-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          <span
            className="px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              backgroundColor: `${colors.secondaryTeal}15`,
              color: colors.secondaryTeal
            }}
          >
            {publication.type}
          </span>
          <span className="text-sm text-gray-500">{publication.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2" style={{ color: colors.primaryNavy }}>
          {publication.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {publication.description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 mb-4 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          {publication.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Download Button */}
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
          style={{
            backgroundColor: colors.ctaOrange,
            color: '#FFFFFF'
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {translations.publications.downloadPDF}
        </button>
      </div>
    </div>
  );
}

// Insight Card Component
function InsightCard({ insight, translations, colors, locale }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Category Banner */}
      <div className="h-1" style={{ backgroundColor: colors.secondaryTeal }} />

      <div className={`p-6 ${locale === 'ar' ? 'text-right' : ''}`}>
        {/* Meta Info */}
        <div className={`flex items-center gap-4 mb-3 text-sm text-gray-500 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          <span
            className="px-2 py-1 rounded text-xs font-medium"
            style={{
              backgroundColor: `${colors.accentYellow}20`,
              color: colors.primaryNavy
            }}
          >
            {insight.category}
          </span>
          <div className={`flex items-center gap-1 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{insight.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2 hover:underline cursor-pointer" style={{ color: colors.primaryNavy }}>
          {insight.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {insight.excerpt}
        </p>

        {/* Footer */}
        <div className={`flex items-center justify-between pt-4 border-t border-gray-100 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-2 text-sm text-gray-500 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{insight.date}</span>
          </div>
          <button
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
            style={{ color: colors.secondaryTeal }}
          >
            {translations.insights.readMore}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// News Card Component
function NewsCard({ news, colors, locale }) {
  return (
    <div className={`flex gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
      {/* Date Badge */}
      <div
        className="flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white"
        style={{ backgroundColor: colors.primaryNavy }}
      >
        <span className="text-xs opacity-80">
          {news.date.split(' ')[0]}
        </span>
        <span className="text-lg font-bold">
          {news.date.split(' ')[1]?.substring(0, 3) || ''}
        </span>
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 ${locale === 'ar' ? 'text-right' : ''}`}>
        <div className={`flex items-center gap-2 mb-1 ${locale === 'ar' ? 'flex-row-reverse justify-end' : ''}`}>
          <span
            className="px-2 py-0.5 text-xs font-medium rounded"
            style={{
              backgroundColor: `${colors.accentGreen}20`,
              color: colors.accentGreen
            }}
          >
            {news.type}
          </span>
        </div>
        <h4 className="font-semibold mb-1 line-clamp-1 hover:underline cursor-pointer" style={{ color: colors.primaryNavy }}>
          {news.title}
        </h4>
        <p className="text-sm text-gray-600 line-clamp-2">
          {news.excerpt}
        </p>
      </div>
    </div>
  );
}
