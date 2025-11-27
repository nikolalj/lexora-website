<template>
  <SharedSection variant="alt" class="!pt-24">
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('pages.partners.types.title') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{{ t('pages.partners.types.subtitle') }}</p>
      </UIAppear>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Law Firms -->
      <UIAppear direction="up" :delay="100">
        <div class="relative rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white overflow-hidden shadow-xl">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg">
              <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">{{ t('pages.partners.types.lawFirms.title') }}</h3>
            <p class="text-white/90 mb-6">{{ t('pages.partners.types.lawFirms.description') }}</p>

            <div class="space-y-3">
              <div v-for="i in 4" :key="i" class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span class="text-sm text-white/90">{{ t(`pages.partners.types.lawFirms.benefits.benefit${i}`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- Courts & Judicial -->
      <UIAppear direction="up" :delay="150">
        <div class="relative rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] p-8 text-white overflow-hidden shadow-xl">
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg">
              <UIcon name="i-lucide-scale" class="w-8 h-8 text-[#A98B1F]" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ t('pages.partners.types.courts.title') }}</h3>
            <p class="text-white/90 mb-6">{{ t('pages.partners.types.courts.description') }}</p>

            <div class="space-y-3">
              <div v-for="i in 4" :key="i" class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span class="text-sm text-white/90">{{ t(`pages.partners.types.courts.benefits.benefit${i}`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>

      <!-- Universities -->
      <UIAppear direction="up" :delay="200">
        <div class="relative rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white overflow-hidden shadow-xl">
          <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg">
              <UIcon name="i-lucide-graduation-cap" class="w-8 h-8 text-teal-600" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ t('pages.partners.types.universities.title') }}</h3>
            <p class="text-white/90 mb-6">{{ t('pages.partners.types.universities.description') }}</p>

            <div class="space-y-3">
              <div v-for="i in 4" :key="i" class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span class="text-sm text-white/90">{{ t(`pages.partners.types.universities.benefits.benefit${i}`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
