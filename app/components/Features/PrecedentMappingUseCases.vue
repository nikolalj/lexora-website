<template>
  <SharedSection>
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('pages.features.precedentMapping.useCases.title') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{{ t('pages.features.precedentMapping.useCases.subtitle') }}</p>
      </UIAppear>
    </div>

    <!-- Use Cases Grid with Staggered Layout -->
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Use Case 1 - Large -->
      <UIAppear direction="up" :delay="100">
        <div class="md:row-span-2 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white relative overflow-hidden shadow-xl">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
              <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ t('pages.features.precedentMapping.useCases.cases.case1.title') }}</h3>
            <p class="text-primary-50 mb-6 text-lg">{{ t('pages.features.precedentMapping.useCases.cases.case1.description') }}</p>

            <!-- Example scenario -->
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p class="text-sm font-semibold mb-2 text-primary-100">{{ t('pages.features.precedentMapping.useCases.cases.case1.example.label') }}</p>
              <p class="text-sm text-white/90">{{ t('pages.features.precedentMapping.useCases.cases.case1.example.text') }}</p>
            </div>

            <!-- Benefits list -->
            <div class="mt-6 space-y-3">
              <div v-for="(benefit, index) in 3" :key="index" class="flex items-center gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary-200 flex-shrink-0" />
                <span class="text-sm text-primary-50">{{ t(`pages.features.precedentMapping.useCases.cases.case1.benefits.benefit${index + 1}`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- Use Case 2 - Small -->
      <UIAppear direction="up" :delay="150">
        <div class="rounded-2xl bg-white dark:bg-gray-800 p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-lg">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center mb-4">
            <UIcon name="i-lucide-scale" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.useCases.cases.case2.title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('pages.features.precedentMapping.useCases.cases.case2.description') }}</p>
          <div class="flex items-center gap-2 text-[#A98B1F]">
            <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
            <span class="font-semibold text-sm">{{ t('pages.features.precedentMapping.useCases.cases.case2.cta') }}</span>
          </div>
        </div>
      </UIAppear>

      <!-- Use Case 3 - Small -->
      <UIAppear direction="up" :delay="200">
        <div class="rounded-2xl bg-white dark:bg-gray-800 p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-lg">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4">
            <UIcon name="i-lucide-users" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.useCases.cases.case3.title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('pages.features.precedentMapping.useCases.cases.case3.description') }}</p>
          <div class="flex items-center gap-2 text-teal-600 dark:text-teal-400">
            <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
            <span class="font-semibold text-sm">{{ t('pages.features.precedentMapping.useCases.cases.case3.cta') }}</span>
          </div>
        </div>
      </UIAppear>

      <!-- Use Case 4 - Large Horizontal -->
      <UIAppear direction="up" :delay="250">
        <div class="md:col-span-2 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#A98B1F] p-8 text-white relative overflow-hidden shadow-xl">
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
          <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <UIcon name="i-lucide-book-open" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4">{{ t('pages.features.precedentMapping.useCases.cases.case4.title') }}</h3>
              <p class="text-yellow-50 text-lg mb-6">{{ t('pages.features.precedentMapping.useCases.cases.case4.description') }}</p>
              <AppCTAButton
                variant="secondary"
                size="lg"
                :label="t('pages.features.precedentMapping.useCases.cases.case4.cta')"
                :to="localePath('/demo')"
                class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              />
            </div>
            <div class="space-y-4">
              <div v-for="(stat, index) in 3" :key="index" class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="text-3xl font-bold mb-1">{{ t(`pages.features.precedentMapping.useCases.cases.case4.stats.stat${index + 1}.value`) }}</div>
                <p class="text-sm text-yellow-100">{{ t(`pages.features.precedentMapping.useCases.cases.case4.stats.stat${index + 1}.label`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
