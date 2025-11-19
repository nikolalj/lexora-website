<template>
  <div>
    <!-- Hero Section -->
    <FeaturesCrossJurisdictionalHero class="dark" />

    <!-- How It Works -->
    <LazyFeaturesCrossJurisdictionalHowItWorks hydrate-on-visible />

    <!-- Use Cases -->
    <LazyFeaturesCrossJurisdictionalUseCases hydrate-on-visible />

    <!-- Comparison Before/After -->
    <LazyFeaturesCrossJurisdictionalComparison hydrate-on-visible />

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
  title: t('seo.features.crossJurisdictional.title'),
  description: t('seo.features.crossJurisdictional.description')
})

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.features.crossJurisdictional.hero.title'),
  description: t('pages.features.crossJurisdictional.hero.subtitle'),
  badge: t('pages.pricing.freeTrial'),
  cta: t('ui.cta.primary')
})

// Schema.org
defineWebPage({
  name: t('seo.features.crossJurisdictional.title'),
  description: t('seo.features.crossJurisdictional.description')
})

// FAQ Schema
const faqQuestions = [
  { q: t('pages.features.crossJurisdictional.faq.q1'), a: t('pages.features.crossJurisdictional.faq.a1') },
  { q: t('pages.features.crossJurisdictional.faq.q2'), a: t('pages.features.crossJurisdictional.faq.a2') },
  { q: t('pages.features.crossJurisdictional.faq.q3'), a: t('pages.features.crossJurisdictional.faq.a3') },
  { q: t('pages.features.crossJurisdictional.faq.q4'), a: t('pages.features.crossJurisdictional.faq.a4') }
]

useSchemaOrg([schemas.faqSchema(faqQuestions)])
</script>
