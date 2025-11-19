<template>
  <SharedSection>
    <div class="mx-auto max-w-3xl text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ t('pages.features.crossJurisdictional.comparison.title') }}
        </h2>
      </UIAppear>
      <UIAppear direction="up" :delay="100">
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {{ t('pages.features.crossJurisdictional.comparison.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <!-- Comparison Grid -->
    <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- BEFORE - Traditional Method -->
      <UIAppear direction="right" :delay="200">
        <div
          class="relative rounded-2xl border-2 border-red-200 dark:border-red-900/50 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 p-8 overflow-hidden"
        >
          <!-- Header -->
          <div class="flex items-center gap-3 mb-6">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20"
            >
              <UIcon name="i-lucide-x-circle" class="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-red-900 dark:text-red-200">
                {{ t('pages.features.crossJurisdictional.comparison.before.title') }}
              </h3>
            </div>
          </div>

          <!-- Pain Points -->
          <div class="space-y-4">
            <div
              v-for="(pain, index) in painPoints"
              :key="`pain-${index}`"
              class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50"
            >
              <div class="mt-1">
                <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
              </div>
              <p class="text-sm text-red-900 dark:text-red-200 leading-relaxed">
                {{ pain }}
              </p>
            </div>
          </div>

          <!-- Time Indicator -->
          <div class="mt-6 pt-6 border-t border-red-300 dark:border-red-800">
            <div class="flex items-center gap-2 text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-clock" class="h-5 w-5" />
              <span class="text-sm font-semibold">Average time: 3-5 hours per search</span>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- AFTER - With Lexora -->
      <UIAppear direction="left" :delay="300">
        <div
          class="relative rounded-2xl border-2 border-green-200 dark:border-green-900/50 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/20 p-8 overflow-hidden shadow-xl"
        >
          <!-- Glow Effect -->
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />

          <!-- Header -->
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F]"
            >
              <UIcon name="i-lucide-check-circle" class="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-green-900 dark:text-green-200">
                {{ t('pages.features.crossJurisdictional.comparison.after.title') }}
              </h3>
            </div>
          </div>

          <!-- Benefits -->
          <div class="space-y-4 relative z-10">
            <div
              v-for="(benefit, index) in benefits"
              :key="`benefit-${index}`"
              class="flex items-start gap-3 p-4 rounded-lg bg-white/80 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 hover:shadow-md transition-shadow"
            >
              <div class="mt-1">
                <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              </div>
              <p class="text-sm text-green-900 dark:text-green-200 leading-relaxed font-medium">
                {{ benefit }}
              </p>
            </div>
          </div>

          <!-- Time Indicator -->
          <div class="mt-6 pt-6 border-t border-green-300 dark:border-green-800 relative z-10">
            <div class="flex items-center gap-2 text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-zap" class="h-5 w-5" />
              <span class="text-sm font-semibold">Average time: &lt;6 seconds</span>
            </div>
            <div class="mt-2 inline-block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A98B1F] px-4 py-1 text-xs font-bold text-white">
              97% faster than traditional methods
            </div>
          </div>
        </div>
      </UIAppear>
    </div>

    <!-- Bottom CTA -->
    <UIAppear direction="up" :delay="500">
      <div class="mt-16 text-center">
        <div class="inline-block rounded-2xl bg-gradient-to-r from-primary-600 to-[#A98B1F] p-8 max-w-2xl mx-auto shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-4">
            Experience the difference yourself
          </h3>
          <p class="text-white/90 mb-6">
            Join hundreds of legal professionals who've transformed their research workflow
          </p>
          <AppCTAButton
            variant="secondary"
            size="xl"
            :label="t('pages.features.crossJurisdictional.hero.cta')"
            :to="localePath('/demo')"
            class="bg-white text-primary-700 hover:bg-gray-100"
          />
        </div>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const painPoints = computed(() => [
  t('pages.features.crossJurisdictional.comparison.before.pain1'),
  t('pages.features.crossJurisdictional.comparison.before.pain2'),
  t('pages.features.crossJurisdictional.comparison.before.pain3'),
  t('pages.features.crossJurisdictional.comparison.before.pain4'),
  t('pages.features.crossJurisdictional.comparison.before.pain5')
])

const benefits = computed(() => [
  t('pages.features.crossJurisdictional.comparison.after.benefit1'),
  t('pages.features.crossJurisdictional.comparison.after.benefit2'),
  t('pages.features.crossJurisdictional.comparison.after.benefit3'),
  t('pages.features.crossJurisdictional.comparison.after.benefit4'),
  t('pages.features.crossJurisdictional.comparison.after.benefit5')
])
</script>
