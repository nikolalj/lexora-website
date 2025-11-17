export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  icon: { mode: 'svg' },
  ui: {
    colors: {
      primary: 'primary', // Teal - Maps to custom primary color in tailwind.config.ts
      secondary: 'secondary', // Gold - Maps to custom secondary color in tailwind.config.ts
      neutral: 'slate',
    }
  }
})
