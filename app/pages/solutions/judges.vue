<template>
  <div>
    <!-- Solution-specific hero and overview -->
    <SolutionsOverview solution="judges" />

    <!-- Features List -->
    <LazySolutionsFeaturesList solution="judges" hydrate-on-visible />

    <!-- Reusable components -->
    <LazySharedStatistics class="!pt-4" hydrate-on-visible />
    <LazySharedPricing hydrate-on-visible />
    <LazySharedFAQ category="legal" hydrate-on-visible />
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const schemas = useSchemas()

// SEO
usePageSeo({
  title: t('seo.solutions.judges.title'),
  description: t('seo.solutions.judges.description')
})

// Schema.org
useSchemaOrg([schemas.solutionService('judges')])

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.solutions.judges.hero.title'),
  description: t('pages.solutions.judges.hero.subtitle'),
  badge: t('pages.pricing.freeTrial'),
  cta: t('pages.solutions.judges.hero.cta')
})
</script>
