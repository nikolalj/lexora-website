<template>
  <section
    class="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#47ABAA_0%,_#3A8988_40%,_#0A1211_100%)]"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#A98B1F]/10 rounded-full blur-3xl" />
    </div>

    <UContainer class="relative z-10 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-32">
      <div class="mx-auto max-w-4xl text-center">
        <UIAppear>
          <div class="inline-flex items-center rounded-full bg-[#A98B1F]/20 px-4 py-1.5 mb-6">
            <UIcon name="i-lucide-sparkles" class="mr-2 h-4 w-4 text-[#D4AF37]" />
            <span class="text-sm font-medium text-[#D4AF37]">{{ t('pages.features.caseSummarization.hero.badge') }}</span>
          </div>
        </UIAppear>

        <UIAppear>
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ t('pages.features.caseSummarization.hero.title') }}
          </h1>
        </UIAppear>

        <UIAppear direction="up" :delay="100">
          <p class="mt-6 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            {{ t('pages.features.caseSummarization.hero.subtitle') }}
          </p>
        </UIAppear>

        <UIAppear direction="up" :delay="150">
          <div class="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div class="flex flex-col items-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-bold text-[#D4AF37]">{{ t('pages.features.caseSummarization.hero.stats.stat1.value') }}</div>
              <div class="mt-1 text-xs sm:text-sm text-gray-200 text-center">{{ t('pages.features.caseSummarization.hero.stats.stat1.label') }}</div>
            </div>
            <div class="flex flex-col items-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-bold text-[#D4AF37]" v-html="t('pages.features.caseSummarization.hero.stats.stat2.value')"></div>
              <div class="mt-1 text-xs sm:text-sm text-gray-200 text-center">{{ t('pages.features.caseSummarization.hero.stats.stat2.label') }}</div>
            </div>
            <div class="flex flex-col items-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div class="text-3xl sm:text-4xl font-bold text-[#D4AF37]">{{ t('pages.features.caseSummarization.hero.stats.stat3.value') }}</div>
              <div class="mt-1 text-xs sm:text-sm text-gray-200 text-center">{{ t('pages.features.caseSummarization.hero.stats.stat3.label') }}</div>
            </div>
          </div>
        </UIAppear>

        <UIAppear direction="up" :delay="200">
          <div class="mt-10 flex flex-wrap gap-4 justify-center">
            <AppCTAButton
              variant="primary"
              size="xl"
              :label="t('pages.features.caseSummarization.hero.cta')"
              :to="localePath('/demo')"
              class="shadow-xl"
            />
            <AppCTAButton
              variant="secondary"
              size="xl"
              :label="t('ui.cta.seePricing')"
              :to="localePath('/pricing')"
              class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            />
          </div>
        </UIAppear>

        <UIAppear direction="up" :delay="250">
          <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>{{ t('pages.pricing.trustIndicators.trial') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>{{ t('pages.pricing.trustIndicators.noCC') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>{{ t('pages.pricing.trustIndicators.cancel') }}</span>
            </div>
          </div>
        </UIAppear>
      </div>
    </UContainer>

    <!-- Wave Shape -->
    <div class="absolute left-0 right-0 -bottom-px w-full leading-[0] pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 170"
        aria-hidden="true"
        class="fill-[var(--ui-bg)]"
      >
        <path
          fill-opacity="1"
          d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
