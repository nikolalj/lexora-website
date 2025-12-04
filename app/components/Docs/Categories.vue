<template>
  <SharedSection>
    <UIAppear direction="up">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent">
          {{ t('pages.docs.categories.title') }}
        </h2>
        <p class="text-xl text-muted max-w-3xl mx-auto">
          {{ t('pages.docs.categories.subtitle') }}
        </p>
      </div>
    </UIAppear>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UIAppear
        v-for="(category, index) in categories"
        :key="index"
        direction="up"
        :delay="index * 50"
      >
        <div
          class="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
        >
          <!-- Gradient background on hover -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            :class="[
              index % 3 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
              index % 3 === 1 ? 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]' :
              'bg-gradient-to-br from-gray-500 to-gray-600'
            ]"
          ></div>

          <div class="relative p-8">
            <!-- Icon -->
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              :class="[
                index % 3 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                index % 3 === 1 ? 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]' :
                'bg-gradient-to-br from-gray-600 to-gray-700'
              ]"
            >
              <UIcon :name="category.icon" class="w-8 h-8 text-white" />
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ category.title }}
            </h3>
            <p class="text-muted text-sm mb-6">
              {{ category.description }}
            </p>

            <!-- Articles count -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <UIcon name="i-lucide-file-text" class="w-4 h-4" />
                <span>{{ category.articles }} {{ t('pages.docs.categories.articles') }}</span>
              </div>
              <UIcon name="i-lucide-arrow-right" class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </UIAppear>
    </div>

    <!-- Popular Guides -->
    <UIAppear direction="up" :delay="300">
      <div class="mt-20">
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center">
            <UIcon name="i-lucide-star" class="w-5 h-5 text-white" />
          </div>
          {{ t('pages.docs.popular.title') }}
        </h3>

        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(guide, index) in popularGuides"
            :key="index"
            class="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all hover:shadow-lg cursor-pointer"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UIcon name="i-lucide-book-open" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ guide.title }}
              </h4>
              <p class="text-sm text-muted">{{ guide.description }}</p>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
              <UIcon name="i-lucide-clock" class="w-3 h-3" />
              <span>{{ guide.readTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const categories = [
  {
    icon: 'i-lucide-rocket',
    title: t('pages.docs.categories.items.gettingStarted.title'),
    description: t('pages.docs.categories.items.gettingStarted.description'),
    articles: t('pages.docs.categories.items.gettingStarted.articles')
  },
  {
    icon: 'i-lucide-search',
    title: t('pages.docs.categories.items.searchGuides.title'),
    description: t('pages.docs.categories.items.searchGuides.description'),
    articles: t('pages.docs.categories.items.searchGuides.articles')
  },
  {
    icon: 'i-lucide-bar-chart',
    title: t('pages.docs.categories.items.analytics.title'),
    description: t('pages.docs.categories.items.analytics.description'),
    articles: t('pages.docs.categories.items.analytics.articles')
  },
  {
    icon: 'i-lucide-code',
    title: t('pages.docs.categories.items.api.title'),
    description: t('pages.docs.categories.items.api.description'),
    articles: t('pages.docs.categories.items.api.articles')
  },
  {
    icon: 'i-lucide-shield-check',
    title: t('pages.docs.categories.items.security.title'),
    description: t('pages.docs.categories.items.security.description'),
    articles: t('pages.docs.categories.items.security.articles')
  },
  {
    icon: 'i-lucide-help-circle',
    title: t('pages.docs.categories.items.faq.title'),
    description: t('pages.docs.categories.items.faq.description'),
    articles: t('pages.docs.categories.items.faq.articles')
  }
]

const popularGuides = [
  {
    title: t('pages.docs.popular.guides.guide1.title'),
    description: t('pages.docs.popular.guides.guide1.description'),
    readTime: t('pages.docs.popular.guides.guide1.readTime')
  },
  {
    title: t('pages.docs.popular.guides.guide2.title'),
    description: t('pages.docs.popular.guides.guide2.description'),
    readTime: t('pages.docs.popular.guides.guide2.readTime')
  },
  {
    title: t('pages.docs.popular.guides.guide3.title'),
    description: t('pages.docs.popular.guides.guide3.description'),
    readTime: t('pages.docs.popular.guides.guide3.readTime')
  },
  {
    title: t('pages.docs.popular.guides.guide4.title'),
    description: t('pages.docs.popular.guides.guide4.description'),
    readTime: t('pages.docs.popular.guides.guide4.readTime')
  }
]
</script>
