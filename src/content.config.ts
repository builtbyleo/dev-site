import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { string } from "astro:schema";

const baseContentSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: baseContentSchema.extend({
    description: z.string(),
    readTime: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: baseContentSchema.extend({
    description: z.string(),
    company: z.string(),
    endDate: z.coerce.date(),
    technology: z.array(string()),
    link: z.url(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: baseContentSchema.extend({}),
});

export const collections = { blog, work, projects };
