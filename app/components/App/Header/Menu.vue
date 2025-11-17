<template>
  <div
    v-if="props.orientation === 'horizontal'"
    class="flex items-center space-x-2"
  >
    <template v-for="item in items" :key="item.label">
      <!-- Dropdown item with children -->
      <div v-if="item.children && item.children.length > 0" class="relative">
        <UPopover
          v-model:open="openStates[item.label]"
          mode="hover"
          :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8
          }"
        >
          <template #default="{ open }">
            <UButton
              :label="item.label"
              :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              variant="ghost"
              :aria-expanded="open"
              class="group border-none text-base text-white hover:text-gray-300 font-bold transition-colors"
              :class="open ? 'text-gray-200' : ''"
            />
          </template>

          <template #content>
            <!-- Solutions content -->
            <div v-if="item.slot === 'solutions'" class="p-4 space-y-4">
              <div class="flex gap-4 mb-4">
                <template
                  v-for="child in item.children.slice(0, 2)"
                  :key="child.label"
                >
                  <div
                    class="flex flex-col flex-1"
                    @mouseenter="hoveredSolutionLabel = child.label"
                  >
                    <ULink
                      :to="child.to || '#'"
                      :style="child.image ? { backgroundImage: `url('${child.image.src}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}"
                      :class="[
                        'relative group block overflow-hidden h-56 rounded-lg flex-shrink-0 cursor-pointer transition-opacity',
                        hoveredSolutionLabel && hoveredSolutionLabel !== child.label ? 'opacity-50' : 'opacity-100',
                        !child.image && (child.icon === 'i-lucide-scale'
                          ? 'bg-gradient-to-br from-[#47ABAA] via-[#3A8988] to-[#2D6766]'
                          : 'bg-gradient-to-br from-[#5BBBB9] via-[#47ABAA] to-[#3A8988]')
                      ]"
                      :exact="route.path === child.to"
                      @click="handleNavigate"
                    >
                      <!-- Overlay for text readability -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      <!-- Title -->
                      <div class="absolute inset-0 flex items-end justify-center pb-3 px-3">
                        <p class="text-white text-sm font-bold text-center leading-tight">
                          {{ child.label }}
                        </p>
                      </div>
                    </ULink>
                  </div>
                </template>
              </div>
              <!-- Shared description area -->
              <div v-if="hoveredSolutionLabel" class="text-xs text-[var(--ui-text-secondary)] text-center leading-relaxed px-2 min-h-12 mb-2 flex items-center justify-center overflow-hidden max-w-116">
                <p class="break-words">{{ item.children.slice(0, 2).find(c => c.label === hoveredSolutionLabel)?.description }}</p>
              </div>

              <div
                v-if="item.children.length > 2"
                class="flex gap-2"
              >
                <template
                  v-for="child in item.children.slice(2)"
                  :key="child.label"
                >
                  <ULink
                    :to="child.to || '#'"
                    class="group flex items-center justify-center space-x-2 text-sm font-semibold text-center rounded-md px-3 py-2 transition-all text-[var(--ui-text-primary)] hover:bg-primary-500 hover:text-white"
                    :exact="route.path === child.to"
                    @click="handleNavigate"
                  >
                    <Icon
                      v-if="child.icon"
                      :name="child.icon"
                      class="w-5 h-5 text-primary group-hover:text-white flex-shrink-0 transition-colors"
                    />
                    <p class="font-semibold text-sm">
                      {{ child.label }}
                    </p>
                  </ULink>
                </template>
              </div>
            </div>


            <!-- Features content -->
            <div v-else-if="item.slot === 'features'" class="p-4">
              <ul class="space-y-1">
                <li v-for="child in item.children" :key="child.label">
                  <ULink
                    :to="child.to || '#'"
                    class="group flex items-center space-x-3 px-4 py-3 rounded-md transition-all text-[var(--ui-text-primary)] hover:bg-primary-500 hover:text-white whitespace-nowrap"
                    @click="handleNavigate"
                  >
                    <Icon
                      v-if="child.icon"
                      :name="child.icon"
                      class="w-5 h-5 text-primary group-hover:text-white flex-shrink-0 transition-colors"
                    />
                    <div class="flex items-center gap-2">
                      <p class="text-sm font-semibold">
                        {{ child.label }}
                      </p>
                      <span v-if="child.badge" class="text-xs bg-secondary-500 text-white px-2 py-0.5 rounded-full">
                        {{ child.badge }}
                      </span>
                    </div>
                  </ULink>
                </li>
              </ul>
            </div>

            <!-- Resources content -->
            <div v-else-if="item.slot === 'resources'" class="p-4">
              <ul class="space-y-1">
                <li v-for="child in item.children" :key="child.label">
                  <ULink
                    :to="child.to || '#'"
                    class="group flex items-center space-x-3 px-4 py-3 rounded-md transition-all text-[var(--ui-text-primary)] hover:bg-primary-500 hover:text-white whitespace-nowrap"
                    @click="handleNavigate"
                  >
                    <Icon
                      v-if="child.icon"
                      :name="child.icon"
                      class="w-5 h-5 text-primary group-hover:text-white flex-shrink-0 transition-colors"
                    />
                    <p class="text-sm font-semibold">
                      {{ child.label }}
                    </p>
                  </ULink>
                </li>
              </ul>
            </div>

            <!-- About content -->
            <div v-else-if="item.slot === 'about'" class="p-4">
              <ul class="space-y-1">
                <li v-for="child in item.children" :key="child.label">
                  <ULink
                    :to="child.to || '#'"
                    class="group flex items-center space-x-3 px-4 py-3 rounded-md transition-all text-[var(--ui-text-primary)] hover:bg-primary-500 hover:text-white whitespace-nowrap"
                    @click="handleNavigate"
                  >
                    <Icon
                      v-if="child.icon"
                      :name="child.icon"
                      class="w-5 h-5 text-primary group-hover:text-white flex-shrink-0 transition-colors"
                    />
                    <p class="text-sm font-semibold">
                      {{ child.label }}
                    </p>
                  </ULink>
                </li>
              </ul>
            </div>
          </template>
        </UPopover>
      </div>

      <UButton
        v-else
        :to="item.to || '#'"
        :label="item.label"
        variant="ghost"
        class="group text-base text-white hover:text-gray-300 font-bold transition-colors"
        :class="route.path === item.to ? 'text-gray-200' : ''"
        :aria-current="route.path === item.to ? 'page' : undefined"
        @click="handleNavigate"
      />
    </template>
  </div>

  <UNavigationMenu
    v-else
    :items="items"
    orientation="vertical"
    class="-mx-2.5"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const props = defineProps({
  orientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    required: true
  }
})

