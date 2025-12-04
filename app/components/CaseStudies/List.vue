<template>
  <SharedSection>
    <UIAppear direction="up">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent">
            {{ t('pages.caseStudies.list.title') }}
          </span>
        </h2>
        <p class="text-xl text-muted max-w-3xl mx-auto">
          {{ t('pages.caseStudies.list.subtitle') }}
        </p>
      </div>
    </UIAppear>

    <!-- Case Studies Grid with alternating layout -->
    <div class="space-y-24">
      <UIAppear
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
        direction="up"
        :delay="index * 100"
      >
        <div
          class="relative group"
          :class="index % 2 === 0 ? 'lg:pr-24' : 'lg:pl-24'"
        >
          <!-- Decorative number -->
          <div
            class="absolute -top-8 text-[120px] font-bold opacity-5 pointer-events-none"
            :class="index % 2 === 0 ? 'left-0' : 'right-0'"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <div
            class="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 lg:flex"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Image/Icon Side -->
            <div
              class="lg:w-2/5 relative overflow-hidden"
              :class="[
                index % 2 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]'
              ]"
            >
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                <div class="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
              </div>

              <div class="relative h-64 lg:h-full flex items-center justify-center p-12">
                <div class="text-center text-white">
                  <div class="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <UIcon :name="caseStudy.icon" class="w-12 h-12" />
                  </div>
                  <div class="text-sm font-medium opacity-90">{{ caseStudy.category }}</div>
                </div>
              </div>
            </div>

            <!-- Content Side -->
            <div class="lg:w-3/5 p-8 lg:p-12">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                  {{ caseStudy.tag }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ caseStudy.date }}</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold mb-4 text-highlighted group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ caseStudy.title }}
              </h3>

              <p class="text-muted mb-6 leading-relaxed">
                {{ caseStudy.description }}
              </p>

              <!-- Key Results -->
              <div class="grid grid-cols-3 gap-4 mb-6 py-6 border-t border-b border-gray-200 dark:border-gray-700">
                <div v-for="(result, idx) in caseStudy.results" :key="idx" class="text-center">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {{ result.value }}
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">{{ result.label }}</div>
                </div>
              </div>

              <!-- CTA -->
              <UButton
                :label="t('pages.caseStudies.list.readMore')"
                color="primary"
                variant="subtle"
                trailing-icon="i-lucide-arrow-right"
                size="lg"
              />
            </div>
          </div>

          <!-- Decorative accent -->
          <div
            class="absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-20"
            :class="[
              index % 2 === 0 ? '-right-36 top-1/2 bg-[#A98B1F]' : '-left-36 top-1/2 bg-primary-500'
            ]"
          ></div>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const caseStudies = [
  {
    icon: 'i-lucide-gavel',
    category: t('pages.caseStudies.cases.judge.category'),
    tag: t('pages.caseStudies.cases.judge.tag'),
    date: t('pages.caseStudies.cases.judge.date'),
    title: t('pages.caseStudies.cases.judge.title'),
    description: t('pages.caseStudies.cases.judge.description'),
    results: [
      { value: t('pages.caseStudies.cases.judge.results.time.value'), label: t('pages.caseStudies.cases.judge.results.time.label') },
      { value: t('pages.caseStudies.cases.judge.results.cases.value'), label: t('pages.caseStudies.cases.judge.results.cases.label') },
      { value: t('pages.caseStudies.cases.judge.results.accuracy.value'), label: t('pages.caseStudies.cases.judge.results.accuracy.label') }
    ]
  },
  {
    icon: 'i-lucide-briefcase',
    category: t('pages.caseStudies.cases.lawyer.category'),
    tag: t('pages.caseStudies.cases.lawyer.tag'),
    date: t('pages.caseStudies.cases.lawyer.date'),
    title: t('pages.caseStudies.cases.lawyer.title'),
    description: t('pages.caseStudies.cases.lawyer.description'),
    results: [
      { value: t('pages.caseStudies.cases.lawyer.results.rate.value'), label: t('pages.caseStudies.cases.lawyer.results.rate.label') },
      { value: t('pages.caseStudies.cases.lawyer.results.research.value'), label: t('pages.caseStudies.cases.lawyer.results.research.label') },
      { value: t('pages.caseStudies.cases.lawyer.results.precedents.value'), label: t('pages.caseStudies.cases.lawyer.results.precedents.label') }
    ]
  },
  {
    icon: 'i-lucide-graduation-cap',
    category: t('pages.caseStudies.cases.researcher.category'),
    tag: t('pages.caseStudies.cases.researcher.tag'),
    date: t('pages.caseStudies.cases.researcher.date'),
    title: t('pages.caseStudies.cases.researcher.title'),
    description: t('pages.caseStudies.cases.researcher.description'),
    results: [
      { value: t('pages.caseStudies.cases.researcher.results.documents.value'), label: t('pages.caseStudies.cases.researcher.results.documents.label') },
      { value: t('pages.caseStudies.cases.researcher.results.time.value'), label: t('pages.caseStudies.cases.researcher.results.time.label') },
      { value: t('pages.caseStudies.cases.researcher.results.insights.value'), label: t('pages.caseStudies.cases.researcher.results.insights.label') }
    ]
  }
]
</script>
