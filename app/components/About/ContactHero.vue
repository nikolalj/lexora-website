<template>
  <section class="relative isolate overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-40 bg-[radial-gradient(ellipse_at_center,_#47ABAA_0%,_#3A8988_40%,_#0A1211_100%)]">

    <UContainer>
      <UIAppear direction="up" :distance="32">
        <div class="max-w-3xl mx-auto text-center mb-16 text-white">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
            <UIcon name="i-lucide-mail" class="w-4 h-4 text-white" />
            <span class="text-white">{{ t('pages.contact.hero.badge') }}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {{ t('pages.contact.hero.title') }}
          </h1>

          <p class="mt-6 text-lg sm:text-xl text-white/90">
            {{ t('pages.contact.hero.subtitle') }}
          </p>
        </div>
      </UIAppear>

      <UIAppear direction="up" :delay="150">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <!-- Address -->
          <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 group border border-white/20 hover:border-[#D4AF37]/50">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon name="i-lucide-map-pin" class="w-7 h-7 text-white" />
              </div>
              <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{{ t('pages.contact.address.title') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.contact.address.line1') }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.contact.address.line2') }}</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 group border border-white/20 hover:border-[#D4AF37]/50">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon name="i-lucide-phone" class="w-7 h-7 text-white" />
              </div>
              <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{{ t('pages.contact.phone.title') }}</h3>
              <a
                :href="`tel:${t('pages.contact.phone.number').replace(/\s/g, '')}`"
                class="text-sm text-[#A98B1F] hover:text-[#D4AF37] hover:underline transition-colors font-medium"
              >
                {{ t('pages.contact.phone.number') }}
              </a>
            </div>
          </div>

          <!-- Email -->
          <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 group border border-white/20 hover:border-[#D4AF37]/50">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon name="i-lucide-mail" class="w-7 h-7 text-white" />
              </div>
              <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{{ t('pages.contact.email.title') }}</h3>
              <a
                :href="`mailto:${t('data.company.contact.email')}@${t('data.company.domain')}`"
                class="text-sm text-[#A98B1F] hover:text-[#D4AF37] hover:underline transition-colors font-medium"
              >
                {{ t('data.company.contact.email') }}@{{ t('data.company.domain') }}
              </a>
            </div>
          </div>

          <!-- Working Hours -->
          <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 group border border-white/20 hover:border-[#D4AF37]/50">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#A98B1F] to-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon name="i-lucide-clock" class="w-7 h-7 text-white" />
              </div>
              <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{{ t('pages.contact.hours.title') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.contact.hours.weekdays') }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ t('pages.contact.hours.weekend') }}</p>
            </div>
          </div>
        </div>
      </UIAppear>
    </UContainer>

    <!-- Wave Shape -->
    <div class="absolute left-0 right-0 -bottom-px w-full leading-[0] pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 170"
        aria-hidden="true"
        class="fill-[var(--ui-bg)]"
      >
        <path
          fill-opacity="1"
          d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
