'use client';

import { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose, translations, locale, categoryLabel }) {
  const colors = {
    primaryNavy: '#1E3A5F',
    secondaryTeal: '#5BB5B0',
    accentLightBlue: '#7ECBD4',
    ctaOrange: '#F7931E',
    accentYellow: '#FFC72C',
    accentGreen: '#8DC63F',
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-auto my-8"
          style={{ animation: 'slideUp 0.3s ease-out' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div
            className="relative h-48 rounded-t-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}CC 100%)`
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
              aria-label={translations.modal.close}
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Category badge */}
            <div className="text-white text-center px-6">
              <div className="text-lg font-semibold mb-2 bg-white/20 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
                {categoryLabel}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`p-8 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
            {/* Project Title */}
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: colors.primaryNavy }}
            >
              {project.title}
            </h2>

            {/* Partner */}
            <div className="mb-6">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {translations.modal.partner}
              </span>
              <p
                className="text-lg font-medium mt-1"
                style={{ color: project.color }}
              >
                {project.partner}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-6">
                <div className={`flex flex-wrap gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 rounded-lg font-medium"
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
            )}

            {/* Footer hint */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-400 text-center">
                {translations.modal.clickAnywhere}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
