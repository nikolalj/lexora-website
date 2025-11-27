<template>
  <section
    class="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#47ABAA_0%,_#3A8988_40%,_#0A1211_100%)]"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-400/5 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />
    </div>

    <UContainer class="relative z-10 pt-40 sm:pt-48 lg:pt-56 pb-16 sm:pb-24 lg:pb-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="text-white">
          <UIAppear>
            <div class="inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-primary-400/20 px-4 py-1.5 mb-6 border border-[#D4AF37]/30">
              <UIcon name="i-lucide-git-branch" class="mr-2 h-4 w-4 text-[#D4AF37]" />
              <span class="text-sm font-medium text-[#D4AF37]">{{ t('pages.features.precedentMapping.hero.badge') }}</span>
            </div>
          </UIAppear>

          <UIAppear>
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              {{ t('pages.features.precedentMapping.hero.title') }}
            </h1>
          </UIAppear>

          <UIAppear direction="up" :delay="100">
            <p class="text-lg sm:text-xl text-gray-100 mb-8">
              {{ t('pages.features.precedentMapping.hero.subtitle') }}
            </p>
          </UIAppear>

          <!-- Key Features List -->
          <UIAppear direction="up" :delay="150">
            <div class="space-y-4 mb-10">
              <div v-for="(feature, index) in keyFeatures" :key="index" class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center">
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-white" />
                  </div>
                </div>
                <p class="text-gray-200">{{ t(feature) }}</p>
              </div>
            </div>
          </UIAppear>

          <UIAppear direction="up" :delay="200">
            <div class="flex flex-wrap gap-4">
              <AppCTAButton
                variant="primary"
                size="xl"
                :label="t('pages.features.precedentMapping.hero.cta')"
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
        </div>

        <!-- Right Column - Visual Precedent Chain Illustration -->
        <UIAppear direction="left" :delay="100">
          <div class="relative">
            <!-- Precedent Chain Visualization -->
            <div class="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20">
              <!-- Chain nodes -->
              <div class="space-y-6">
                <!-- Top case -->
                <div class="flex items-center gap-4">
                  <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-[#D4AF37]/20 to-[#A98B1F]/20 border border-[#D4AF37]/30 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-semibold text-[#D4AF37]">{{ t('pages.features.precedentMapping.hero.visual.case1.court') }}</span>
                      <span class="text-xs text-gray-300">{{ t('pages.features.precedentMapping.hero.visual.case1.year') }}</span>
                    </div>
                    <p class="text-sm text-white font-medium">{{ t('pages.features.precedentMapping.hero.visual.case1.title') }}</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="text-white font-bold text-sm">1</span>
                  </div>
                </div>

                <!-- Connection line -->
                <div class="flex items-center justify-end pr-4">
                  <div class="h-12 w-0.5 bg-gradient-to-b from-[#D4AF37] to-primary-400"></div>
                </div>

                <!-- Middle case -->
                <div class="flex items-center gap-4">
                  <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-primary-400/20 to-primary-500/20 border border-primary-400/30 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-semibold text-primary-300">{{ t('pages.features.precedentMapping.hero.visual.case2.court') }}</span>
                      <span class="text-xs text-gray-300">{{ t('pages.features.precedentMapping.hero.visual.case2.year') }}</span>
                    </div>
                    <p class="text-sm text-white font-medium">{{ t('pages.features.precedentMapping.hero.visual.case2.title') }}</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="text-white font-bold text-sm">2</span>
                  </div>
                </div>

                <!-- Connection line -->
                <div class="flex items-center justify-end pr-4">
                  <div class="h-12 w-0.5 bg-gradient-to-b from-primary-400 to-[#D4AF37]"></div>
                </div>

                <!-- Current case -->
                <div class="flex items-center gap-4">
                  <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-[#D4AF37]/30 to-[#A98B1F]/30 border-2 border-[#D4AF37] backdrop-blur-sm shadow-xl">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-semibold text-[#D4AF37]">{{ t('pages.features.precedentMapping.hero.visual.case3.court') }}</span>
                      <span class="text-xs text-gray-300">{{ t('pages.features.precedentMapping.hero.visual.case3.year') }}</span>
                    </div>
                    <p class="text-sm text-white font-medium">{{ t('pages.features.precedentMapping.hero.visual.case3.title') }}</p>
                    <div class="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/50">
                      <UIcon name="i-lucide-star" class="w-3 h-3 text-[#D4AF37]" />
                      <span class="text-xs text-[#D4AF37] font-semibold">{{ t('pages.features.precedentMapping.hero.visual.case3.badge') }}</span>
                    </div>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-[#D4AF37]/50">
                    <span class="text-white font-bold text-sm">3</span>
                  </div>
                </div>
              </div>

              <!-- Stats badge -->
              <div class="absolute -top-4 -right-4 bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] rounded-full px-4 py-2 shadow-xl">
                <p class="text-white font-bold text-sm">{{ t('pages.features.precedentMapping.hero.visual.badge') }}</p>
              </div>
            </div>
          </div>
        </UIAppear>
      </div>

      <!-- Trust Indicators -->
      <UIAppear direction="up" :delay="250">
        <div class="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
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

const keyFeatures = [
  'pages.features.precedentMapping.hero.features.feature1',
  'pages.features.precedentMapping.hero.features.feature2',
  'pages.features.precedentMapping.hero.features.feature3',
  'pages.features.precedentMapping.hero.features.feature4'
]
</script>
