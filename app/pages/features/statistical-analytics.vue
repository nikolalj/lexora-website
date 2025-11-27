<template>
  <div>
    <!-- Hero Section -->
    <FeaturesStatisticalAnalyticsHero class="dark" />

    <!-- What You Can Analyze -->
    <LazyFeaturesStatisticalAnalyticsCapabilities hydrate-on-visible />

    <!-- Real Analytics Examples -->
    <LazyFeaturesStatisticalAnalyticsExamples hydrate-on-visible />

    <!-- Use Cases -->
    <LazyFeaturesStatisticalAnalyticsUseCases hydrate-on-visible />

    <!-- Comparison Before/After -->
    <LazyFeaturesStatisticalAnalyticsComparison hydrate-on-visible />

    <!-- Statistics -->
    <LazySharedStatistics class="!pt-4" hydrate-on-visible />

    <!-- Pricing CTA -->
    <LazySharedPricing hydrate-on-visible />

    <!-- FAQ -->
    <LazySharedFAQ category="legal" hydrate-on-visible />

    <!-- Contact Form -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const schemas = useSchemas()

// SEO
usePageSeo({
  title: t('seo.features.statisticalAnalytics.title'),
  description: t('seo.features.statisticalAnalytics.description')
})

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.features.statisticalAnalytics.hero.title'),
  description: t('pages.features.statisticalAnalytics.hero.subtitle'),
  badge: 'Unique Feature',
  cta: t('ui.cta.primary')
})

// Schema.org
defineWebPage({
  name: t('seo.features.statisticalAnalytics.title'),
  description: t('seo.features.statisticalAnalytics.description')
})

// FAQ Schema
const faqQuestions = [
  { q: t('pages.features.statisticalAnalytics.faq.q1'), a: t('pages.features.statisticalAnalytics.faq.a1') },
  { q: t('pages.features.statisticalAnalytics.faq.q2'), a: t('pages.features.statisticalAnalytics.faq.a2') },
  { q: t('pages.features.statisticalAnalytics.faq.q3'), a: t('pages.features.statisticalAnalytics.faq.a3') },
  { q: t('pages.features.statisticalAnalytics.faq.q4'), a: t('pages.features.statisticalAnalytics.faq.a4') }
]

useSchemaOrg([schemas.faqSchema(faqQuestions)])
</script>
