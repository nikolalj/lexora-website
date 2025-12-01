<template>
  <SharedSection>
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <UIAppear>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#A98B1F]/20 to-primary-400/20 border border-[#A98B1F]/30 text-sm font-medium mb-4">
            <UIcon name="i-lucide-cpu" class="w-4 h-4 text-[#A98B1F]" />
            <span class="text-[#A98B1F] dark:text-[#D4AF37]">{{ t('pages.about.technology.badge') }}</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-highlighted">
            {{ t('pages.about.technology.title') }}
          </h2>
          <p class="text-lg text-muted">
            {{ t('pages.about.technology.subtitle') }}
          </p>
        </UIAppear>
      </div>

      <!-- RAG Explanation -->
      <UIAppear direction="up">
        <div class="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 border border-primary-200 dark:border-gray-700">
          <div class="flex items-start gap-4 mb-6">
            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
              <UIcon name="i-lucide-brain-circuit" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {{ t('pages.about.technology.rag.title') }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t('pages.about.technology.rag.description') }}
              </p>
            </div>
          </div>

          <!-- RAG Process Steps -->
          <div class="grid sm:grid-cols-3 gap-4 mt-6">
            <div v-for="(step, index) in ragSteps" :key="index" class="flex items-start gap-3">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                {{ index + 1 }}
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {{ step.title }}
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  {{ step.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- Performance Metrics -->
      <div class="grid sm:grid-cols-3 gap-6">
        <UIAppear
          v-for="(metric, index) in metrics"
          :key="index"
          direction="up"
          :delay="index * 100"
        >
          <div class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-elevated text-center hover:border-[#A98B1F]/50 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-[#A98B1F] bg-clip-text text-transparent mb-2">
              {{ metric.value }}
            </div>
            <div class="text-sm font-medium text-gray-900 dark:text-white mb-1">
              {{ metric.label }}
            </div>
            <div class="text-xs text-gray-600 dark:text-gray-400">
              {{ metric.comparison }}
            </div>
          </div>
        </UIAppear>
      </div>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const ragSteps = [
  {
    title: t('pages.about.technology.rag.steps.step1.title'),
    description: t('pages.about.technology.rag.steps.step1.description')
  },
  {
    title: t('pages.about.technology.rag.steps.step2.title'),
    description: t('pages.about.technology.rag.steps.step2.description')
  },
  {
    title: t('pages.about.technology.rag.steps.step3.title'),
    description: t('pages.about.technology.rag.steps.step3.description')
  }
]

const metrics = [
  {
    value: t('pages.about.technology.metrics.accuracy.value'),
    label: t('pages.about.technology.metrics.accuracy.label'),
    comparison: t('pages.about.technology.metrics.accuracy.comparison')
  },
  {
    value: t('pages.about.technology.metrics.speed.value'),
    label: t('pages.about.technology.metrics.speed.label'),
    comparison: t('pages.about.technology.metrics.speed.comparison')
  },
  {
    value: t('pages.about.technology.metrics.hallucination.value'),
    label: t('pages.about.technology.metrics.hallucination.label'),
    comparison: t('pages.about.technology.metrics.hallucination.comparison')
  }
]
</script>
