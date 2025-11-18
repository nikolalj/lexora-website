<template>
  <div>
    <!-- Solution-specific hero and overview -->
    <SolutionsOverview solution="lawyers" />

    <!-- Features List -->
    <LazySolutionsFeaturesList solution="lawyers" hydrate-on-visible />

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
  title: t('seo.solutions.lawyers.title'),
  description: t('seo.solutions.lawyers.description')
})

// Schema.org
useSchemaOrg([schemas.solutionService('lawyers')])

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.solutions.lawyers.hero.title'),
  description: t('pages.solutions.lawyers.hero.subtitle'),
  badge: t('pages.pricing.freeTrial'),
  cta: t('pages.solutions.lawyers.hero.cta')
})
</script>
