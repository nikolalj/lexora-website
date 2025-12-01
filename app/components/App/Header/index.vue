<template>
  <UHeader
    mode="slideover"
    class="fixed top-0 w-full h-auto transition-[background-color,box-shadow,color] duration-1000 border-none !backdrop-blur-none"
    :class="[
      !isHeaderSolid ? 'bg-transparent' : 'bg-[rgba(71,171,170,0.95)]',
      isHeaderSolid && 'backdrop-blur'
    ]"
    :ui="{
      container: 'min-h-16'
    }"
    :toggle="{
      class: 'text-white hover:bg-white/10'
    }"
  >
    <template #top>
      <div
        class="overflow-hidden transition-[height,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-[height,opacity]"
        :class="isTopBarCollapsed ? 'h-0 opacity-0' : 'h-10 opacity-100'"
        :aria-hidden="isTopBarCollapsed ? 'true' : 'false'"
        :inert="isTopBarCollapsed"
      >
        <AppHeaderLocaleSuggestionBanner />

        <UContainer class="h-full flex items-center text-sm transition-colors duration-500">
          <div class="flex items-center gap-4 flex-1">
            <a :href="`mailto:${t('data.company.contact.email')}@${t('data.company.domain')}`" class="flex items-center gap-1 text-white hover:text-[var(--ui-accent-teal)] transition-colors">
              <Icon name="i-lucide-mail" class="w-4 h-4" />
              <span class="hidden md:inline">{{ t('data.company.contact.email') }}@{{ t('data.company.domain') }}</span>
            </a>
            <a :href="`tel:${t('data.company.contact.phone')}`" class="flex items-center gap-1 text-white hover:text-[var(--ui-accent-teal)] transition-colors">
              <Icon name="i-lucide-phone" class="w-4 h-4" />
              <span>{{ t('data.company.contact.phone') }}</span>
            </a>

            <AppHeaderBreadcrumbs class="hidden lg:block" />
          </div>

          <div class="flex gap-1">
            <AppHeaderCountrySelector />
            <UColorModeButton class="dark" />
          </div>
        </UContainer>
      </div>
    </template>

    <template #left>
      <ULink :to="localePath('/')" class="flex items-center gap-2 shrink-0">
        <NuxtImg
          src="/images/branding/logo-dark.svg"
          width="38"
          height="38"
          alt="Lexora logo"
          class="sm:hidden"
        />
        <NuxtImg
          src="/images/branding/logo-full-horizontal-dark.svg"
          width="140"
          height="23"
          alt="Lexora logo"
          class="hidden sm:block"
        />
      </ULink>
      <AppHeaderMenu orientation="horizontal" class="hidden lg:flex lg:ml-12" />
    </template>

    <template #content>
      <div class="flex items-center justify-between p-4 border-b border-[var(--ui-border)] dark:border-[var(--ui-border)]">
        <ULink :to="localePath('/')" class="flex items-center gap-2 shrink-0">
          <div class="sm:hidden">
            <UColorModeImage
              light="/images/branding/logo-light.svg"
              dark="/images/branding/logo-dark.svg"
              width="38"
              height="38"
              alt="Lexora logo"
            />
          </div>
          <div class="hidden sm:block">
            <UColorModeImage
              light="/images/branding/logo-full-horizontal-light.svg"
              dark="/images/branding/logo-full-horizontal-dark.svg"
              width="140"
              height="23"
              alt="Lexora logo"
            />
          </div>
        </ULink>
        <div class="flex gap-2">
          <AppCTAButton variant="secondary" section="header" no-icon />
          <AppCTAButton variant="primary" section="header" no-icon />
        </div>
      </div>
      <div class="p-4">
        <AppHeaderMenu orientation="vertical" />
      </div>
    </template>

    <template #right>
      <AppCTAButton variant="secondary" section="header" class="dark" no-icon />
      <AppCTAButton variant="primary" section="header" class="dark bg-white" no-icon />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { y } = useWindowScroll()
const localePath = useLocalePath()
const route = useRoute()

const ENTER_SOLID = 56
const EXIT_SOLID = 8

const isHeaderSolid = ref(!isRouteWithTransparentHeader(route.path))
const isTopBarCollapsed = ref(false)

watch(() => route.path, (newPath) => {
  isHeaderSolid.value = !isRouteWithTransparentHeader(newPath)
})

watch(
  y,
  () => {
    const cur = y.value

    if (!isHeaderSolid.value && cur > ENTER_SOLID) {
      isHeaderSolid.value = true
    } else if (isHeaderSolid.value && cur < EXIT_SOLID && isRouteWithTransparentHeader(route.path)) {
      isHeaderSolid.value = false
    }

    if (!isTopBarCollapsed.value && cur > ENTER_SOLID)
      isTopBarCollapsed.value = true
    else if (isTopBarCollapsed.value && cur < EXIT_SOLID)
      isTopBarCollapsed.value = false
  },
  { immediate: true }
)

function isRouteWithTransparentHeader(path: string) {
  const removeTrailingSlash = (str: string) => str.replace(/\/$/, '')

  const routesWithTransparentHeader = [
    '/',
    '/solutions/judges',
    '/solutions/lawyers',
    '/solutions/researchers',
    '/demo',
    '/features/cross-jurisdictional',
    '/features/statistical-analytics',
    '/features/case-summarization',
    '/features/precedent-mapping',
    '/contact',
  ]

  return routesWithTransparentHeader.some(p => removeTrailingSlash(localePath(p)) === removeTrailingSlash(path))
}
</script>
