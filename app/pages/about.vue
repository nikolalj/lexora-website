<template>
  <div>
    <!-- Hero Section -->
    <AboutHero class="dark" />

    <!-- Story Section -->
    <LazyAboutStory hydrate-on-visible />

    <!-- Mission Section -->
    <LazyAboutMission hydrate-on-visible />

    <!-- Technology Section -->
    <LazyAboutTechnology hydrate-on-visible />

    <!-- Team Section -->
    <LazyAboutTeam hydrate-on-visible />

    <!-- Values Section -->
    <LazyAboutValues hydrate-on-visible />

    <!-- Statistics -->
    <LazySharedStatistics variant="alt" hydrate-on-visible />

    <!-- Testimonials -->
    <LazySharedTestimonials hydrate-on-visible />

    <!-- CTA -->
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.about.title'),
  description: t('seo.about.description')
})

// OG Image generation
defineOgImageComponent('Main', {
  title: t('pages.about.hero.title'),
  description: t('pages.about.hero.subtitle'),
  badge: t('pages.about.hero.badge')
})

// Schema.org
defineWebPage({
  name: t('seo.about.title'),
  description: t('seo.about.description')
})

// Organization Schema
useSchemaOrg([
  defineOrganization({
    name: 'Lexora',
    url: 'https://lexora.me',
    logo: 'https://lexora.me/logo.png',
    description: t('seo.about.description'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Moskovska 153',
      addressLocality: 'Podgorica',
      postalCode: '81000',
      addressCountry: 'ME'
    },
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Organization',
        name: 'Codeus'
      }
    ]
  })
])
</script>
