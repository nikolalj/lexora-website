<template>
  <div>
    <!-- Hero Section -->
    <FeaturesHero />

    <!-- Features Showcase -->
    <LazyFeaturesShowcase hydrate-on-visible />

    <!-- CTA Section -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.features.title'),
  description: t('seo.features.description')
})

// Schema.org
defineWebPage({
  name: t('seo.features.title'),
  description: t('seo.features.description')
})
</script>
