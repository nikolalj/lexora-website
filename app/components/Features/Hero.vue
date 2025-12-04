<template>
  <section class="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-32">
    <!-- Diagonal split background -->
    <div class="absolute inset-0 -z-10">
      <!-- Left side - Teal -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600" style="clip-path: polygon(0 0, 60% 0, 50% 100%, 0 100%);"></div>

      <!-- Right side - Gold -->
      <div class="absolute inset-0 bg-gradient-to-bl from-[#A98B1F] to-[#D4AF37]" style="clip-path: polygon(60% 0, 100% 0, 100% 100%, 50% 100%);"></div>

      <!-- Animated dots pattern -->
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px;"></div>
    </div>

    <UContainer>
      <div class="relative z-10">
        <UIAppear direction="up">
          <div class="max-w-4xl mx-auto text-center text-white mb-16">
            <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium mb-8">
              <UIcon name="i-lucide-sparkles" class="w-4 h-4" />
              <span>{{ t('pages.features.hero.badge') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {{ t('pages.features.hero.title') }}
            </h1>

            <p class="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {{ t('pages.features.hero.subtitle') }}
            </p>
          </div>
        </UIAppear>

        <!-- Feature highlights -->
        <UIAppear direction="up" :delay="200">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div
              v-for="(highlight, index) in highlights"
              :key="index"
              class="relative group"
            >
              <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UIcon :name="highlight.icon" class="w-6 h-6 text-white" />
                </div>
                <div class="text-3xl font-bold text-white mb-1">{{ highlight.value }}</div>
                <div class="text-sm text-white/80">{{ highlight.label }}</div>
              </div>
            </div>
          </div>
        </UIAppear>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const highlights = [
  {
    icon: t('pages.features.hero.stats.stat1.icon'),
    value: t('pages.features.hero.stats.stat1.value'),
    label: t('pages.features.hero.stats.stat1.label')
  },
  {
    icon: t('pages.features.hero.stats.stat2.icon'),
    value: t('pages.features.hero.stats.stat2.value'),
    label: t('pages.features.hero.stats.stat2.label')
  },
  {
    icon: t('pages.features.hero.stats.stat3.icon'),
    value: t('pages.features.hero.stats.stat3.value'),
    label: t('pages.features.hero.stats.stat3.label')
  },
  {
    icon: t('pages.features.hero.stats.stat4.icon'),
    value: t('pages.features.hero.stats.stat4.value'),
    label: t('pages.features.hero.stats.stat4.label')
  }
]
</script>
