'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WorkWithUsPageClient({ locale, translations }) {
  const [activeTab, setActiveTab] = useState('partner');

  // Brand colors
  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Convert jobs object to array
  const jobs = Object.values(translations.careers.jobs).map((job, index) => ({
    id: index + 1,
    ...job,
  }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFB' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: colors.primaryNavy }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full" style={{ backgroundColor: colors.secondaryTeal }} />
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full" style={{ backgroundColor: colors.accentLightBlue }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Breadcrumb */}
          <div className={`flex items-center justify-center gap-2 text-white/60 text-sm mb-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {translations.hero.breadcrumb}
            </Link>
            <span>/</span>
            <span className="text-white">{translations.hero.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translations.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: colors.accentLightBlue }}>
            {translations.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`flex overflow-x-auto ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <TabButton
              active={activeTab === 'partner'}
              icon={<HandshakeIcon />}
              label={translations.tabs.partner}
              onClick={() => setActiveTab('partner')}
              colors={colors}
            />
            <TabButton
              active={activeTab === 'careers'}
              icon={<UserPlusIcon />}
              label={translations.tabs.careers}
              onClick={() => setActiveTab('careers')}
              colors={colors}
            />
            <TabButton
              active={activeTab === 'consultancy'}
              icon={<ClipboardIcon />}
              label={translations.tabs.consultancy}
              onClick={() => setActiveTab('consultancy')}
              colors={colors}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Partner Tab */}
        {activeTab === 'partner' && (
          <PartnerTab translations={translations.partner} colors={colors} locale={locale} />
        )}

        {/* Careers Tab */}
        {activeTab === 'careers' && (
          <CareersTab translations={translations.careers} colors={colors} locale={locale} jobs={jobs} />
        )}

        {/* Consultancy Tab */}
        {activeTab === 'consultancy' && (
          <ConsultancyTab translations={translations.consultancy} colors={colors} locale={locale} />
        )}
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
            {translations.bottomCTA.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {translations.bottomCTA.subtitle}
          </p>
          <a
            href={`mailto:${translations.bottomCTA.email}`}
            className={`inline-flex items-center gap-2 font-medium ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
            style={{ color: colors.ctaOrange }}
          >
            {translations.bottomCTA.email}
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

// Tab Button Component
function TabButton({ active, icon, label, onClick, colors }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 font-medium transition-all border-b-3 ${
        active ? 'bg-white' : 'hover:bg-white/50'
      }`}
      style={{
        color: active ? colors.ctaOrange : colors.primaryNavy,
        borderBottomWidth: '3px',
        borderBottomColor: active ? colors.ctaOrange : 'transparent',
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// Partner Tab Component
function PartnerTab({ translations, colors, locale }) {
  return (
    <div>
      {/* Introduction */}
      <div className={`text-center max-w-3xl mx-auto mb-12 ${locale === 'ar' ? 'text-right' : ''}`}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
          {translations.title}
        </h2>
        <p className="text-lg text-gray-600">{translations.subtitle}</p>
      </div>

      {/* Why Partner Section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-center mb-8" style={{ color: colors.secondaryTeal }}>
          {translations.whyPartner}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(translations.benefits).map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} colors={colors} locale={locale} index={index} />
          ))}
        </div>
      </div>

      {/* Partnership Types */}
      <div className="rounded-xl p-8 mb-12" style={{ backgroundColor: `${colors.primaryNavy}08` }}>
        <h3 className="text-xl font-semibold text-center mb-8" style={{ color: colors.primaryNavy }}>
          {translations.partnershipOpportunities}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.values(translations.types).map((type, index) => (
            <PartnerTypeCard key={index} type={type} colors={colors} locale={locale} index={index} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl p-8 text-center" style={{ backgroundColor: colors.primaryNavy }}>
        <h3 className="text-2xl font-bold text-white mb-4">{translations.cta.title}</h3>
        <p className="mb-6 max-w-lg mx-auto" style={{ color: colors.accentLightBlue }}>
          {translations.cta.subtitle}
        </p>
        <button
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
          style={{ backgroundColor: colors.ctaOrange }}
        >
          <SendIcon />
          {translations.cta.button}
        </button>
      </div>
    </div>
  );
}

// Careers Tab Component
function CareersTab({ translations, colors, locale, jobs }) {
  return (
    <div>
      {/* Introduction */}
      <div className={`text-center max-w-3xl mx-auto mb-12 ${locale === 'ar' ? 'text-right' : ''}`}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
          {translations.title}
        </h2>
        <p className="text-lg text-gray-600">{translations.subtitle}</p>
      </div>

      {/* Why Join Us */}
      <div className="rounded-xl p-8 mb-12" style={{ backgroundColor: `${colors.accentLightBlue}15` }}>
        <h3 className="text-xl font-semibold text-center mb-6" style={{ color: colors.primaryNavy }}>
          {translations.whyWorkTitle}
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.values(translations.reasons).map((reason, index) => (
            <ReasonCard key={index} reason={reason} colors={colors} locale={locale} index={index} />
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="mb-12">
        <div className={`flex items-center justify-between mb-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          <h3 className="text-xl font-semibold" style={{ color: colors.primaryNavy }}>
            {translations.currentOpenings}
          </h3>
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${colors.accentGreen}15`,
              color: colors.accentGreen,
            }}
          >
            {jobs.length} {translations.positionsAvailable}
          </span>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} translations={translations} colors={colors} locale={locale} />
          ))}
        </div>
      </div>

      {/* No suitable position */}
      <div
        className={`rounded-lg p-6 border-l-4 ${locale === 'ar' ? 'border-l-0 border-r-4 text-right' : ''}`}
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: colors.secondaryTeal,
        }}
      >
        <h4 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
          {translations.noPosition.title}
        </h4>
        <p className="text-gray-600 mb-4">{translations.noPosition.description}</p>
        <button
          className={`text-sm font-medium flex items-center gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
          style={{ color: colors.ctaOrange }}
        >
          {translations.noPosition.button}
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

// Consultancy Tab Component
function ConsultancyTab({ translations, colors, locale }) {
  return (
    <div>
      {/* Introduction */}
      <div className={`text-center max-w-3xl mx-auto mb-12 ${locale === 'ar' ? 'text-right' : ''}`}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primaryNavy }}>
          {translations.title}
        </h2>
        <p className="text-lg text-gray-600">{translations.subtitle}</p>
      </div>

      {/* Consultancy Areas */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center mb-8" style={{ color: colors.secondaryTeal }}>
          {translations.areasTitle}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(translations.areas).map((area, index) => (
            <ConsultancyAreaCard key={index} area={area} colors={colors} locale={locale} />
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl p-8 mb-12" style={{ backgroundColor: `${colors.primaryNavy}08` }}>
        <h3 className="text-xl font-semibold text-center mb-8" style={{ color: colors.primaryNavy }}>
          {translations.benefitsTitle}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.values(translations.benefits).map((benefit, index) => (
            <ConsultancyBenefitCard key={index} benefit={benefit} colors={colors} locale={locale} index={index} />
          ))}
        </div>
      </div>

      {/* Application Form */}
      <ApplicationForm translations={translations.applicationForm} colors={colors} locale={locale} />
    </div>
  );
}

// Reusable Components
function BenefitCard({ benefit, colors, locale, index }) {
  const icons = ['globe', 'users', 'shield', 'trending', 'refresh'];
  const iconMap = {
    globe: GlobeIcon,
    users: UsersIcon,
    shield: ShieldIcon,
    trending: TrendingIcon,
    refresh: RefreshIcon,
  };
  const Icon = iconMap[icons[index % 5]];

  return (
    <div className={`p-6 rounded-xl bg-white transition-all hover:shadow-lg ${locale === 'ar' ? 'text-right' : ''}`}>
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
        style={{
          backgroundColor: `${colors.secondaryTeal}15`,
          color: colors.secondaryTeal,
        }}
      >
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-3" style={{ color: colors.primaryNavy }}>
        {benefit.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
  );
}

function PartnerTypeCard({ type, colors, locale, index }) {
  const icons = [ToolIcon, MonitorIcon, GlobeIcon];
  const iconColors = [colors.ctaOrange, colors.secondaryTeal, colors.accentGreen];
  const Icon = icons[index % 3];

  return (
    <div className={`bg-white rounded-lg p-6 text-center ${locale === 'ar' ? 'text-right' : ''}`}>
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: `${iconColors[index % 3]}15` }}
      >
        <Icon color={iconColors[index % 3]} />
      </div>
      <h4 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
        {type.title}
      </h4>
      <p className="text-sm text-gray-600">{type.description}</p>
    </div>
  );
}

function ReasonCard({ reason, colors, locale, index }) {
  return (
    <div className={`text-center ${locale === 'ar' ? 'text-right' : ''}`}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <span className="text-xl font-bold" style={{ color: colors.secondaryTeal }}>
          {index + 1}
        </span>
      </div>
      <h4 className="font-semibold mb-1" style={{ color: colors.primaryNavy }}>
        {reason.title}
      </h4>
      <p className="text-sm text-gray-600">{reason.description}</p>
    </div>
  );
}

function JobCard({ job, translations, colors, locale }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
      <div className={`p-6 ${locale === 'ar' ? 'text-right' : ''}`}>
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 ${locale === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primaryNavy }}>
              {job.title}
            </h3>
            <div className={`flex flex-wrap items-center gap-3 text-sm text-gray-500 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
              <span className={`flex items-center gap-1 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPinIcon />
                {job.location}
              </span>
              <span className={`flex items-center gap-1 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <BriefcaseIcon />
                {job.type}
              </span>
              <span className={`flex items-center gap-1 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <ClockIcon />
                {job.posted}
              </span>
            </div>
          </div>
          <span
            className="inline-block px-3 py-1 text-sm font-medium rounded-full"
            style={{
              backgroundColor: `${colors.secondaryTeal}15`,
              color: colors.secondaryTeal,
            }}
          >
            {job.department}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{job.description}</p>

        {/* Expandable Requirements */}
        {expanded && (
          <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#F8FAFB' }}>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: colors.primaryNavy }}>
              {translations.requirements}
            </h4>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className={`flex items-start gap-2 text-sm text-gray-600 ${locale === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                  <CheckIcon color={colors.accentGreen} />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className={`flex items-center justify-between pt-4 border-t border-gray-100 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium transition-colors"
            style={{ color: colors.secondaryTeal }}
          >
            {expanded ? translations.showLess : translations.viewRequirements}
          </button>
          <button
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white transition-colors ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
            style={{ backgroundColor: colors.ctaOrange }}
          >
            {translations.applyNow}
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function ConsultancyAreaCard({ area, colors, locale }) {
  return (
    <div className={`bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-all ${locale === 'ar' ? 'text-right' : ''}`}>
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{
          backgroundColor: `${colors.accentYellow}20`,
          color: colors.primaryNavy,
        }}
      >
        <ChartIcon />
      </div>
      <h3 className="font-semibold mb-3" style={{ color: colors.primaryNavy }}>
        {area.title}
      </h3>
      <ul className="space-y-2">
        {area.items.map((item, index) => (
          <li key={index} className={`flex items-center gap-2 text-sm text-gray-600 ${locale === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: colors.secondaryTeal }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConsultancyBenefitCard({ benefit, colors, locale, index }) {
  const emojis = ['📋', '🌐', '📈'];
  return (
    <div className={`bg-white rounded-lg p-6 text-center ${locale === 'ar' ? 'text-right' : ''}`}>
      <div className="text-3xl mb-3">{emojis[index]}</div>
      <h4 className="font-semibold mb-2" style={{ color: colors.primaryNavy }}>
        {benefit.title}
      </h4>
      <p className="text-sm text-gray-600">{benefit.description}</p>
    </div>
  );
}

function ApplicationForm({ translations, colors, locale }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100" style={{ backgroundColor: '#F8FAFB' }}>
        <h3 className={`text-xl font-semibold ${locale === 'ar' ? 'text-right' : ''}`} style={{ color: colors.primaryNavy }}>
          {translations.title}
        </h3>
        <p className={`text-gray-600 mt-1 ${locale === 'ar' ? 'text-right' : ''}`}>{translations.subtitle}</p>
      </div>
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
              {translations.fullName} {translations.required}
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${locale === 'ar' ? 'text-right' : ''}`}
              placeholder={translations.fullName}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
              {translations.email} {translations.required}
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${locale === 'ar' ? 'text-right' : ''}`}
              placeholder={translations.email}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
              {translations.phone}
            </label>
            <input
              type="tel"
              className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${locale === 'ar' ? 'text-right' : ''}`}
              placeholder={translations.phone}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
              {translations.expertise} {translations.required}
            </label>
            <select className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-gray-600 ${locale === 'ar' ? 'text-right' : ''}`}>
              <option value="">{translations.expertisePlaceholder}</option>
              <option value="me">Monitoring & Evaluation</option>
              <option value="strategic">Strategic Advisory</option>
              <option value="digital">Digital Innovation</option>
              <option value="institutional">Institutional Development</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
            {translations.bio} {translations.required}
          </label>
          <textarea
            rows="4"
            className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 ${locale === 'ar' ? 'text-right' : ''}`}
            placeholder={translations.bioPlaceholder}
          />
        </div>
        <div className="mb-6">
          <label className={`block text-sm font-medium text-gray-700 mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>
            {translations.uploadCV} {translations.required}
          </label>
          <div
            className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
            style={{ borderColor: colors.accentLightBlue }}
          >
            <UploadIcon color={colors.secondaryTeal} />
            <p className="text-sm text-gray-600">
              {translations.uploadText} <span style={{ color: colors.ctaOrange }}>{translations.browse}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">{translations.fileInfo}</p>
          </div>
        </div>
        <button
          className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}
          style={{ backgroundColor: colors.ctaOrange }}
        >
          {translations.submit}
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

// Icon Components
function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function ToolIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="w-8 h-8">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function MonitorIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="w-8 h-8">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="w-4 h-4 mt-0.5 flex-shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function UploadIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="w-10 h-10 mx-auto mb-2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
