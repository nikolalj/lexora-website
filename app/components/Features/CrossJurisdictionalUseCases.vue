<template>
  <section class="bg-gray-50 dark:bg-gray-950 py-16 sm:py-24">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center mb-16">
        <UIAppear>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {{ t('pages.features.crossJurisdictional.useCases.title') }}
          </h2>
        </UIAppear>
        <UIAppear direction="up" :delay="100">
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {{ t('pages.features.crossJurisdictional.useCases.subtitle') }}
          </p>
        </UIAppear>
      </div>

      <!-- Use Cases Grid -->
      <div class="grid gap-8 lg:grid-cols-3">
        <UIAppear
          v-for="(useCase, index) in useCases"
          :key="`case-${index}`"
          direction="up"
          :delay="200 + index * 150"
        >
          <div
            class="relative flex flex-col h-full rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-[#A98B1F] transition-all duration-300 hover:shadow-2xl group"
          >
            <!-- Category Badge -->
            <div class="mb-6">
              <span
                class="inline-block rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-400"
              >
                {{ useCase.title }}
              </span>
            </div>

            <!-- Persona -->
            <div class="mb-6">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F]"
                >
                  <UIcon :name="useCase.icon" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {{ t('pages.features.crossJurisdictional.useCases.case' + (index + 1) + '.persona') }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Challenge -->
            <div class="mb-6">
              <div class="flex items-start gap-2 mb-2">
                <UIcon
                  name="i-lucide-alert-circle"
                  class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
                />
                <div class="text-sm font-semibold text-gray-900 dark:text-white">
                  Challenge:
                </div>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-7">
                {{ useCase.challenge }}
              </p>
            </div>

            <!-- Solution -->
            <div class="mb-6">
              <div class="flex items-start gap-2 mb-2">
                <UIcon
                  name="i-lucide-lightbulb"
                  class="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0"
                />
                <div class="text-sm font-semibold text-gray-900 dark:text-white">
                  Solution:
                </div>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-7">
                {{ useCase.solution }}
              </p>
            </div>

            <!-- Result -->
            <div class="mt-auto">
              <div
                class="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 border border-green-200 dark:border-green-800"
              >
                <div class="flex items-start gap-2">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div class="text-xs font-semibold text-green-900 dark:text-green-200 mb-1">
                      Result:
                    </div>
                    <p class="text-sm text-green-800 dark:text-green-300 leading-relaxed font-medium">
                      {{ useCase.result }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UIAppear>
      </div>

      <!-- Bottom CTA -->
      <UIAppear direction="up" :delay="700">
        <div class="mt-16 text-center">
          <p class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Ready to transform your legal research?
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <AppCTAButton
              variant="primary"
              size="xl"
              :label="t('pages.features.crossJurisdictional.hero.cta')"
              :to="localePath('/demo')"
            />
            <AppCTAButton
              variant="secondary"
              size="xl"
              label="See Pricing"
              :to="localePath('/pricing')"
            />
          </div>
        </div>
      </UIAppear>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const useCases = computed(() => [
  {
    title: t('pages.features.crossJurisdictional.useCases.case1.title'),
    icon: 'i-lucide-gavel',
    challenge: t('pages.features.crossJurisdictional.useCases.case1.challenge'),
    solution: t('pages.features.crossJurisdictional.useCases.case1.solution'),
    result: t('pages.features.crossJurisdictional.useCases.case1.result')
  },
  {
    title: t('pages.features.crossJurisdictional.useCases.case2.title'),
    icon: 'i-lucide-briefcase',
    challenge: t('pages.features.crossJurisdictional.useCases.case2.challenge'),
    solution: t('pages.features.crossJurisdictional.useCases.case2.solution'),
    result: t('pages.features.crossJurisdictional.useCases.case2.result')
  },
  {
    title: t('pages.features.crossJurisdictional.useCases.case3.title'),
    icon: 'i-lucide-graduation-cap',
    challenge: t('pages.features.crossJurisdictional.useCases.case3.challenge'),
    solution: t('pages.features.crossJurisdictional.useCases.case3.solution'),
    result: t('pages.features.crossJurisdictional.useCases.case3.result')
  }
])
</script>
