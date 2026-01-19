import { setRequestLocale, getTranslations } from 'next-intl/server';
import WorkPageClient from './WorkPageClient';

export default async function WorkPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations('work');
  const tNav = await getTranslations('navigation');

  // Prepare translations object to pass to client
  const translations = {
    hero: {
      breadcrumb: t('hero.breadcrumb'),
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    impactStats: {
      title: t('impactStats.title'),
      stat1: {
        number: t('impactStats.stat1.number'),
        label: t('impactStats.stat1.label'),
        sublabel: t('impactStats.stat1.sublabel'),
      },
      stat2: {
        number: t('impactStats.stat2.number'),
        label: t('impactStats.stat2.label'),
        sublabel: t('impactStats.stat2.sublabel'),
      },
      stat3: {
        number: t('impactStats.stat3.number'),
        label: t('impactStats.stat3.label'),
        sublabel: t('impactStats.stat3.sublabel'),
      },
      stat4: {
        number: t('impactStats.stat4.number'),
        label: t('impactStats.stat4.label'),
        sublabel: t('impactStats.stat4.sublabel'),
      },
    },
    categories: {
      all: t('categories.all'),
      me: t('categories.me'),
      innovation: t('categories.innovation'),
      capacity: t('categories.capacity'),
    },
    modal: {
      close: t('modal.close'),
      partner: t('modal.partner'),
      category: t('modal.category'),
      projectDetails: t('modal.projectDetails'),
      clickAnywhere: t('modal.clickAnywhere'),
    },
    projects: {
      project1: {
        partner: t('projects.project1.partner'),
        title: t('projects.project1.title'),
        description: t('projects.project1.description'),
        tags: t.raw('projects.project1.tags'),
      },
      project2: {
        partner: t('projects.project2.partner'),
        title: t('projects.project2.title'),
        description: t('projects.project2.description'),
        tags: t.raw('projects.project2.tags'),
      },
      project3: {
        partner: t('projects.project3.partner'),
        title: t('projects.project3.title'),
        description: t('projects.project3.description'),
        tags: t.raw('projects.project3.tags'),
      },
      project4: {
        partner: t('projects.project4.partner'),
        title: t('projects.project4.title'),
        description: t('projects.project4.description'),
        tags: t.raw('projects.project4.tags'),
      },
      project5: {
        partner: t('projects.project5.partner'),
        title: t('projects.project5.title'),
        description: t('projects.project5.description'),
        tags: t.raw('projects.project5.tags'),
      },
      project6: {
        partner: t('projects.project6.partner'),
        title: t('projects.project6.title'),
        description: t('projects.project6.description'),
        tags: t.raw('projects.project6.tags'),
      },
      project7: {
        partner: t('projects.project7.partner'),
        title: t('projects.project7.title'),
        description: t('projects.project7.description'),
        tags: t.raw('projects.project7.tags'),
      },
    },
  };

  const navigationTranslations = {
    work: tNav('work'),
  };

  return (
    <WorkPageClient
      locale={locale}
      translations={translations}
      navigationTranslations={navigationTranslations}
    />
  );
}
