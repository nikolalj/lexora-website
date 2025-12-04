<template>
  <div>
    <!-- Hero Section -->
    <DocsHero class="dark" />

    <!-- Categories -->
    <LazyDocsCategories hydrate-on-visible />

    <!-- CTA -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.docs.title'),
  description: t('seo.docs.description')
})

// OG Image generation
defineOgImageComponent('Main', {
  title: t('pages.docs.hero.title'),
  description: t('pages.docs.hero.subtitle')
})

// Schema.org
defineWebPage({
  name: t('seo.docs.title'),
  description: t('seo.docs.description')
})
</script>
