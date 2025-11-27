<template>
  <SharedSection variant="alt">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">{{ t('pages.features.precedentMapping.comparison.title') }}</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.comparison.subtitle') }}</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- BEFORE - Manual Research -->
      <div class="rounded-2xl border-2 border-red-200 dark:border-red-900/50 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 p-8">
        <div class="mb-6 flex items-center gap-3">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
            <UIcon name="i-lucide-clock" class="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 class="text-2xl font-bold text-red-900 dark:text-red-100">{{ t('pages.features.precedentMapping.comparison.before.title') }}</h3>
        </div>

        <!-- Pain points timeline -->
        <div class="space-y-4">
          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400"></div>
            </div>
            <div class="p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
              <p class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">{{ t('pages.features.precedentMapping.comparison.before.timeline.step1.title') }}</p>
              <p class="text-xs text-red-700 dark:text-red-300">{{ t('pages.features.precedentMapping.comparison.before.timeline.step1.time') }}</p>
            </div>
          </div>

          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400"></div>
            </div>
            <div class="p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
              <p class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">{{ t('pages.features.precedentMapping.comparison.before.timeline.step2.title') }}</p>
              <p class="text-xs text-red-700 dark:text-red-300">{{ t('pages.features.precedentMapping.comparison.before.timeline.step2.time') }}</p>
            </div>
          </div>

          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400"></div>
            </div>
            <div class="p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
              <p class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">{{ t('pages.features.precedentMapping.comparison.before.timeline.step3.title') }}</p>
              <p class="text-xs text-red-700 dark:text-red-300">{{ t('pages.features.precedentMapping.comparison.before.timeline.step3.time') }}</p>
            </div>
          </div>

          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400"></div>
            </div>
            <div class="p-4 rounded-lg bg-white/60 dark:bg-red-950/40">
              <p class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">{{ t('pages.features.precedentMapping.comparison.before.timeline.step4.title') }}</p>
              <p class="text-xs text-red-700 dark:text-red-300">{{ t('pages.features.precedentMapping.comparison.before.timeline.step4.time') }}</p>
            </div>
          </div>
        </div>

        <!-- Total time -->
        <div class="mt-6 p-4 rounded-xl bg-red-600/10 dark:bg-red-900/30 border border-red-300 dark:border-red-800">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-red-900 dark:text-red-100">{{ t('pages.features.precedentMapping.comparison.before.total.label') }}</span>
            <span class="text-2xl font-bold text-red-600 dark:text-red-400">{{ t('pages.features.precedentMapping.comparison.before.total.time') }}</span>
          </div>
        </div>
      </div>

      <!-- AFTER - AI-Powered Precedent Mapping -->
      <div class="rounded-2xl border-2 border-green-200 dark:border-green-900/50 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/20 p-8 shadow-xl relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="inline-block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A98B1F] px-4 py-1 text-xs font-bold text-white">
            {{ t('pages.features.precedentMapping.comparison.after.badge') }}
          </span>
        </div>

        <div class="mb-6 flex items-center gap-3">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
            <UIcon name="i-lucide-zap" class="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-2xl font-bold text-green-900 dark:text-green-100">{{ t('pages.features.precedentMapping.comparison.after.title') }}</h3>
        </div>

        <!-- Automated process -->
        <div class="space-y-4">
          <div class="p-4 rounded-lg bg-white/60 dark:bg-green-950/40 border-l-4 border-green-500">
            <div class="flex items-start justify-between mb-2">
              <p class="text-sm font-semibold text-green-900 dark:text-green-100">{{ t('pages.features.precedentMapping.comparison.after.process.step1.title') }}</p>
              <span class="text-xs font-bold text-green-600 dark:text-green-400">{{ t('pages.features.precedentMapping.comparison.after.process.step1.time') }}</span>
            </div>
            <p class="text-xs text-green-700 dark:text-green-300">{{ t('pages.features.precedentMapping.comparison.after.process.step1.description') }}</p>
          </div>

          <div class="p-4 rounded-lg bg-white/60 dark:bg-green-950/40 border-l-4 border-green-500">
            <div class="flex items-start justify-between mb-2">
              <p class="text-sm font-semibold text-green-900 dark:text-green-100">{{ t('pages.features.precedentMapping.comparison.after.process.step2.title') }}</p>
              <span class="text-xs font-bold text-green-600 dark:text-green-400">{{ t('pages.features.precedentMapping.comparison.after.process.step2.time') }}</span>
            </div>
            <p class="text-xs text-green-700 dark:text-green-300">{{ t('pages.features.precedentMapping.comparison.after.process.step2.description') }}</p>
          </div>

          <div class="p-4 rounded-lg bg-white/60 dark:bg-green-950/40 border-l-4 border-green-500">
            <div class="flex items-start justify-between mb-2">
              <p class="text-sm font-semibold text-green-900 dark:text-green-100">{{ t('pages.features.precedentMapping.comparison.after.process.step3.title') }}</p>
              <span class="text-xs font-bold text-green-600 dark:text-green-400">{{ t('pages.features.precedentMapping.comparison.after.process.step3.time') }}</span>
            </div>
            <p class="text-xs text-green-700 dark:text-green-300">{{ t('pages.features.precedentMapping.comparison.after.process.step3.description') }}</p>
          </div>
        </div>

        <!-- Total time -->
        <div class="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold">{{ t('pages.features.precedentMapping.comparison.after.total.label') }}</span>
            <span class="text-3xl font-bold">{{ t('pages.features.precedentMapping.comparison.after.total.time') }}</span>
          </div>
          <div class="flex items-center gap-2 text-green-100 text-sm">
            <UIcon name="i-lucide-trending-down" class="w-4 h-4" />
            <span>{{ t('pages.features.precedentMapping.comparison.after.total.savings') }}</span>
          </div>
        </div>

        <!-- CTA -->
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
