<template>
  <div class="mt-24">
    <SharedPricing heading-level="h1" />
    <LazySharedGetStarted variant="alt" />
    <LazySharedContactForm variant="alt" hydrate-on-visible />
  </div>
</template>

<script setup lang="ts">
import { LOCALES } from '~/config/locale.config.mjs'

const { t, locale } = useI18n()
const schemas = useSchemas()

const currentLocale = LOCALES.find(l => l.code === locale.value)

// SEO meta tags
usePageSeo({
  title: t('seo.pricing.title'),
  description: t('seo.pricing.description')
})

// OG Image generation with localized pricing
defineOgImageComponent('Pricing', {
  title: t('pages.pricing.title'),
  currency: currentLocale?.currencySymbol,
  period: t('pages.pricing.plans.free.billingCycle'),
  cta: t('pages.pricing.freeTrial'),
  ctaSubtext: t('pages.pricing.plans.free.button'),
  plans: [
    {
      name: t('pages.pricing.plans.free.title'),
      price: t('pages.pricing.plans.free.price'),
      badge: ''
    },
    {
      name: t('pages.pricing.plans.professional.title'),
      price: t('pages.pricing.plans.professional.price'),
      popular: true,
      badge: t('pages.pricing.plans.professional.badge')
    },
    {
      name: t('pages.pricing.plans.enterprise.title'),
      price: t('pages.pricing.plans.enterprise.price'),
      badge: ''
    }
  ]
})

// Use centralized schema
useSchemaOrg([schemas.pricingProduct()])
</script>
