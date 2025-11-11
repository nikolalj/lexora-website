import { z, defineContentConfig, defineCollection } from '@nuxt/content'

// Common schema for blog posts
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string(),
  readTime: z.string(),
  image: z.string().optional(),
  category: z.string(),
  featured: z.boolean().default(false)
})

export default defineContentConfig({
  collections: {
    // English
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: ''
      },
      schema: blogSchema
    }),

    // Montenegro
    content_me: defineCollection({
      type: 'page',
      source: {
        include: 'me/**',
        prefix: ''
      },
      schema: blogSchema
    }),
  }
})
