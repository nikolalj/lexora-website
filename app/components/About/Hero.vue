<template>
  <section class="relative isolate pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Background pattern -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="about-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#about-pattern)" />
      </svg>
    </div>

    <UContainer>
      <div class="max-w-4xl mx-auto text-center">
        <UIAppear direction="up" :distance="32">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A98B1F]/20 to-primary-400/20 border border-[#A98B1F]/30 text-sm font-medium mb-6">
            <UIcon name="i-lucide-building-2" class="w-4 h-4 text-[#A98B1F]" />
            <span class="text-[#A98B1F] dark:text-[#D4AF37]">{{ t('pages.about.hero.badge') }}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-highlighted mb-6">
            {{ t('pages.about.hero.title') }}
          </h1>

          <p class="text-lg sm:text-xl text-muted mb-8 max-w-3xl mx-auto">
            {{ t('pages.about.hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" color="primary" :to="'/demo'">
              {{ t('ui.cta.primary') }}
            </UButton>
            <UButton size="lg" variant="outline" :to="'/contact'">
              {{ t('ui.cta.contact') }}
            </UButton>
          </div>
        </UIAppear>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
