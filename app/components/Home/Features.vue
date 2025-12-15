<template>
  <SharedSection
    :title="t('pages.products.features.title')"
    :description="t('pages.products.features.description')"
  >
    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      <UIAppear
        v-for="(feature, index) in features"
        :key="`feature-${index}`"
        direction="up"
        :delay="index * 100"
      >
        <NuxtLink
          :to="localePath(feature.link)"
          class="group relative block h-full"
        >
          <!-- Card Container with gradient border -->
          <div class="relative h-full rounded-3xl p-[2px] overflow-hidden transition-all duration-500">
            <!-- Animated gradient border -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :class="feature.borderGradient"
            ></div>

            <!-- Card content -->
            <div class="relative h-full bg-white dark:bg-gray-900 rounded-3xl p-8 flex flex-col">
              <!-- Icon with animated background -->
              <div class="relative mb-8">
                <div
                  class="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  :class="feature.glowBg"
                ></div>
                <div
                  class="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  :class="feature.iconBg"
                >
                  <UIcon :name="feature.icon" class="w-10 h-10 text-white" />
                </div>
              </div>

              <!-- Badge -->
              <div
                class="inline-flex items-center self-start px-3 py-1.5 rounded-full text-xs font-bold mb-4 transition-colors"
                :class="feature.badgeColors"
              >
                {{ t(feature.badgeKey) }}
              </div>

              <!-- Title -->
              <h3 class="text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300"
                  :class="feature.titleColor">
                {{ t(`pages.products.features.${feature.key}.title`) }}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                {{ t(`pages.products.features.${feature.key}.description`) }}
              </p>

              <!-- Learn more link with arrow -->
              <div class="flex items-center gap-3 font-semibold group-hover:gap-5 transition-all duration-300"
                   :class="feature.linkColor">
                <span>{{ t('ui.learnMore') }}</span>
                <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                     :class="feature.arrowBg">
                  <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </UIAppear>
    </div>

    <!-- CTA Section -->
    <UIAppear direction="up" class="mt-20">
      <div class="relative rounded-3xl overflow-hidden">
        <!-- Background with gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-[#A98B1F]"></div>

        <!-- Animated blobs -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <!-- Content -->
        <div class="relative z-10 px-8 py-12 md:px-12 md:py-16 text-center">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
            {{ t('pages.home.featuresCta.title') }}
          </h3>
          <p class="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {{ t('pages.home.featuresCta.description') }}
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <AppCTAButton variant="primary" section="features" class="dark bg-white hover:bg-gray-100" size="xl" />
            <NuxtLink
              :to="localePath('/features')"
              class="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all text-lg inline-flex items-center gap-2"
            >
              <span>{{ t('ui.navigation.features.seeAll') }}</span>
              <UIcon name="i-lucide-sparkles" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Feature configuration with translation keys
const features = [
  {
    key: 'feat1',
    icon: 'i-lucide-globe',
    badgeKey: 'ui.navigation.features.crossJurisdictional',
    iconBg: 'bg-gradient-to-br from-primary-600 to-primary-500',
    glowBg: 'bg-primary-500',
    badgeColors: 'bg-primary-500/20 text-white border border-primary-500/30',
    borderGradient: 'bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400',
    linkColor: 'text-primary-600 dark:text-primary-400',
    arrowBg: 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500',
    link: '/features/cross-jurisdictional'
  },
  {
    key: 'feat2',
    icon: 'i-lucide-bar-chart-3',
    badgeKey: 'ui.navigation.features.statisticalAnalytics',
    iconBg: 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]',
    glowBg: 'bg-[#D4AF37]',
    badgeColors: 'bg-[#A98B1F]/20 text-white border border-[#D4AF37]/30',
    borderGradient: 'bg-gradient-to-br from-[#D4AF37] via-[#A98B1F] to-[#D4AF37]',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-[#A98B1F] dark:group-hover:text-[#D4AF37]',
    linkColor: 'text-[#A98B1F] dark:text-[#D4AF37]',
    arrowBg: 'bg-[#FFF8E7] dark:bg-[#A98B1F]/20 group-hover:bg-[#A98B1F] group-hover:text-white dark:group-hover:bg-[#D4AF37]',
    link: '/features/statistical-analytics'
  },
  {
    key: 'feat3',
    icon: 'i-lucide-file-text',
    badgeKey: 'ui.navigation.features.caseSummarization',
    iconBg: 'bg-gradient-to-br from-primary-600 to-primary-500',
    glowBg: 'bg-primary-500',
    badgeColors: 'bg-primary-500/20 text-white border border-primary-500/30',
    borderGradient: 'bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400',
    linkColor: 'text-primary-600 dark:text-primary-400',
    arrowBg: 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500',
    link: '/features/case-summarization'
  }
]
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