interface BaseMenuItem {
  label: string
  to?: string
  icon?: string
  description?: string
  image?: { src: string; alt?: string }
  badge?: string
}

interface MenuGroup extends BaseMenuItem {
  slot?: 'solutions' | 'features' | 'resources' | 'about'
  children?: BaseMenuItem[]
  class?: string
  badge?: string
}

const hoveredItem = ref<BaseMenuItem | null>(null)
const lastHoveredItem = ref<BaseMenuItem | null>(null)
const hoveredSolutionLabel = ref<string | null>(null)
const openStates = reactive<Record<string, boolean>>({})

watch(hoveredItem, (val) => {
  if (val) {
    lastHoveredItem.value = val
  }
})

function resetDescription() {
  hoveredItem.value = null
  lastHoveredItem.value = null
}

function closeAll() {
  for (const key in openStates) openStates[key] = false
  resetDescription()
}

function handleNavigate() {
  closeAll()
}

watch(
  () => route.fullPath,
  () => {
    closeAll()
  }
)

const anyOpen = computed(() => Object.values(openStates).some(Boolean))
watch(anyOpen, (isOpen, wasOpen) => {
  if (!isOpen && wasOpen) {
    resetDescription()
  }
})

const items = computed<MenuGroup[]>(() => [
  {
    label: t('ui.navigation.main.solutions'),
    class: 'font-bold',
    slot: 'solutions' as const,
    children: [
      {
        label: t('ui.navigation.solutions.forJudges'),
        description: t('ui.navigation.solutions.forJudgesDesc'),
        to: localePath('/solutions/judges'),
        image: {
          src: '/images/features/solutions/judge.png',
          alt: 'AI Assistant for Judges'
        },
        icon: 'i-lucide-scale'
      },
      {
        label: t('ui.navigation.solutions.forLawyers'),
        description: t('ui.navigation.solutions.forLawyersDesc'),
        to: localePath('/solutions/lawyers'),
        image: {
          src: '/images/features/solutions/lawyer.png',
          alt: 'AI Assistant for Lawyers'
        },
        icon: 'i-lucide-briefcase'
      },
      {
        label: t('ui.navigation.solutions.forResearchers'),
        description: t('ui.navigation.solutions.forResearchersDesc'),
        icon: 'i-lucide-book-open',
        to: localePath('/solutions/researchers')
      },
      {
        label: t('ui.navigation.solutions.forCitizens'),
        description: t('ui.navigation.solutions.forCitizensDesc'),
        icon: 'i-lucide-users',
        to: localePath('/solutions/citizens')
      },
      {
        label: t('ui.navigation.solutions.enterprise'),
        icon: 'i-lucide-building-2',
        to: localePath('/enterprise')
      }
    ]
  },
  {
    label: t('ui.navigation.main.features'),
    class: 'font-bold',
    slot: 'features' as const,
    children: [
      {
        label: t('ui.navigation.features.crossJurisdictional'),
        icon: 'i-lucide-globe',
        to: localePath('/features/cross-jurisdictional')
      },
      {
        label: t('ui.navigation.features.statisticalAnalytics'),
        icon: 'i-lucide-chart-bar',
        to: localePath('/features/statistical-analytics'),
        badge: 'Unique'
      },
      {
        label: t('ui.navigation.features.caseSummarization'),
        icon: 'i-lucide-file-text',
        to: localePath('/features/case-summarization')
      },
      {
        label: t('ui.navigation.features.precedentMapping'),
        icon: 'i-lucide-network',
        to: localePath('/features/precedent-mapping')
      },
      {
        label: t('ui.navigation.features.seeAll'),
        icon: 'i-lucide-arrow-right',
        to: localePath('/features')
      }
    ]
  },
  {
    label: t('ui.navigation.main.pricing'),
    class: 'font-bold',
    to: localePath('/pricing')
  },
  {
    label: t('ui.navigation.main.resources'),
    class: 'font-bold',
    slot: 'resources' as const,
    children: [
      {
        label: t('ui.navigation.resources.documentation'),
        to: localePath('/docs'),
        icon: 'i-lucide-file-text',
      },
      {
        label: t('ui.navigation.resources.caseStudies'),
        to: localePath('/case-studies'),
        icon: 'i-lucide-lightbulb',
      },
      {
        label: t('ui.navigation.resources.blog'),
        to: localePath('/blog'),
        icon: 'i-lucide-newspaper',
      }
    ]
  },
  {
    label: t('ui.navigation.main.about'),
    class: 'font-bold',
    slot: 'about' as const,
    children: [
      {
        label: t('ui.navigation.about.partners'),
        to: localePath('/partners'),
        icon: 'i-lucide-handshake',
      },
      {
        label: t('ui.navigation.about.aboutLexora'),
        to: localePath('/about'),
        icon: 'i-lucide-info',
      },
      {
        label: t('ui.navigation.about.contact'),
        to: localePath('/contact'),
        icon: 'i-lucide-phone',
      }
    ]
  }
])
</script>
