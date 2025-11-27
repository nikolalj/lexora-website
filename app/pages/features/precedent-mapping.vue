<template>
  <div>
    <!-- Hero Section -->
    <FeaturesPrecedentMappingHero class="dark" />

    <!-- Visual Precedent Chain -->
    <LazyFeaturesPrecedentMappingVisualization hydrate-on-visible />

    <!-- How It Works -->
    <LazyFeaturesPrecedentMappingHowItWorks hydrate-on-visible />

    <!-- Use Cases -->
    <LazyFeaturesPrecedentMappingUseCases hydrate-on-visible />

    <!-- Comparison Before/After -->
    <LazyFeaturesPrecedentMappingComparison hydrate-on-visible />

    <!-- Statistics -->
    <LazySharedStatistics class="!pt-24" hydrate-on-visible />

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
  title: t('seo.features.precedentMapping.title'),
  description: t('seo.features.precedentMapping.description')
})

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.features.precedentMapping.hero.title'),
  description: t('pages.features.precedentMapping.hero.subtitle'),
  badge: 'AI-Powered',
  cta: t('ui.cta.primary')
})

// Schema.org
defineWebPage({
  name: t('seo.features.precedentMapping.title'),
  description: t('seo.features.precedentMapping.description')
})

// FAQ Schema
const faqQuestions = [
  { q: t('pages.features.precedentMapping.faq.q1'), a: t('pages.features.precedentMapping.faq.a1') },
  { q: t('pages.features.precedentMapping.faq.q2'), a: t('pages.features.precedentMapping.faq.a2') },
  { q: t('pages.features.precedentMapping.faq.q3'), a: t('pages.features.precedentMapping.faq.a3') },
  { q: t('pages.features.precedentMapping.faq.q4'), a: t('pages.features.precedentMapping.faq.a4') }
]

useSchemaOrg([schemas.faqSchema(faqQuestions)])
</script>
