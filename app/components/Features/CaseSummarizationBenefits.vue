<template>
  <SharedSection>
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">{{ t('pages.features.caseSummarization.benefits.title') }}</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.subtitle') }}</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Benefit 1 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit1.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit1.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit1.description') }}</p>
      </div>

      <!-- Benefit 2 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit2.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit2.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit2.description') }}</p>
      </div>

      <!-- Benefit 3 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit3.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit3.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit3.description') }}</p>
      </div>

      <!-- Benefit 4 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit4.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit4.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit4.description') }}</p>
      </div>

      <!-- Benefit 5 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit5.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit5.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit5.description') }}</p>
      </div>

      <!-- Benefit 6 -->
      <div class="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#A98B1F] hover:shadow-xl transition-all">
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-[#A98B1F] mb-4 group-hover:scale-110 transition-transform">
          <UIcon :name="t('pages.features.caseSummarization.benefits.benefit6.icon')" class="h-6 w-6 text-white" />
        </div>
        <h3 class="mb-3 text-xl font-semibold">{{ t('pages.features.caseSummarization.benefits.benefit6.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.caseSummarization.benefits.benefit6.description') }}</p>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
