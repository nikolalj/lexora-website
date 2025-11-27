<template>
  <SharedSection variant="alt">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">{{ t('pages.features.caseSummarization.examples.title') }}</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.examples.subtitle') }}</p>
    </div>

    <!-- Case Example Header -->
    <div class="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary-50 to-[#A98B1F]/10 dark:from-primary-950/30 dark:to-[#A98B1F]/20 border border-primary-200 dark:border-primary-800">
      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ t('pages.features.caseSummarization.examples.example.caseTitle') }}</h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ t('pages.features.caseSummarization.examples.example.citation') }}</p>
    </div>

    <!-- Three Summary Levels Side by Side -->
    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Quick Overview -->
      <div class="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F]">
            <UIcon name="i-lucide-zap" class="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 class="text-lg font-semibold">{{ t('pages.features.caseSummarization.examples.example.quick.title') }}</h4>
          </div>
        </div>
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('pages.features.caseSummarization.examples.example.quick.content') }}
          </p>
        </div>
      </div>

      <!-- Standard Summary (Highlighted) -->
      <div class="rounded-2xl border-2 border-[#A98B1F] bg-gradient-to-br from-white to-[#A98B1F]/5 dark:from-gray-900 dark:to-[#A98B1F]/10 p-6 shadow-xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F]">
            <UIcon name="i-lucide-file-text" class="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 class="text-lg font-semibold">{{ t('pages.features.caseSummarization.examples.example.standard.title') }}</h4>
          </div>
        </div>
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {{ t('pages.features.caseSummarization.examples.example.standard.content') }}
          </p>
        </div>
      </div>

      <!-- Detailed Analysis -->
      <div class="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F]">
            <UIcon name="i-lucide-microscope" class="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 class="text-lg font-semibold">{{ t('pages.features.caseSummarization.examples.example.detailed.title') }}</h4>
          </div>
        </div>
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed italic">
            {{ t('pages.features.caseSummarization.examples.example.detailed.content') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Indicator -->
    <div class="mt-8 text-center">
      <div class="inline-flex items-center gap-4 rounded-full bg-white dark:bg-gray-900 px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <div class="h-3 w-3 rounded-full bg-primary-600"></div>
          <span class="text-sm text-gray-600 dark:text-gray-400">Quick (30s)</span>
        </div>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4 text-gray-400" />
        <div class="flex items-center gap-2">
          <div class="h-3 w-3 rounded-full bg-[#D4AF37]"></div>
          <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">Standard (2-3min)</span>
        </div>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4 text-gray-400" />
        <div class="flex items-center gap-2">
          <div class="h-3 w-3 rounded-full bg-[#A98B1F]"></div>
          <span class="text-sm text-gray-600 dark:text-gray-400">Detailed (5-7min)</span>
        </div>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
