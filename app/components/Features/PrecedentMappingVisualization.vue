<template>
  <SharedSection>
    <div class="text-center mb-16">
      <UIAppear>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('pages.features.precedentMapping.visualization.title') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{{ t('pages.features.precedentMapping.visualization.subtitle') }}</p>
      </UIAppear>
    </div>

    <!-- Interactive Network Visualization -->
    <UIAppear direction="up" :delay="100">
      <div class="relative max-w-5xl mx-auto">
        <!-- Central case node -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A98B1F] p-6 shadow-2xl flex flex-col items-center justify-center text-center">
            <UIcon name="i-lucide-scale" class="w-12 h-12 text-white mb-3" />
            <p class="text-white font-bold text-lg mb-1">{{ t('pages.features.precedentMapping.visualization.central.title') }}</p>
            <p class="text-white/80 text-xs">{{ t('pages.features.precedentMapping.visualization.central.subtitle') }}</p>
          </div>
        </div>

        <!-- Surrounding precedent nodes -->
        <div class="relative h-[600px]">
          <!-- Top precedent -->
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-primary-500" />
                <span class="text-xs font-semibold text-primary-600 dark:text-primary-400">2020</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node1') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">95%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute top-full left-1/2 w-0.5 h-20 bg-gradient-to-b from-primary-300 to-transparent"></div>
          </div>

          <!-- Top Right precedent -->
          <div class="absolute top-20 right-8">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-teal-500" />
                <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">2019</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node2') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">88%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute top-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-teal-300 to-transparent"></div>
          </div>

          <!-- Right precedent -->
          <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-[#D4AF37]" />
                <span class="text-xs font-semibold text-[#A98B1F]">2021</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node3') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">72%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute top-1/2 right-full w-32 h-0.5 bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
          </div>

          <!-- Bottom Right precedent -->
          <div class="absolute bottom-20 right-8">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-primary-500" />
                <span class="text-xs font-semibold text-primary-600 dark:text-primary-400">2018</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node4') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">91%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute bottom-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-primary-300 to-transparent"></div>
          </div>

          <!-- Bottom precedent -->
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-teal-500" />
                <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">2022</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node5') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">85%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-teal-300 to-transparent"></div>
          </div>

          <!-- Bottom Left precedent -->
          <div class="absolute bottom-20 left-8">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-[#D4AF37]" />
                <span class="text-xs font-semibold text-[#A98B1F]">2017</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node6') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">89%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute bottom-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
          </div>

          <!-- Left precedent -->
          <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-primary-500" />
                <span class="text-xs font-semibold text-primary-600 dark:text-primary-400">2016</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node7') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">78%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute top-1/2 left-full w-32 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
          </div>

          <!-- Top Left precedent -->
          <div class="absolute top-20 left-8">
            <div class="w-40 h-40 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-teal-500" />
                <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">2015</span>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-3">{{ t('pages.features.precedentMapping.visualization.nodes.node8') }}</p>
              <div class="mt-2 flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">93%</span>
              </div>
            </div>
            <!-- Connection line to center -->
            <div class="absolute top-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-teal-300 to-transparent"></div>
          </div>
        </div>

        <!-- Legend -->
        <div class="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.visualization.legend.high') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.visualization.legend.medium') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <span class="text-gray-600 dark:text-gray-300">{{ t('pages.features.precedentMapping.visualization.legend.low') }}</span>
          </div>
        </div>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
