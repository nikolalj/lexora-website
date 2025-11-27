<template>
  <section class="bg-gray-50 dark:bg-gray-950 py-16 sm:py-24">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center mb-16">
        <UIAppear>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {{ t('pages.features.statisticalAnalytics.examples.title') }}
          </h2>
        </UIAppear>
        <UIAppear direction="up" :delay="100">
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {{ t('pages.features.statisticalAnalytics.examples.subtitle') }}
          </p>
        </UIAppear>
      </div>

      <!-- Examples -->
      <div class="grid gap-8 max-w-4xl mx-auto">
        <UIAppear
          v-for="(example, index) in examples"
          :key="`example-${index}`"
          direction="up"
          :delay="200 + index * 150"
        >
          <div class="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-2xl transition-all duration-300">
            <!-- Question -->
            <div class="mb-6">
              <div class="flex items-start gap-3 mb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 flex-shrink-0">
                  <UIcon name="i-lucide-message-circle-question" class="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Question:</p>
                  <p class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ example.question }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Answer -->
            <div class="mb-6 pl-13">
              <div class="rounded-lg bg-gradient-to-r from-primary-50 to-[#A98B1F]/10 dark:from-primary-900/20 dark:to-[#A98B1F]/10 p-4 border border-primary-200 dark:border-primary-800">
                <p class="text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">Statistical Answer:</p>
                <p class="text-2xl font-bold text-primary-900 dark:text-primary-100">
                  {{ example.answer }}
                </p>
              </div>
            </div>

            <!-- Insight -->
            <div class="mb-4 pl-13">
              <div class="flex items-start gap-2 mb-2">
                <UIcon name="i-lucide-lightbulb" class="h-5 w-5 text-[#D4AF37] mt-0.5" />
                <p class="text-sm font-semibold text-gray-900 dark:text-white">Key Insight:</p>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ example.insight }}
              </p>
            </div>

            <!-- Action -->
            <div class="pl-13">
              <div class="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800">
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-arrow-right-circle" class="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <p class="text-sm font-semibold text-green-900 dark:text-green-200 mb-1">Actionable Strategy:</p>
                    <p class="text-sm text-green-800 dark:text-green-300">
                      {{ example.action }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UIAppear>
      </div>

      <!-- CTA -->
      <UIAppear direction="up" :delay="700">
        <div class="mt-16 text-center">
          <p class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Ready to make data-driven legal decisions?
          </p>
          <AppCTAButton
            variant="primary"
            size="xl"
            :label="t('pages.features.statisticalAnalytics.hero.cta')"
            :to="localePath('/demo')"
          />
        </div>
      </UIAppear>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const examples = computed(() => [
  {
    question: t('pages.features.statisticalAnalytics.examples.example1.question'),
    answer: t('pages.features.statisticalAnalytics.examples.example1.answer'),
    insight: t('pages.features.statisticalAnalytics.examples.example1.insight'),
    action: t('pages.features.statisticalAnalytics.examples.example1.action')
  },
  {
    question: t('pages.features.statisticalAnalytics.examples.example2.question'),
    answer: t('pages.features.statisticalAnalytics.examples.example2.answer'),
    insight: t('pages.features.statisticalAnalytics.examples.example2.insight'),
    action: t('pages.features.statisticalAnalytics.examples.example2.action')
  },
  {
    question: t('pages.features.statisticalAnalytics.examples.example3.question'),
    answer: t('pages.features.statisticalAnalytics.examples.example3.answer'),
    insight: t('pages.features.statisticalAnalytics.examples.example3.insight'),
    action: t('pages.features.statisticalAnalytics.examples.example3.action')
  }
])
</script>
