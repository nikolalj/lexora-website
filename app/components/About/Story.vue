<template>
  <SharedSection>
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left side - Story content -->
      <UIAppear direction="left">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#A98B1F]/20 to-primary-400/20 border border-[#A98B1F]/30 text-sm font-medium mb-4">
            <UIcon name="i-lucide-sparkles" class="w-4 h-4 text-[#A98B1F]" />
            <span class="text-[#A98B1F] dark:text-[#D4AF37]">{{ t('pages.about.story.badge') }}</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-highlighted">
            {{ t('pages.about.story.title') }}
          </h2>

          <div class="space-y-4 text-muted leading-relaxed">
            <p>{{ t('pages.about.story.paragraph1') }}</p>
            <p>{{ t('pages.about.story.paragraph2') }}</p>
            <p>{{ t('pages.about.story.paragraph3') }}</p>
          </div>

          <div class="mt-8 grid grid-cols-3 gap-6">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- Right side - Visual element -->
      <UIAppear direction="right" :delay="200">
        <div class="relative">
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-[#A98B1F] p-8 flex items-center justify-center shadow-2xl">
            <div class="text-center text-white">
              <UIcon name="i-lucide-scale" class="w-32 h-32 mx-auto mb-6 opacity-90" />
              <div class="text-2xl font-bold mb-2">{{ t('pages.about.story.visual.title') }}</div>
              <div class="text-primary-100">{{ t('pages.about.story.visual.subtitle') }}</div>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#A98B1F]/30 rounded-full opacity-50 blur-2xl"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D4AF37]/30 rounded-full opacity-50 blur-2xl"></div>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  {
    value: t('pages.about.story.stats.years.value'),
    label: t('pages.about.story.stats.years.label')
  },
  {
    value: t('pages.about.story.stats.jurisdictions.value'),
    label: t('pages.about.story.stats.jurisdictions.label')
  },
  {
    value: t('pages.about.story.stats.documents.value'),
    label: t('pages.about.story.stats.documents.label')
  }
]
</script>
