<template>
  <SharedSection>
    <div class="mb-16 text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t(`pages.solutions.${solution}.features.title`) }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ t(`pages.solutions.${solution}.features.description`) }}
      </p>
    </div>

    <UIAppear direction="up">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div
          v-for="(feature, index) in features"
          :key="`feat-${index}`"
          class="group p-6 text-center"
        >
          <div class="flex justify-center mb-4">
            <div
              class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-600/10 text-primary-600 group-hover:bg-[#A98B1F] group-hover:text-white group-hover:scale-110 transition-all duration-300"
            >
              <UIcon :name="feature.icon" class="h-8 w-8" />
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {{ feature.title }}
          </h3>

          <p class="text-gray-600 dark:text-gray-300">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </UIAppear>

    <!-- CTA Buttons -->
    <div class="flex gap-3 justify-center mt-4 lg:mt-0">
      <AppCTAButton
        variant="primary"
        size="lg"
        section="footer"
        custom-class="justify-between"
      />
      <AppCTAButton
        variant="secondary"
        size="lg"
        section="footer"
        custom-class="justify-between"
      />
    </div>
  </SharedSection>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Feature {
  title: string
  description: string
  icon: string
}

const props = defineProps({
  solution: {
    type: String,
    required: true
  },
  showCta: {
    type: Boolean,
    default: true
  }
})

const features = computed<Feature[]>(() => {
  const featuresList: Feature[] = []
  let itemIndex = 1

  while (true) {
    const key = `pages.solutions.${props.solution}.features.feat${itemIndex}`
    const title = t(`${key}.title`, '')

    if (!title) break

    featuresList.push({
      title,
      description: t(`${key}.description`, ''),
      icon: t(`${key}.icon`, 'i-heroicons-check-circle')
    })

    itemIndex++
  }

  return featuresList
})
</script>
