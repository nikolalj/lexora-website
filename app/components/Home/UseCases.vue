<template>
  <section class="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
    <!-- Decorative animated blobs -->
    <div class="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-blob"></div>
    <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#A98B1F]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

    <UContainer class="relative z-10">
      <!-- Section Header -->
      <UIAppear direction="up" class="text-center mb-16">
        <div class="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-bold mb-6 border border-primary-200 dark:border-primary-800">
          {{ t('pages.home.useCases.badge') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ t('pages.home.useCases.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {{ t('pages.home.useCases.subtitle') }}
        </p>
      </UIAppear>

      <!-- Use Cases Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-16">
        <UIAppear
          v-for="(useCase, index) in useCases"
          :key="`use-case-${index}`"
          direction="up"
          :delay="index * 100"
        >
          <NuxtLink
            :to="localePath(useCase.link)"
            class="group relative block h-full"
          >
            <!-- Card Container with gradient border -->
            <div class="relative h-full rounded-3xl p-[2px] transition-all duration-500">
              <!-- Animated gradient border -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                :class="useCase.borderGradient"
              ></div>

              <!-- Card content -->
              <div class="relative h-full bg-white dark:bg-gray-900 rounded-3xl p-8 flex flex-col shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <!-- Icon with animated glow -->
                <div class="relative mb-8">
                  <div
                    class="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    :class="useCase.glowBg"
                  ></div>
                  <div
                    class="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    :class="useCase.iconBg"
                  >
                    <UIcon :name="useCase.icon" class="w-10 h-10 text-white" />
                  </div>
                </div>

                <!-- Title -->
                <h3 class="text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300"
                    :class="useCase.titleColor">
                  {{ t(`pages.home.useCases.items.${useCase.key}.title`) }}
                </h3>

                <!-- Description -->
                <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {{ t(`pages.home.useCases.items.${useCase.key}.description`) }}
                </p>

                <!-- Stats -->
                <div class="space-y-3 mb-8 flex-grow">
                  <div
                    v-for="statIndex in useCase.stats"
                    :key="`stat-${statIndex}`"
                    class="flex items-start gap-3 text-sm"
                  >
                    <div
                      class="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      :class="useCase.checkBg"
                    >
                      <UIcon name="i-lucide-check" class="w-4 h-4 text-white" />
                    </div>
                    <span class="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {{ t(`pages.home.useCases.items.${useCase.key}.stats.stat${statIndex}`) }}
                    </span>
                  </div>
                </div>

                <!-- Learn more link with arrow -->
                <div class="flex items-center gap-3 font-semibold group-hover:gap-5 transition-all duration-300 mt-auto"
                     :class="useCase.linkColor">
                  <span>{{ t('pages.home.useCases.learnMore') }}</span>
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                       :class="useCase.arrowBg">
                    <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </UIAppear>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const useCases = [
  {
    key: 'judges',
    icon: 'i-lucide-gavel',
    iconBg: 'bg-gradient-to-br from-primary-600 to-primary-500',
    glowBg: 'bg-primary-500',
    borderGradient: 'bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400',
    linkColor: 'text-primary-600 dark:text-primary-400',
    arrowBg: 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500',
    checkBg: 'bg-primary-600 dark:bg-primary-500',
    link: '/solutions/judges',
    stats: 3
  },
  {
    key: 'lawyers',
    icon: 'i-lucide-briefcase',
    iconBg: 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]',
    glowBg: 'bg-[#D4AF37]',
    borderGradient: 'bg-gradient-to-br from-[#D4AF37] via-[#A98B1F] to-[#D4AF37]',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-[#A98B1F] dark:group-hover:text-[#D4AF37]',
    linkColor: 'text-[#A98B1F] dark:text-[#D4AF37]',
    arrowBg: 'bg-[#FFF8E7] dark:bg-[#A98B1F]/20 group-hover:bg-[#A98B1F] group-hover:text-white dark:group-hover:bg-[#D4AF37]',
    checkBg: 'bg-[#A98B1F] dark:bg-[#D4AF37]',
    link: '/solutions/lawyers',
    stats: 3
  },
  {
    key: 'researchers',
    icon: 'i-lucide-microscope',
    iconBg: 'bg-gradient-to-br from-primary-600 to-primary-500',
    glowBg: 'bg-primary-500',
    borderGradient: 'bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600',
    titleColor: 'text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400',
    linkColor: 'text-primary-600 dark:text-primary-400',
    arrowBg: 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500',
    checkBg: 'bg-primary-600 dark:bg-primary-500',
    link: '/solutions/researchers',
    stats: 3
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

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
