<template>
  <SharedSection>
    <!-- Featured Post - Large -->
    <UIAppear direction="up">
      <div class="mb-12">
        <div class="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-primary-600 to-[#A98B1F] p-1 hover:scale-[1.02] transition-transform duration-300">
          <div class="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden h-[500px] lg:h-[600px]">
            <!-- Background Image Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-[#A98B1F]/90"></div>

            <div class="relative h-full p-8 lg:p-12 flex flex-col justify-end text-white">
              <div class="mb-4">
                <span class="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                  {{ featuredPost.category }}
                </span>
              </div>

              <h2 class="text-3xl lg:text-5xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">
                {{ featuredPost.title }}
              </h2>

              <p class="text-lg text-white/90 mb-6 max-w-3xl">
                {{ featuredPost.excerpt }}
              </p>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <UIcon name="i-lucide-user" class="w-6 h-6" />
                </div>
                <div>
                  <div class="font-semibold">{{ featuredPost.author }}</div>
                  <div class="text-sm text-white/80">{{ featuredPost.date }} · {{ featuredPost.readTime }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UIAppear>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UIAppear
        v-for="(post, index) in blogPosts"
        :key="index"
        direction="up"
        :delay="index * 50"
      >
        <div
          class="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
        >
          <!-- Image/Visual Section -->
          <div class="relative overflow-hidden h-48">
            <div
              class="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
              :class="[
                index % 3 === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                index % 3 === 1 ? 'bg-gradient-to-br from-[#A98B1F] to-[#D4AF37]' :
                'bg-gradient-to-br from-gray-600 to-gray-700'
              ]"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <UIcon :name="post.icon" class="w-20 h-20 text-white opacity-40" />
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm font-medium text-gray-900 dark:text-white">
                {{ post.category }}
              </span>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="font-bold text-xl mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>

            <p class="text-muted text-sm mb-4 line-clamp-3 flex-grow">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <UIcon name="i-lucide-user" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <div class="text-sm font-medium">{{ post.author }}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">{{ post.date }}</div>
                </div>
              </div>

              <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <UIcon name="i-lucide-clock" class="w-4 h-4" />
                <span>{{ post.readTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </UIAppear>
    </div>

    <!-- Load More Button -->
    <UIAppear direction="up" :delay="400">
      <div class="flex justify-center mt-12">
        <UButton
          size="xl"
          color="primary"
          variant="outline"
          :label="t('pages.blog.loadMore')"
          trailing-icon="i-lucide-arrow-down"
        />
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

const featuredPost = {
  category: t('pages.blog.featured.category'),
  title: t('pages.blog.featured.title'),
  excerpt: t('pages.blog.featured.excerpt'),
  author: t('pages.blog.featured.author'),
  date: t('pages.blog.featured.date'),
  readTime: t('pages.blog.featured.readTime')
}

const blogPosts = [
  {
    icon: 'i-lucide-brain',
    category: t('pages.blog.posts.post1.category'),
    title: t('pages.blog.posts.post1.title'),
    excerpt: t('pages.blog.posts.post1.excerpt'),
    author: t('pages.blog.posts.post1.author'),
    date: t('pages.blog.posts.post1.date'),
    readTime: t('pages.blog.posts.post1.readTime')
  },
  {
    icon: 'i-lucide-scale',
    category: t('pages.blog.posts.post2.category'),
    title: t('pages.blog.posts.post2.title'),
    excerpt: t('pages.blog.posts.post2.excerpt'),
    author: t('pages.blog.posts.post2.author'),
    date: t('pages.blog.posts.post2.date'),
    readTime: t('pages.blog.posts.post2.readTime')
  },
  {
    icon: 'i-lucide-rocket',
    category: t('pages.blog.posts.post3.category'),
    title: t('pages.blog.posts.post3.title'),
    excerpt: t('pages.blog.posts.post3.excerpt'),
    author: t('pages.blog.posts.post3.author'),
    date: t('pages.blog.posts.post3.date'),
    readTime: t('pages.blog.posts.post3.readTime')
  },
  {
    icon: 'i-lucide-trending-up',
    category: t('pages.blog.posts.post4.category'),
    title: t('pages.blog.posts.post4.title'),
    excerpt: t('pages.blog.posts.post4.excerpt'),
    author: t('pages.blog.posts.post4.author'),
    date: t('pages.blog.posts.post4.date'),
    readTime: t('pages.blog.posts.post4.readTime')
  },
  {
    icon: 'i-lucide-shield-check',
    category: t('pages.blog.posts.post5.category'),
    title: t('pages.blog.posts.post5.title'),
    excerpt: t('pages.blog.posts.post5.excerpt'),
    author: t('pages.blog.posts.post5.author'),
    date: t('pages.blog.posts.post5.date'),
    readTime: t('pages.blog.posts.post5.readTime')
  },
  {
    icon: 'i-lucide-lightbulb',
    category: t('pages.blog.posts.post6.category'),
    title: t('pages.blog.posts.post6.title'),
    excerpt: t('pages.blog.posts.post6.excerpt'),
    author: t('pages.blog.posts.post6.author'),
    date: t('pages.blog.posts.post6.date'),
    readTime: t('pages.blog.posts.post6.readTime')
  }
]
</script>
