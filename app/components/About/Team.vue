<template>
  <SharedSection variant="alt">
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-highlighted">
          {{ t('pages.about.team.title') }}
        </h2>
        <p class="text-lg text-muted max-w-3xl mx-auto">
          {{ t('pages.about.team.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <!-- Codeus Info -->
    <UIAppear direction="up">
      <div class="max-w-4xl mx-auto mb-16">
        <div class="p-8 rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-[#A98B1F] text-white shadow-2xl">
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <UIcon name="i-lucide-building-2" class="w-8 h-8" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2">{{ t('pages.about.team.codeus.title') }}</h3>
              <p class="text-primary-100 mb-6">{{ t('pages.about.team.codeus.description') }}</p>

              <div class="grid sm:grid-cols-3 gap-6">
                <div v-for="(stat, index) in codeusStats" :key="index">
                  <div class="text-3xl font-bold mb-1">{{ stat.value }}</div>
                  <div class="text-sm text-primary-100">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UIAppear>

    <!-- Expertise Areas -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <UIAppear
        v-for="(area, index) in expertiseAreas"
        :key="index"
        direction="up"
        :delay="index * 100"
      >
        <div class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-elevated hover:border-[#A98B1F] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
          <div class="mb-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-400/50 text-primary-600 dark:text-white transition-all duration-300 dark:shadow-xl dark:ring-1 dark:ring-primary-300/20">
              <UIcon :name="area.icon" class="h-6 w-6" />
            </div>
          </div>
          <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">
            {{ area.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ area.description }}
          </p>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const codeusStats = [
  {
    value: t('pages.about.team.codeus.stats.founded.value'),
    label: t('pages.about.team.codeus.stats.founded.label')
  },
  {
    value: t('pages.about.team.codeus.stats.team.value'),
    label: t('pages.about.team.codeus.stats.team.label')
  },
  {
    value: t('pages.about.team.codeus.stats.experience.value'),
    label: t('pages.about.team.codeus.stats.experience.label')
  }
]

const expertiseAreas = [
  {
    icon: 'i-lucide-brain',
    title: t('pages.about.team.expertise.ai.title'),
    description: t('pages.about.team.expertise.ai.description')
  },
  {
    icon: 'i-lucide-scale',
    title: t('pages.about.team.expertise.legal.title'),
    description: t('pages.about.team.expertise.legal.description')
  },
  {
    icon: 'i-lucide-server',
    title: t('pages.about.team.expertise.infrastructure.title'),
    description: t('pages.about.team.expertise.infrastructure.description')
  },
  {
    icon: 'i-lucide-shield-check',
    title: t('pages.about.team.expertise.security.title'),
    description: t('pages.about.team.expertise.security.description')
  }
]
</script>
