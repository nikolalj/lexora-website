<template>
  <SharedSection
    :variant="props.variant"
    :title="config.title"
    :description="config.description"
    :heading-level="props.headingLevel"
  >
    <UIAppear direction="none">
      <div class="flex justify-center">
        <UPricingPlans
          class="max-w-5xl"
          :ui="{
            highlight: 'ring-2 ring-secondary-500 dark:ring-secondary-400'
          }"
        >
          <UPricingPlan
            v-for="(plan, index) in config.plans"
            :key="index"
            :title="plan.title"
            :description="plan.description"
            :price="plan.price"
            :features="plan.features"
            :highlight="plan.highlight"
            :badge="plan.badgeConfig"
            :billing-cycle="plan.billingCycle"
            :scale="plan.scale"
            :button="plan.button"
            variant="subtle"
          />
        </UPricingPlans>
      </div>
    </UIAppear>
  </SharedSection>
</template>

<script setup lang="ts">
import type { SectionVariantType, SectionHeadingLevel } from '~/types/components'

const { tArray } = useUtils()
const { t } = useI18n()
const { track } = useTracking()

const props = defineProps({
  variant: {
    type: String as PropType<SectionVariantType>,
    default: undefined,
  },
  headingLevel: {
    type: String as PropType<SectionHeadingLevel>,
    default: 'h2'
  }
})

const config = computed(() => ({
  title: t('pages.pricing.title'),
  description: t('pages.pricing.description'),
  plans: [
    {
      title: t('pages.pricing.plans.free.title'),
      description: t('pages.pricing.plans.free.description'),
      price: t('pages.pricing.plans.free.price'),
      billingCycle: t('pages.pricing.plans.free.billingCycle'),
      features: tArray('pages.pricing.plans.free.features'),
      button: {
        label: t('pages.pricing.plans.free.button'),
        color: 'secondary' as const,
        class: 'text-white',
        onClick: () => handlePricingPlanChoice('Legal AI', 'Free Trial')
      }
    },
    {
      title: t('pages.pricing.plans.professional.title'),
      description: t('pages.pricing.plans.professional.description'),
      price: t('pages.pricing.plans.professional.price'),
      billingCycle: t('pages.pricing.plans.professional.billingCycle'),
      features: tArray('pages.pricing.plans.professional.features'),
      highlight: true,
      scale: true,
      badgeConfig: {
        label: t('pages.pricing.plans.professional.badge'),
        color: 'secondary' as const
      },
      button: {
        label: t('pages.pricing.plans.professional.button'),
        color: 'secondary' as const,
        class: 'text-white',
        onClick: () => handlePricingPlanChoice('Legal AI', 'Professional')
      }
    },
    {
      title: t('pages.pricing.plans.enterprise.title'),
      description: t('pages.pricing.plans.enterprise.description'),
      price: t('pages.pricing.plans.enterprise.price'),
      billingCycle: t('pages.pricing.plans.enterprise.billingCycle'),
      features: tArray('pages.pricing.plans.enterprise.features'),
      button: {
        label: t('pages.pricing.plans.enterprise.button'),
        color: 'secondary' as const,
        class: 'text-white',
        onClick: () => handlePricingPlanChoice('Legal AI', 'Enterprise')
      }
    }
  ]
}))

const handlePricingPlanChoice = (category: string, label: string) => {
  track('pricing', {
    category,
    label
  })
}
</script>
