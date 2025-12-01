<template>
  <SharedSection variant="alt">
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-highlighted">
          {{ t('pages.about.mission.title') }}
        </h2>
        <p class="text-lg text-muted max-w-3xl mx-auto">
          {{ t('pages.about.mission.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <UIAppear
        v-for="(pillar, index) in pillars"
        :key="index"
        direction="up"
        :delay="index * 100"
      >
        <div class="group p-8 rounded-2xl bg-white dark:bg-elevated border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl">
          <div class="mb-6">
            <div class="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-400/50 text-primary-600 dark:text-white transition-all duration-300 dark:shadow-xl dark:ring-1 dark:ring-primary-300/20 group-hover:bg-primary-600 group-hover:text-white">
              <UIcon :name="pillar.icon" class="h-7 w-7" />
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {{ pillar.title }}
          </h3>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ pillar.description }}
          </p>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const pillars = [
  {
    icon: 'i-lucide-accessibility',
    title: t('pages.about.mission.pillars.accessibility.title'),
    description: t('pages.about.mission.pillars.accessibility.description')
  },
  {
    icon: 'i-lucide-target',
    title: t('pages.about.mission.pillars.accuracy.title'),
    description: t('pages.about.mission.pillars.accuracy.description')
  },
  {
    icon: 'i-lucide-globe',
    title: t('pages.about.mission.pillars.innovation.title'),
    description: t('pages.about.mission.pillars.innovation.description')
  }
]
</script>
