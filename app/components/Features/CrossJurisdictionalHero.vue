<template>
  <section
    class="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#47ABAA_0%,_#3A8988_40%,_#0A1211_100%)]"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#A98B1F]/10 rounded-full blur-3xl" />
    </div>

    <UContainer class="relative z-10 py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-4xl text-center">
        <!-- Badge -->
        <UIAppear>
          <div class="inline-flex items-center rounded-full bg-[#A98B1F]/20 px-4 py-1.5 mb-6">
            <UIcon name="i-lucide-sparkles" class="mr-2 h-4 w-4 text-[#D4AF37]" />
            <span class="text-sm font-medium text-[#D4AF37]">{{ hero.badge }}</span>
          </div>
        </UIAppear>

        <!-- Main Heading -->
        <UIAppear>
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {{ hero.title }}
          </h1>
        </UIAppear>

        <!-- Subtitle -->
        <UIAppear direction="up" :delay="100">
          <p class="mt-6 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            {{ hero.subtitle }}
          </p>
        </UIAppear>

        <!-- Stats Row -->
        <UIAppear direction="up" :delay="150">
          <div class="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div
              v-for="(stat, index) in stats"
              :key="`stat-${index}`"
              class="flex flex-col items-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div class="text-3xl sm:text-4xl font-bold text-[#D4AF37]">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-xs sm:text-sm text-gray-200 text-center">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </UIAppear>

        <!-- CTA Buttons -->
        <UIAppear direction="up" :delay="200">
          <div class="mt-10 flex flex-wrap gap-4 justify-center">
            <AppCTAButton
              variant="primary"
              size="xl"
              :label="hero.cta"
              :to="localePath('/demo')"
              class="shadow-xl"
            />
            <AppCTAButton
              variant="secondary"
              size="xl"
              :label="t('pages.pricing.title')"
              :to="localePath('/pricing')"
              class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            />
          </div>
        </UIAppear>

        <!-- Trust Indicators -->
        <UIAppear direction="up" :delay="250">
          <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>14-day free trial</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>No credit card required</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-[#D4AF37]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </UIAppear>
      </div>
    </UContainer>

    <!-- Wave separator -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        class="w-full h-12 sm:h-16 text-[var(--ui-bg)]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
        fill="currentColor"
      >
        <path d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const hero = computed(() => ({
  title: t('pages.features.crossJurisdictional.hero.title'),
  subtitle: t('pages.features.crossJurisdictional.hero.subtitle'),
  badge: t('pages.features.crossJurisdictional.hero.badge'),
  cta: t('pages.features.crossJurisdictional.hero.cta')
}))

const stats = computed(() => [
  {
    value: t('pages.features.crossJurisdictional.hero.stats.stat1.value'),
    label: t('pages.features.crossJurisdictional.hero.stats.stat1.label')
  },
  {
    value: t('pages.features.crossJurisdictional.hero.stats.stat2.value'),
    label: t('pages.features.crossJurisdictional.hero.stats.stat2.label')
  },
  {
    value: t('pages.features.crossJurisdictional.hero.stats.stat3.value'),
    label: t('pages.features.crossJurisdictional.hero.stats.stat3.label')
  }
])
</script>
