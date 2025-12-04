<template>
  <SharedSection>
    <UIAppear direction="up">
      <div class="text-center mb-20">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-600 via-[#A98B1F] to-[#D4AF37] bg-clip-text text-transparent">
            {{ t('pages.features.showcase.title') }}
          </span>
        </h2>
        <p class="text-xl text-muted max-w-3xl mx-auto">
          {{ t('pages.features.showcase.subtitle') }}
        </p>
      </div>
    </UIAppear>

    <!-- Staggered feature cards -->
    <div class="space-y-32">
      <UIAppear
        v-for="(feature, index) in features"
        :key="index"
        direction="up"
        :delay="index * 100"
      >
        <div
          class="relative"
          :class="index % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32'"
        >
          <!-- Background decoration -->
          <div
            class="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
            :class="[
              index % 2 === 0 ? '-left-36 top-1/2 bg-primary-500' : '-right-36 top-1/2 bg-[#A98B1F]'
            ]"
          ></div>

          <div
            class="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 group lg:flex"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Gradient border on hover -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              :class="[
                index % 2 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]'
              ]"
              style="padding: 2px;"
            >
              <div class="w-full h-full bg-white dark:bg-gray-900 rounded-3xl"></div>
            </div>

            <!-- Visual side -->
            <div class="relative lg:w-1/2 h-64 lg:h-auto">
              <div
                class="absolute inset-0 flex items-center justify-center"
                :class="[
                  index % 2 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]'
                ]"
              >
                <!-- Icon with animation -->
                <div class="relative">
                  <div class="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                  <UIcon :name="feature.icon" class="relative w-32 h-32 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <!-- Feature badge -->
              <div class="absolute top-6 left-6">
                <span class="px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm font-semibold">
                  {{ feature.badge }}
                </span>
              </div>
            </div>

            <!-- Content side -->
            <div class="relative lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 class="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ feature.title }}
              </h3>

              <p class="text-muted text-lg mb-8 leading-relaxed">
                {{ feature.description }}
              </p>

              <!-- Key benefits -->
              <div class="space-y-4 mb-8">
                <div
                  v-for="(benefit, idx) in feature.benefits"
                  :key="idx"
                  class="flex items-start gap-3"
                >
                  <div
                    class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    :class="[
                      index % 2 === 0 ? 'bg-primary-100 dark:bg-primary-900/30' : 'bg-[#A98B1F]/20'
                    ]"
                  >
                    <UIcon name="i-lucide-check" class="w-4 h-4" :class="[
                      index % 2 === 0 ? 'text-primary-600 dark:text-primary-400' : 'text-[#A98B1F]'
                    ]" />
                  </div>
                  <span class="text-gray-700 dark:text-gray-300">{{ benefit }}</span>
                </div>
              </div>

              <!-- CTA Button -->
              <div>
                <UButton
                  :label="t('pages.features.showcase.learnMore')"
                  :color="index % 2 === 0 ? 'primary' : 'neutral'"
                  size="lg"
                  trailing-icon="i-lucide-arrow-right"
                />
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

const features = [
  {
    icon: 'i-lucide-search',
    badge: t('pages.features.items.search.badge'),
    title: t('pages.features.items.search.title'),
    description: t('pages.features.items.search.description'),
    benefits: [
      t('pages.features.items.search.benefits.benefit1'),
      t('pages.features.items.search.benefits.benefit2'),
      t('pages.features.items.search.benefits.benefit3')
    ]
  },
  {
    icon: 'i-lucide-globe',
    badge: t('pages.features.items.crossJurisdictional.badge'),
    title: t('pages.features.items.crossJurisdictional.title'),
    description: t('pages.features.items.crossJurisdictional.description'),
    benefits: [
      t('pages.features.items.crossJurisdictional.benefits.benefit1'),
      t('pages.features.items.crossJurisdictional.benefits.benefit2'),
      t('pages.features.items.crossJurisdictional.benefits.benefit3')
    ]
  },
  {
    icon: 'i-lucide-bar-chart',
    badge: t('pages.features.items.analytics.badge'),
    title: t('pages.features.items.analytics.title'),
    description: t('pages.features.items.analytics.description'),
    benefits: [
      t('pages.features.items.analytics.benefits.benefit1'),
      t('pages.features.items.analytics.benefits.benefit2'),
      t('pages.features.items.analytics.benefits.benefit3')
    ]
  },
  {
    icon: 'i-lucide-file-text',
    badge: t('pages.features.items.summarization.badge'),
    title: t('pages.features.items.summarization.title'),
    description: t('pages.features.items.summarization.description'),
    benefits: [
      t('pages.features.items.summarization.benefits.benefit1'),
      t('pages.features.items.summarization.benefits.benefit2'),
      t('pages.features.items.summarization.benefits.benefit3')
    ]
  }
]
</script>
