<template>
  <section class="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 bg-gradient-to-br from-gray-50 via-primary-50/30 to-[#FFF8E7] dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A98B1F]/5 rounded-full blur-3xl"></div>
    </div>

    <UContainer>
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <UIAppear direction="up">
          <!-- Animated tags cloud -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <span
              v-for="(tag, index) in topTags"
              :key="tag"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer"
              :class="[
                index % 3 === 0 ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg' :
                index % 3 === 1 ? 'bg-gradient-to-r from-[#A98B1F] to-[#D4AF37] text-white shadow-lg' :
                'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              ]"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              #{{ tag }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span class="block mb-2">{{ t('pages.blog.hero.title.line1') }}</span>
            <span class="bg-gradient-to-r from-primary-600 via-[#A98B1F] to-[#D4AF37] bg-clip-text text-transparent">
              {{ t('pages.blog.hero.title.line2') }}
            </span>
          </h1>

          <p class="text-xl text-muted max-w-2xl mb-8">
            {{ t('pages.blog.hero.subtitle') }}
          </p>

          <!-- Search bar -->
          <div class="w-full max-w-2xl">
            <div class="relative group">
              <input
                type="text"
                :placeholder="t('pages.blog.hero.searchPlaceholder')"
                class="w-full px-6 py-4 pr-12 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-4 focus:ring-primary-500/20 transition-all outline-none text-lg"
              >
              <div class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                <UIcon name="i-lucide-search" class="w-5 h-5 text-white" />
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

const topTags = [
  t('pages.blog.tags.ai'),
  t('pages.blog.tags.legal'),
  t('pages.blog.tags.research'),
  t('pages.blog.tags.technology'),
  t('pages.blog.tags.insights'),
  t('pages.blog.tags.tutorials')
]
</script>
