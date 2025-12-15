<template>
  <SharedSection
    :variant="props.variant"
    :title="config.title"
    :description="config.description"
  >
    <UIAppear>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-100 to-[#FFF8E7] dark:from-primary-900/30 dark:to-[#A98B1F]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UIcon :name="client.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white text-sm">
              {{ client.name }}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ client.type }}
            </p>
          </div>
        </div>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
import type { SectionVariantType } from '~/types/components'

const props = defineProps({
  variant: {
    type: String as PropType<SectionVariantType>,
    default: undefined,
  }
})

const { t } = useI18n()

const config = ref({
  title: t('pages.home.clients.title'),
  description: t('pages.home.clients.description')
})

const clients = ref([
  {
    name: t('pages.home.clients.items.client1.name'),
    type: t('pages.home.clients.items.client1.type'),
    icon: 'i-lucide-gavel',
  },
  {
    name: t('pages.home.clients.items.client2.name'),
    type: t('pages.home.clients.items.client2.type'),
    icon: 'i-lucide-landmark',
  },
  {
    name: t('pages.home.clients.items.client3.name'),
    type: t('pages.home.clients.items.client3.type'),
    icon: 'i-lucide-briefcase',
  },
  {
    name: t('pages.home.clients.items.client4.name'),
    type: t('pages.home.clients.items.client4.type'),
    icon: 'i-lucide-building-2',
  },
  {
    name: t('pages.home.clients.items.client5.name'),
    type: t('pages.home.clients.items.client5.type'),
    icon: 'i-lucide-graduation-cap',
  },
  {
    name: t('pages.home.clients.items.client6.name'),
    type: t('pages.home.clients.items.client6.type'),
    icon: 'i-lucide-scale',
  },
  {
    name: t('pages.home.clients.items.client7.name'),
    type: t('pages.home.clients.items.client7.type'),
    icon: 'i-lucide-book-open',
  },
  {
    name: t('pages.home.clients.items.client8.name'),
    type: t('pages.home.clients.items.client8.type'),
    icon: 'i-lucide-users',
  },
])
</script>
