import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export const blogSchema = z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    path: z.string().optional() // path is injected by Nuxt Content, not required in frontmatter
});

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/**/*.md',
            schema: blogSchema,
            type: 'page',
        })
    }
});