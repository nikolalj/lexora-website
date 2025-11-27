<template>
  <SharedSection>
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">{{ t('pages.features.caseSummarization.levels.title') }}</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.subtitle') }}</p>
    </div>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Level 1: Quick Overview -->
      <div class="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-[#A98B1F] transition-colors">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4">
          <UIcon :name="t('pages.features.caseSummarization.levels.level1.icon')" class="h-6 w-6 text-white" />
        </div>

        <h3 class="mb-2 text-2xl font-semibold">{{ t('pages.features.caseSummarization.levels.level1.name') }}</h3>
        <div class="mb-4 inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
          {{ t('pages.features.caseSummarization.levels.level1.time') }}
        </div>

        <p class="mb-6 text-gray-600 dark:text-gray-300">
          {{ t('pages.features.caseSummarization.levels.level1.description') }}
        </p>

        <div class="mb-6 space-y-2">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Includes:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level1.includes.i1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level1.includes.i2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level1.includes.i3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level1.includes.i4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level1.includes.i5') }}</span>
            </li>
          </ul>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p class="text-sm italic text-gray-500 dark:text-gray-400">{{ t('pages.features.caseSummarization.levels.level1.useCase') }}</p>
        </div>
      </div>

      <!-- Level 2: Standard Summary -->
      <div class="rounded-2xl border-2 border-[#A98B1F] bg-gradient-to-br from-white to-[#A98B1F]/5 dark:from-gray-900 dark:to-[#A98B1F]/10 p-8 shadow-xl relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="inline-block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A98B1F] px-4 py-1 text-xs font-bold text-white">
            RECOMMENDED
          </span>
        </div>

        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4">
          <UIcon :name="t('pages.features.caseSummarization.levels.level2.icon')" class="h-6 w-6 text-white" />
        </div>

        <h3 class="mb-2 text-2xl font-semibold">{{ t('pages.features.caseSummarization.levels.level2.name') }}</h3>
        <div class="mb-4 inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
          {{ t('pages.features.caseSummarization.levels.level2.time') }}
        </div>

        <p class="mb-6 text-gray-600 dark:text-gray-300">
          {{ t('pages.features.caseSummarization.levels.level2.description') }}
        </p>

        <div class="mb-6 space-y-2">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Includes:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i5') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level2.includes.i6') }}</span>
            </li>
          </ul>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p class="text-sm italic text-gray-500 dark:text-gray-400">{{ t('pages.features.caseSummarization.levels.level2.useCase') }}</p>
        </div>
      </div>

      <!-- Level 3: Detailed Analysis -->
      <div class="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-[#A98B1F] transition-colors">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4">
          <UIcon :name="t('pages.features.caseSummarization.levels.level3.icon')" class="h-6 w-6 text-white" />
        </div>

        <h3 class="mb-2 text-2xl font-semibold">{{ t('pages.features.caseSummarization.levels.level3.name') }}</h3>
        <div class="mb-4 inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
          {{ t('pages.features.caseSummarization.levels.level3.time') }}
        </div>

        <p class="mb-6 text-gray-600 dark:text-gray-300">
          {{ t('pages.features.caseSummarization.levels.level3.description') }}
        </p>

        <div class="mb-6 space-y-2">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Includes:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i4') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i5') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i6') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.levels.level3.includes.i7') }}</span>
            </li>
          </ul>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p class="text-sm italic text-gray-500 dark:text-gray-400">{{ t('pages.features.caseSummarization.levels.level3.useCase') }}</p>
        </div>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
