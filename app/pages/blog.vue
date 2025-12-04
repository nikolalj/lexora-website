<template>
  <div>
    <!-- Hero Section -->
    <BlogHero />

    <!-- Blog Grid -->
    <LazyBlogGrid hydrate-on-visible />

    <!-- Newsletter CTA -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.blog.title'),
  description: t('seo.blog.description')
})

// OG Image generation
defineOgImageComponent('Main', {
  title: t('pages.blog.hero.title.line1'),
  description: t('pages.blog.hero.subtitle')
})

// Schema.org
defineWebPage({
  name: t('seo.blog.title'),
  description: t('seo.blog.description')
})
</script>
