<template>
  <section class="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 bg-gradient-to-br from-primary-500 via-primary-600 to-[#A98B1F]">
    <!-- Animated grid background -->
    <div class="absolute inset-0 -z-10 opacity-10">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <UContainer>
      <div class="max-w-4xl mx-auto text-center text-white">
        <UIAppear direction="up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
            <UIcon name="i-lucide-book-open" class="w-4 h-4" />
            <span>{{ t('pages.docs.hero.badge') }}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {{ t('pages.docs.hero.title') }}
          </h1>

          <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {{ t('pages.docs.hero.subtitle') }}
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-12">
            <div class="relative group">
              <input
                type="text"
                :placeholder="t('pages.docs.hero.searchPlaceholder')"
                class="w-full px-6 py-4 pr-14 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all outline-none text-lg"
              >
              <div class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors cursor-pointer">
                <UIcon name="i-lucide-search" class="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div v-for="(stat, index) in stats" :key="index">
              <div class="text-3xl font-bold mb-1">{{ stat.value }}</div>
              <div class="text-sm text-white/80">{{ stat.label }}</div>
            </div>
          </div>
        </UIAppear>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  {
    value: t('pages.docs.hero.stats.guides.value'),
    label: t('pages.docs.hero.stats.guides.label')
  },
  {
    value: t('pages.docs.hero.stats.tutorials.value'),
    label: t('pages.docs.hero.stats.tutorials.label')
  },
  {
    value: t('pages.docs.hero.stats.api.value'),
    label: t('pages.docs.hero.stats.api.label')
  }
]
</script>
