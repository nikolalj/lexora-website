<template>
  <SharedSection variant="alt">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">{{ t('pages.features.caseSummarization.comparison.title') }}</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.comparison.subtitle') }}</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- BEFORE -->
      <div class="rounded-2xl border-2 border-red-200 dark:border-red-900/50 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 p-8">
        <div class="mb-6 flex items-center gap-3">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
            <UIcon name="i-lucide-x" class="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 class="text-2xl font-bold text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.title') }}</h3>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
            <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.pain1') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
            <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.pain2') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
            <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.pain3') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
            <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.pain4') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
            <UIcon name="i-lucide-x" class="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-red-900 dark:text-red-100">{{ t('pages.features.caseSummarization.comparison.before.pain5') }}</p>
          </div>
        </div>
      </div>

      <!-- AFTER -->
      <div class="rounded-2xl border-2 border-green-200 dark:border-green-900/50 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/20 p-8 shadow-xl relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="inline-block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A98B1F] px-4 py-1 text-xs font-bold text-white">
            10x FASTER RESEARCH
          </span>
        </div>

        <div class="mb-6 flex items-center gap-3">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
            <UIcon name="i-lucide-check" class="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-2xl font-bold text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.title') }}</h3>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-green-950/40">
            <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.benefit1') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-green-950/40">
            <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.benefit2') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-green-950/40">
            <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.benefit3') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-green-950/40">
            <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.benefit4') }}</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-green-950/40">
            <UIcon name="i-lucide-check" class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <p class="text-sm text-green-900 dark:text-green-100">{{ t('pages.features.caseSummarization.comparison.after.benefit5') }}</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <AppCTAButton
            variant="primary"
            size="lg"
            :label="t('ui.cta.primary')"
            :to="localePath('/demo')"
            class="shadow-xl"
          />
        </div>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
