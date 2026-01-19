import { setRequestLocale, getTranslations } from 'next-intl/server';
import WorkWithUsPageClient from './WorkWithUsPageClient';

export default async function WorkWithUsPage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations('workWithUs');
  const tNav = await getTranslations('navigation');

  // Prepare translations object to pass to client
  const translations = {
    hero: {
      breadcrumb: t('hero.breadcrumb'),
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
    },
    tabs: {
      partner: t('tabs.partner'),
      careers: t('tabs.careers'),
      consultancy: t('tabs.consultancy'),
    },
    partner: {
      title: t('partner.title'),
      subtitle: t('partner.subtitle'),
      whyPartner: t('partner.whyPartner'),
      benefits: {
        benefit1: {
          title: t('partner.benefits.benefit1.title'),
          description: t('partner.benefits.benefit1.description'),
        },
        benefit2: {
          title: t('partner.benefits.benefit2.title'),
          description: t('partner.benefits.benefit2.description'),
        },
        benefit3: {
          title: t('partner.benefits.benefit3.title'),
          description: t('partner.benefits.benefit3.description'),
        },
        benefit4: {
          title: t('partner.benefits.benefit4.title'),
          description: t('partner.benefits.benefit4.description'),
        },
        benefit5: {
          title: t('partner.benefits.benefit5.title'),
          description: t('partner.benefits.benefit5.description'),
        },
      },
      partnershipOpportunities: t('partner.partnershipOpportunities'),
      types: {
        implementation: {
          title: t('partner.types.implementation.title'),
          description: t('partner.types.implementation.description'),
        },
        research: {
          title: t('partner.types.research.title'),
          description: t('partner.types.research.description'),
        },
        donors: {
          title: t('partner.types.donors.title'),
          description: t('partner.types.donors.description'),
        },
      },
      cta: {
        title: t('partner.cta.title'),
        subtitle: t('partner.cta.subtitle'),
        button: t('partner.cta.button'),
      },
    },
    careers: {
      title: t('careers.title'),
      subtitle: t('careers.subtitle'),
      whyWorkTitle: t('careers.whyWorkTitle'),
      reasons: {
        reason1: {
          title: t('careers.reasons.reason1.title'),
          description: t('careers.reasons.reason1.description'),
        },
        reason2: {
          title: t('careers.reasons.reason2.title'),
          description: t('careers.reasons.reason2.description'),
        },
        reason3: {
          title: t('careers.reasons.reason3.title'),
          description: t('careers.reasons.reason3.description'),
        },
        reason4: {
          title: t('careers.reasons.reason4.title'),
          description: t('careers.reasons.reason4.description'),
        },
      },
      currentOpenings: t('careers.currentOpenings'),
      positionsAvailable: t('careers.positionsAvailable'),
      viewRequirements: t('careers.viewRequirements'),
      showLess: t('careers.showLess'),
      applyNow: t('careers.applyNow'),
      requirements: t('careers.requirements'),
      jobs: {
        job1: {
          title: t('careers.jobs.job1.title'),
          type: t('careers.jobs.job1.type'),
          location: t('careers.jobs.job1.location'),
          department: t('careers.jobs.job1.department'),
          posted: t('careers.jobs.job1.posted'),
          description: t('careers.jobs.job1.description'),
          requirements: t.raw('careers.jobs.job1.requirements'),
        },
        job2: {
          title: t('careers.jobs.job2.title'),
          type: t('careers.jobs.job2.type'),
          location: t('careers.jobs.job2.location'),
          department: t('careers.jobs.job2.department'),
          posted: t('careers.jobs.job2.posted'),
          description: t('careers.jobs.job2.description'),
          requirements: t.raw('careers.jobs.job2.requirements'),
        },
        job3: {
          title: t('careers.jobs.job3.title'),
          type: t('careers.jobs.job3.type'),
          location: t('careers.jobs.job3.location'),
          department: t('careers.jobs.job3.department'),
          posted: t('careers.jobs.job3.posted'),
          description: t('careers.jobs.job3.description'),
          requirements: t.raw('careers.jobs.job3.requirements'),
        },
      },
      noPosition: {
        title: t('careers.noPosition.title'),
        description: t('careers.noPosition.description'),
        button: t('careers.noPosition.button'),
      },
    },
    consultancy: {
      title: t('consultancy.title'),
      subtitle: t('consultancy.subtitle'),
      areasTitle: t('consultancy.areasTitle'),
      areas: {
        me: {
          title: t('consultancy.areas.me.title'),
          items: t.raw('consultancy.areas.me.items'),
        },
        strategic: {
          title: t('consultancy.areas.strategic.title'),
          items: t.raw('consultancy.areas.strategic.items'),
        },
        digital: {
          title: t('consultancy.areas.digital.title'),
          items: t.raw('consultancy.areas.digital.items'),
        },
        institutional: {
          title: t('consultancy.areas.institutional.title'),
          items: t.raw('consultancy.areas.institutional.items'),
        },
      },
      benefitsTitle: t('consultancy.benefitsTitle'),
      benefits: {
        benefit1: {
          title: t('consultancy.benefits.benefit1.title'),
          description: t('consultancy.benefits.benefit1.description'),
        },
        benefit2: {
          title: t('consultancy.benefits.benefit2.title'),
          description: t('consultancy.benefits.benefit2.description'),
        },
        benefit3: {
          title: t('consultancy.benefits.benefit3.title'),
          description: t('consultancy.benefits.benefit3.description'),
        },
      },
      applicationForm: {
        title: t('consultancy.applicationForm.title'),
        subtitle: t('consultancy.applicationForm.subtitle'),
        fullName: t('consultancy.applicationForm.fullName'),
        email: t('consultancy.applicationForm.email'),
        phone: t('consultancy.applicationForm.phone'),
        expertise: t('consultancy.applicationForm.expertise'),
        expertisePlaceholder: t('consultancy.applicationForm.expertisePlaceholder'),
        bio: t('consultancy.applicationForm.bio'),
        bioPlaceholder: t('consultancy.applicationForm.bioPlaceholder'),
        uploadCV: t('consultancy.applicationForm.uploadCV'),
        uploadText: t('consultancy.applicationForm.uploadText'),
        browse: t('consultancy.applicationForm.browse'),
        fileInfo: t('consultancy.applicationForm.fileInfo'),
        submit: t('consultancy.applicationForm.submit'),
        required: t('consultancy.applicationForm.required'),
      },
    },
    bottomCTA: {
      title: t('bottomCTA.title'),
      subtitle: t('bottomCTA.subtitle'),
      email: t('bottomCTA.email'),
    },
  };

  const navigationTranslations = {
    // Add any navigation translations needed
  };

  return (
    <WorkWithUsPageClient
      locale={locale}
      translations={translations}
      navigationTranslations={navigationTranslations}
    />
  );
}
