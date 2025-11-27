<template>
  <SharedSection>
    <div class="mx-auto max-w-3xl text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ t('pages.features.statisticalAnalytics.capabilities.title') }}
        </h2>
      </UIAppear>
      <UIAppear direction="up" :delay="100">
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {{ t('pages.features.statisticalAnalytics.capabilities.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <!-- Capabilities Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <UIAppear
        v-for="(capability, index) in capabilities"
        :key="`cap-${index}`"
        direction="up"
        :delay="200 + index * 100"
      >
        <div class="relative flex flex-col h-full p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] transition-all duration-300 hover:shadow-2xl group">
          <!-- Icon -->
          <div class="mb-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] shadow-lg">
              <UIcon :name="capability.icon" class="h-6 w-6 text-white" />
            </div>
          </div>

          <!-- Title -->
          <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            {{ capability.title }}
          </h3>

          <!-- Description -->
          <p class="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
            {{ capability.description }}
          </p>

          <!-- Example Query -->
          <div class="mt-auto p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div class="flex items-start gap-2">
              <UIcon name="i-lucide-quote" class="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <p class="text-xs italic text-gray-700 dark:text-gray-300">
                {{ capability.example }}
              </p>
            </div>
          </div>
        </div>
      </UIAppear>
    </div>

    <!-- Bottom CTA -->
    <UIAppear direction="up" :delay="900">
      <div class="mt-16 text-center">
        <AppCTAButton
          variant="primary"
          size="xl"
          :label="t('pages.features.statisticalAnalytics.hero.cta')"
          :to="localePath('/demo')"
        />
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Ask any statistical question about the legal database
        </p>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const capabilities = computed(() => [
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap1.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap1.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap1.example'),
    icon: 'i-lucide-trending-up'
  },
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap2.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap2.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap2.example'),
    icon: 'i-lucide-activity'
  },
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap3.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap3.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap3.example'),
    icon: 'i-lucide-git-compare'
  },
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap4.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap4.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap4.example'),
    icon: 'i-lucide-gavel'
  },
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap5.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap5.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap5.example'),
    icon: 'i-lucide-target'
  },
  {
    title: t('pages.features.statisticalAnalytics.capabilities.cap6.title'),
    description: t('pages.features.statisticalAnalytics.capabilities.cap6.description'),
    example: t('pages.features.statisticalAnalytics.capabilities.cap6.example'),
    icon: 'i-lucide-clock'
  }
])
</script>
