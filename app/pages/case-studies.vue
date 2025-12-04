<template>
  <div>
    <!-- Hero Section -->
    <CaseStudiesHero />

    <!-- Case Studies List -->
    <LazyCaseStudiesList hydrate-on-visible />

    <!-- CTA Section -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.caseStudies.title'),
  description: t('seo.caseStudies.description')
})

// OG Image generation
defineOgImageComponent('Main', {
  title: t('pages.caseStudies.hero.title'),
  description: t('pages.caseStudies.hero.subtitle')
})

// Schema.org
defineWebPage({
  name: t('seo.caseStudies.title'),
  description: t('seo.caseStudies.description')
})
</script>
