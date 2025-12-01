<template>
  <SharedSection>
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-highlighted">
          {{ t('pages.about.values.title') }}
        </h2>
        <p class="text-lg text-muted max-w-3xl mx-auto">
          {{ t('pages.about.values.subtitle') }}
        </p>
      </UIAppear>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <UIAppear
        v-for="(value, index) in values"
        :key="index"
        direction="up"
        :delay="index * 100"
      >
        <div class="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-elevated hover:border-primary-500 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-400/50 text-primary-600 dark:text-white flex items-center justify-center transition-all duration-300 dark:shadow-xl dark:ring-1 dark:ring-primary-300/20 group-hover:bg-primary-600 group-hover:text-white">
                <UIcon :name="value.icon" class="w-6 h-6" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {{ value.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const values = [
  {
    icon: 'i-lucide-shield-check',
    title: t('pages.about.values.items.trust.title'),
    description: t('pages.about.values.items.trust.description')
  },
  {
    icon: 'i-lucide-zap',
    title: t('pages.about.values.items.excellence.title'),
    description: t('pages.about.values.items.excellence.description')
  },
  {
    icon: 'i-lucide-users',
    title: t('pages.about.values.items.collaboration.title'),
    description: t('pages.about.values.items.collaboration.description')
  },
  {
    icon: 'i-lucide-lightbulb',
    title: t('pages.about.values.items.transparency.title'),
    description: t('pages.about.values.items.transparency.description')
  }
]
</script>
