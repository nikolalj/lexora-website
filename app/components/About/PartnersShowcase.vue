<template>
  <SharedSection>
    <div class="text-center mb-12">
      <UIAppear>
        <h2 class="text-3xl font-bold mb-4">{{ t('pages.partners.showcase.title') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">{{ t('pages.partners.showcase.subtitle') }}</p>
      </UIAppear>
    </div>

    <UIAppear direction="up" :delay="100">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <!-- Partner placeholders - these would be replaced with actual partner logos -->
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="flex items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg"
        >
          <div class="text-center">
            <UIcon :name="partner.icon" class="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ partner.name }}</p>
          </div>
        </div>
      </div>
    </UIAppear>

    <UIAppear direction="up" :delay="200">
      <div class="mt-16 text-center">
        <p class="text-gray-600 dark:text-gray-300 mb-6">{{ t('pages.partners.showcase.cta') }}</p>
        <AppCTAButton
          variant="primary"
          size="lg"
          :label="t('pages.partners.cta')"
          @click="scrollToForm"
          class="shadow-xl"
        />
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const scrollToForm = () => {
  const form = document.querySelector('#contact-form')
  form?.scrollIntoView({ behavior: 'smooth' })
}

// Placeholder partners - will be replaced with actual logos
const partners = [
  { name: 'Law Firm', icon: 'i-lucide-briefcase' },
  { name: 'Court', icon: 'i-lucide-scale' },
  { name: 'University', icon: 'i-lucide-graduation-cap' },
  { name: 'Research Inst.', icon: 'i-lucide-flask-conical' },
  { name: 'Law Firm', icon: 'i-lucide-briefcase' },
  { name: 'Court', icon: 'i-lucide-scale' },
  { name: 'University', icon: 'i-lucide-graduation-cap' },
  { name: 'Law Firm', icon: 'i-lucide-briefcase' }
]
</script>
