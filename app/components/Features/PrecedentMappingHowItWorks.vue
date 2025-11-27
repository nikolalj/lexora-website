<template>
  <SharedSection variant="alt">
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('pages.features.precedentMapping.howItWorks.title') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{{ t('pages.features.precedentMapping.howItWorks.subtitle') }}</p>
      </UIAppear>
    </div>

    <!-- Timeline Layout -->
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-[#D4AF37] to-primary-400 hidden md:block"></div>

        <!-- Timeline steps -->
        <div class="space-y-12">
          <!-- Step 1 -->
          <UIAppear direction="right" :delay="100">
            <div class="relative flex items-start gap-6">
              <!-- Timeline dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-lg z-10">
                <UIcon name="i-lucide-upload" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <div class="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm">1</span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.howItWorks.steps.step1.title') }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.howItWorks.steps.step1.description') }}</p>
              </div>
            </div>
          </UIAppear>

          <!-- Step 2 -->
          <UIAppear direction="right" :delay="150">
            <div class="relative flex items-start gap-6">
              <!-- Timeline dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center shadow-lg z-10">
                <UIcon name="i-lucide-brain" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <div class="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#A98B1F] font-bold text-sm">2</span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.howItWorks.steps.step2.title') }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('pages.features.precedentMapping.howItWorks.steps.step2.description') }}</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm">{{ t('pages.features.precedentMapping.howItWorks.steps.step2.tech1') }}</span>
                  <span class="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm">{{ t('pages.features.precedentMapping.howItWorks.steps.step2.tech2') }}</span>
                  <span class="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm">{{ t('pages.features.precedentMapping.howItWorks.steps.step2.tech3') }}</span>
                </div>
              </div>
            </div>
          </UIAppear>

          <!-- Step 3 -->
          <UIAppear direction="right" :delay="200">
            <div class="relative flex items-start gap-6">
              <!-- Timeline dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-lg z-10">
                <UIcon name="i-lucide-git-branch" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <div class="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm">3</span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.howItWorks.steps.step3.title') }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.howItWorks.steps.step3.description') }}</p>
              </div>
            </div>
          </UIAppear>

          <!-- Step 4 -->
          <UIAppear direction="right" :delay="250">
            <div class="relative flex items-start gap-6">
              <!-- Timeline dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] flex items-center justify-center shadow-lg z-10">
                <UIcon name="i-lucide-chart-line" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <div class="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#A98B1F] font-bold text-sm">4</span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.howItWorks.steps.step4.title') }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.howItWorks.steps.step4.description') }}</p>
              </div>
            </div>
          </UIAppear>

          <!-- Step 5 -->
          <UIAppear direction="right" :delay="300">
            <div class="relative flex items-start gap-6">
              <!-- Timeline dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-lg z-10 ring-4 ring-primary-100 dark:ring-primary-900/30">
                <UIcon name="i-lucide-check-circle-2" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <div class="flex-1 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 shadow-lg border-2 border-primary-300 dark:border-primary-700">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-200 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-bold text-sm">5</span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('pages.features.precedentMapping.howItWorks.steps.step5.title') }}</h3>
                </div>
                <p class="text-gray-700 dark:text-gray-200 mb-4">{{ t('pages.features.precedentMapping.howItWorks.steps.step5.description') }}</p>
                <div class="flex items-center gap-2 text-primary-700 dark:text-primary-300">
                  <UIcon name="i-lucide-zap" class="w-5 h-5" />
                  <span class="font-semibold">{{ t('pages.features.precedentMapping.howItWorks.steps.step5.badge') }}</span>
                </div>
              </div>
            </div>
          </UIAppear>
        </div>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
