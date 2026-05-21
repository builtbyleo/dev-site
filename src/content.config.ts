import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { string } from "astro:schema";

const baseContentSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
});

const portfolioItemSchema = baseContentSchema.extend({
  organization: z.string(),
  endDate: z.union([z.coerce.date(), z.literal("present")]),
  technology: z.array(string()),
  link: z.url(),
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
  schema: portfolioItemSchema,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: portfolioItemSchema,
});

export const collections = { blog, work, projects };
