import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { string } from "astro:schema";

const baseContentSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
});

const portfolioItemSchema = baseContentSchema.extend({
  endDate: z.union([z.coerce.date(), z.literal("present")]),
  technology: z.array(string()),
  link: z.url(),
});

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: baseContentSchema.extend({
    description: z.string(),
    readTime: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: portfolioItemSchema.extend({
    organization: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: portfolioItemSchema.extend({
    organization: z.string().optional(),
  }),
});

export const collections = { notes, work, projects };
