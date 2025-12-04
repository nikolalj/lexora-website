<template>
  <section class="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-24">
    <!-- Smooth gradient background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-[#FFF8E7] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <!-- Decorative circles -->
      <div class="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A98B1F]/5 rounded-full blur-3xl"></div>
    </div>

    <UContainer>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Text content -->
        <UIAppear direction="left">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A98B1F] to-[#D4AF37] text-white text-sm font-medium mb-6 shadow-lg">
              <UIcon name="i-lucide-file-text" class="w-4 h-4" />
              <span>{{ t('pages.caseStudies.hero.badge') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span class="bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent">
                {{ t('pages.caseStudies.hero.title') }}
              </span>
            </h1>

            <p class="text-xl text-muted mb-8 leading-relaxed">
              {{ t('pages.caseStudies.hero.subtitle') }}
            </p>

            <!-- Stats -->
            <div class="flex gap-8 mt-10">
              <div v-for="(stat, index) in stats" :key="index">
                <div class="text-4xl font-bold bg-gradient-to-r from-[#A98B1F] to-[#D4AF37] bg-clip-text text-transparent mb-2">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </UIAppear>

        <!-- Right side - Visual element with overlapping cards -->
        <UIAppear direction="right" :delay="200">
          <div class="relative h-[500px]">
            <!-- Background card -->
            <div class="absolute top-0 right-0 w-4/5 h-64 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl transform rotate-6 opacity-20"></div>

            <!-- Main card -->
            <div class="absolute top-12 left-0 right-12 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center">
                  <UIcon name="i-lucide-scale" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <div class="font-bold text-lg text-highlighted">{{ t('pages.caseStudies.hero.featured.name') }}</div>
                  <div class="text-sm text-muted">{{ t('pages.caseStudies.hero.featured.role') }}</div>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 italic">
                "{{ t('pages.caseStudies.hero.featured.quote') }}"
              </p>
            </div>

            <!-- Accent card -->
            <div class="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] rounded-2xl shadow-xl p-6 text-white">
              <div class="text-3xl font-bold mb-1">85%</div>
              <div class="text-sm opacity-90">{{ t('pages.caseStudies.hero.metric') }}</div>
            </div>
          </div>
        </UIAppear>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  {
    value: '50+',
    label: t('pages.caseStudies.hero.stats.cases')
  },
  {
    value: '3',
    label: t('pages.caseStudies.hero.stats.countries')
  },
  {
    value: '100%',
    label: t('pages.caseStudies.hero.stats.satisfaction')
  }
]
</script>
