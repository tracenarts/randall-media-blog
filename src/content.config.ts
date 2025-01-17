import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader:glob({ pattern: '**/[^_]*.md', base: "./src/posts" }),
    schema: z.object({
        title: z.string(),
        posted: z.date(),
        description: z.string().optional(),
        image: z.string().optional(),
        bsky: z.string().optional(),
    }),
})

export const collections = {blog}