'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectModal from './ProjectModal';

export default function WorkPageClient({ locale, translations, navigationTranslations }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Brand colors
  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Project categories
  const categories = [
    { id: 'all', label: translations.categories.all, color: colors.primaryNavy },
    { id: 'me', label: translations.categories.me, color: colors.secondaryTeal },
    { id: 'innovation', label: translations.categories.innovation, color: colors.accentYellow },
    { id: 'capacity', label: translations.categories.capacity, color: colors.accentGreen },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      category: 'me',
      partner: translations.projects.project1.partner,
      title: translations.projects.project1.title,
      description: translations.projects.project1.description,
      tags: translations.projects.project1.tags,
      color: colors.secondaryTeal,
    },
    {
      id: 2,
      category: 'me',
      partner: translations.projects.project2.partner,
      title: translations.projects.project2.title,
      description: translations.projects.project2.description,
      tags: translations.projects.project2.tags,
      color: colors.secondaryTeal,
    },
    {
      id: 3,
      category: 'innovation',
      partner: translations.projects.project3.partner,
      title: translations.projects.project3.title,
      description: translations.projects.project3.description,
      tags: translations.projects.project3.tags,
      color: colors.accentYellow,
    },
    {
      id: 4,
      category: 'innovation',
      partner: translations.projects.project4.partner,
      title: translations.projects.project4.title,
      description: translations.projects.project4.description,
      tags: translations.projects.project4.tags,
      color: colors.accentYellow,
    },
    {
      id: 5,
      category: 'innovation',
      partner: translations.projects.project5.partner,
      title: translations.projects.project5.title,
      description: translations.projects.project5.description,
      tags: translations.projects.project5.tags,
      color: colors.accentYellow,
    },
    {
      id: 6,
      category: 'capacity',
      partner: translations.projects.project6.partner,
      title: translations.projects.project6.title,
      description: translations.projects.project6.description,
      tags: translations.projects.project6.tags,
      color: colors.accentGreen,
    },
    {
      id: 7,
      category: 'capacity',
      partner: translations.projects.project7.partner,
      title: translations.projects.project7.title,
      description: translations.projects.project7.description,
      tags: translations.projects.project7.tags,
      color: colors.accentGreen,
    },
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Modal handlers
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ backgroundColor: colors.primaryNavy }}>
        {/* Background pattern */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-white/60 text-sm mb-6 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {translations.hero.breadcrumb}
            </Link>
            <span>/</span>
            <span className="text-white">{navigationTranslations.work}</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">{translations.hero.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            {translations.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: colors.secondaryTeal }}
            >
              {translations.impactStats.title}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['stat1', 'stat2', 'stat3', 'stat4'].map((stat, i) => {
              const statColors = [colors.secondaryTeal, colors.ctaOrange, colors.accentGreen, colors.accentYellow];
              const statColor = statColors[i];

              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl"
                  style={{ backgroundColor: `${statColor}08`, border: `1px solid ${statColor}15` }}
                >
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: statColor }}
                  >
                    {translations.impactStats[stat].number}
                  </div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: colors.primaryNavy }}
                  >
                    {translations.impactStats[stat].label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {translations.impactStats[stat].sublabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === category.id
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                style={activeFilter === category.id ? { backgroundColor: category.color } : {}}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {/* Project Header */}
                <div
                  className="h-48 flex items-center justify-center p-6"
                  style={{
                    background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}CC 100%)`
                  }}
                >
                  <div className="text-white text-center">
                    <div
                      className="text-sm font-semibold mb-2 bg-white/20 inline-block px-3 py-1 rounded-full"
                    >
                      {categories.find(c => c.id === project.category)?.label}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.primaryNavy }}>
                    {project.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: project.color }}
                  >
                    {project.partner}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        translations={translations}
        locale={locale}
        categoryLabel={selectedProject ? categories.find(c => c.id === selectedProject.category)?.label : ''}
      />
    </div>
  );
}
