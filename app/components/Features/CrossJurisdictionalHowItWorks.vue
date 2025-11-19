<template>
  <SharedSection>
    <div class="mx-auto max-w-4xl text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ t('pages.features.crossJurisdictional.howItWorks.title') }}
        </h2>
      </UIAppear>
      <UIAppear direction="up" :delay="100">
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {{ t('pages.features.crossJurisdictional.howItWorks.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <!-- Steps Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <UIAppear
        v-for="(step, index) in steps"
        :key="`step-${index}`"
        direction="up"
        :delay="200 + index * 100"
      >
        <div class="relative flex flex-col h-full">
          <!-- Step Number Badge -->
          <div class="absolute -top-3 -left-3 z-10">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] shadow-xl"
            >
              <span class="text-lg font-bold text-white">{{ index + 1 }}</span>
            </div>
          </div>

          <!-- Card -->
          <div
            class="flex-1 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 pt-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Icon -->
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600/10 text-primary-600 group-hover:bg-[#A98B1F] group-hover:text-white transition-all duration-300"
            >
              <UIcon :name="step.icon" class="h-8 w-8" />
            </div>

            <!-- Content -->
            <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white text-center">
              {{ step.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <!-- Arrow (desktop only) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-0"
          >
            <UIcon
              name="i-lucide-arrow-right"
              class="h-8 w-8 text-gray-300 dark:text-gray-700"
            />
          </div>
        </div>
      </UIAppear>
    </div>

    <!-- Bottom CTA -->
    <UIAppear direction="up" :delay="800">
      <div class="mt-16 text-center">
        <AppCTAButton
          variant="primary"
          size="xl"
          :label="t('pages.features.crossJurisdictional.hero.cta')"
          :to="localePath('/demo')"
        />
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Start searching across 3 jurisdictions in seconds
        </p>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const steps = computed(() => [
  {
    title: t('pages.features.crossJurisdictional.howItWorks.step1.title'),
    description: t('pages.features.crossJurisdictional.howItWorks.step1.description'),
    icon: 'i-lucide-keyboard'
  },
  {
    title: t('pages.features.crossJurisdictional.howItWorks.step2.title'),
    description: t('pages.features.crossJurisdictional.howItWorks.step2.description'),
    icon: 'i-lucide-brain-circuit'
  },
  {
    title: t('pages.features.crossJurisdictional.howItWorks.step3.title'),
    description: t('pages.features.crossJurisdictional.howItWorks.step3.description'),
    icon: 'i-lucide-columns-2'
  },
  {
    title: t('pages.features.crossJurisdictional.howItWorks.step4.title'),
    description: t('pages.features.crossJurisdictional.howItWorks.step4.description'),
    icon: 'i-lucide-download'
  }
])
</script>
