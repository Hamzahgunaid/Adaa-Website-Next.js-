import { setRequestLocale, getTranslations } from 'next-intl/server';
import KnowledgePageClient from './KnowledgePageClient';

export default async function KnowledgePage({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations('knowledge');
  const tNav = await getTranslations('navigation');

  // Prepare translations object to pass to client
  const translations = {
    hero: {
      breadcrumb: t('hero.breadcrumb'),
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      searchPlaceholder: t('hero.searchPlaceholder'),
    },
    tabs: {
      news: t('tabs.news'),
      publications: t('tabs.publications'),
      insights: t('tabs.insights'),
    },
    publications: {
      title: t('publications.title'),
      featured: t('publications.featured'),
      allPublications: t('publications.allPublications'),
      downloadPDF: t('publications.downloadPDF'),
      loadMore: t('publications.loadMore'),
      filters: {
        all: t('publications.filters.all'),
        report: t('publications.filters.report'),
        brief: t('publications.filters.brief'),
        guide: t('publications.filters.guide'),
        caseStudy: t('publications.filters.caseStudy'),
      },
      items: {
        pub1: {
          title: t('publications.items.pub1.title'),
          type: t('publications.items.pub1.type'),
          date: t('publications.items.pub1.date'),
          description: t('publications.items.pub1.description'),
          tags: t.raw('publications.items.pub1.tags'),
          featured: true,
        },
        pub2: {
          title: t('publications.items.pub2.title'),
          type: t('publications.items.pub2.type'),
          date: t('publications.items.pub2.date'),
          description: t('publications.items.pub2.description'),
          tags: t.raw('publications.items.pub2.tags'),
          featured: true,
        },
        pub3: {
          title: t('publications.items.pub3.title'),
          type: t('publications.items.pub3.type'),
          date: t('publications.items.pub3.date'),
          description: t('publications.items.pub3.description'),
          tags: t.raw('publications.items.pub3.tags'),
          featured: false,
        },
        pub4: {
          title: t('publications.items.pub4.title'),
          type: t('publications.items.pub4.type'),
          date: t('publications.items.pub4.date'),
          description: t('publications.items.pub4.description'),
          tags: t.raw('publications.items.pub4.tags'),
          featured: false,
        },
        pub5: {
          title: t('publications.items.pub5.title'),
          type: t('publications.items.pub5.type'),
          date: t('publications.items.pub5.date'),
          description: t('publications.items.pub5.description'),
          tags: t.raw('publications.items.pub5.tags'),
          featured: false,
        },
      },
    },
    insights: {
      title: t('insights.title'),
      featuredArticle: t('insights.featuredArticle'),
      readFullArticle: t('insights.readFullArticle'),
      readMore: t('insights.readMore'),
      categories: {
        all: t('insights.categories.all'),
        thought: t('insights.categories.thought'),
        innovation: t('insights.categories.innovation'),
        technical: t('insights.categories.technical'),
        caseStudy: t('insights.categories.caseStudy'),
      },
      newsletter: {
        title: t('insights.newsletter.title'),
        subtitle: t('insights.newsletter.subtitle'),
        placeholder: t('insights.newsletter.placeholder'),
        subscribe: t('insights.newsletter.subscribe'),
      },
      items: {
        insight1: {
          title: t('insights.items.insight1.title'),
          author: t('insights.items.insight1.author'),
          date: t('insights.items.insight1.date'),
          excerpt: t('insights.items.insight1.excerpt'),
          category: t('insights.items.insight1.category'),
          readTime: t('insights.items.insight1.readTime'),
        },
        insight2: {
          title: t('insights.items.insight2.title'),
          author: t('insights.items.insight2.author'),
          date: t('insights.items.insight2.date'),
          excerpt: t('insights.items.insight2.excerpt'),
          category: t('insights.items.insight2.category'),
          readTime: t('insights.items.insight2.readTime'),
        },
        insight3: {
          title: t('insights.items.insight3.title'),
          author: t('insights.items.insight3.author'),
          date: t('insights.items.insight3.date'),
          excerpt: t('insights.items.insight3.excerpt'),
          category: t('insights.items.insight3.category'),
          readTime: t('insights.items.insight3.readTime'),
        },
        insight4: {
          title: t('insights.items.insight4.title'),
          author: t('insights.items.insight4.author'),
          date: t('insights.items.insight4.date'),
          excerpt: t('insights.items.insight4.excerpt'),
          category: t('insights.items.insight4.category'),
          readTime: t('insights.items.insight4.readTime'),
        },
      },
    },
    news: {
      title: t('news.title'),
      categories: {
        all: t('news.categories.all'),
        press: t('news.categories.press'),
        announcements: t('news.categories.announcements'),
        updates: t('news.categories.updates'),
      },
      archive: {
        title: t('news.archive.title'),
        subtitle: t('news.archive.subtitle'),
        button: t('news.archive.button'),
      },
      mediaContact: {
        title: t('news.mediaContact.title'),
        description: t('news.mediaContact.description'),
        email: t('news.mediaContact.email'),
      },
      items: {
        news1: {
          title: t('news.items.news1.title'),
          date: t('news.items.news1.date'),
          type: t('news.items.news1.type'),
          excerpt: t('news.items.news1.excerpt'),
        },
        news2: {
          title: t('news.items.news2.title'),
          date: t('news.items.news2.date'),
          type: t('news.items.news2.type'),
          excerpt: t('news.items.news2.excerpt'),
        },
        news3: {
          title: t('news.items.news3.title'),
          date: t('news.items.news3.date'),
          type: t('news.items.news3.type'),
          excerpt: t('news.items.news3.excerpt'),
        },
      },
    },
    cta: {
      title: t('cta.title'),
      subtitle: t('cta.subtitle'),
      contactTeam: t('cta.contactTeam'),
      requestResearch: t('cta.requestResearch'),
    },
  };

  const navigationTranslations = {
    knowledge: tNav('knowledge'),
  };

  return (
    <KnowledgePageClient
      locale={locale}
      translations={translations}
      navigationTranslations={navigationTranslations}
    />
  );
}
