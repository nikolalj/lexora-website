<template>
  <div>
    <!-- Hero Section -->
    <FeaturesCaseSummarizationHero class="dark" />

    <!-- How It Works -->
    <LazyFeaturesCaseSummarizationLevels hydrate-on-visible />

    <!-- Real Examples -->
    <LazyFeaturesCaseSummarizationExamples hydrate-on-visible />

    <!-- Benefits -->
    <LazyFeaturesCaseSummarizationBenefits hydrate-on-visible />

    <!-- Comparison Before/After -->
    <LazyFeaturesCaseSummarizationComparison hydrate-on-visible />

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
  title: t('seo.features.caseSummarization.title'),
  description: t('seo.features.caseSummarization.description')
})

// OG Image
defineOgImageComponent('Main', {
  title: t('pages.features.caseSummarization.hero.title'),
  description: t('pages.features.caseSummarization.hero.subtitle'),
  badge: 'AI-Powered',
  cta: t('ui.cta.primary')
})

// Schema.org
defineWebPage({
  name: t('seo.features.caseSummarization.title'),
  description: t('seo.features.caseSummarization.description')
})

// FAQ Schema
const faqQuestions = [
  { q: t('pages.features.caseSummarization.faq.q1'), a: t('pages.features.caseSummarization.faq.a1') },
  { q: t('pages.features.caseSummarization.faq.q2'), a: t('pages.features.caseSummarization.faq.a2') },
  { q: t('pages.features.caseSummarization.faq.q3'), a: t('pages.features.caseSummarization.faq.a3') },
  { q: t('pages.features.caseSummarization.faq.q4'), a: t('pages.features.caseSummarization.faq.a4') }
]

useSchemaOrg([schemas.faqSchema(faqQuestions)])
</script>
