import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "customer",
      type: "string",
      title: "Customer Name",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug (URL)",
      options: { source: "customer" },
      validation: (R) => R.required(),
    }),
    defineField({ name: "location", type: "string", title: "Location (City, State)" }),
    defineField({
      name: "logo",
      type: "image",
      title: "Customer Logo",
      description: "Drag & drop a logo, or paste a URL below",
      options: { hotspot: true },
      fields: [
        defineField({ name: "externalUrl", type: "url", title: "Or paste an image URL" }),
      ],
    }),
    defineField({ name: "summary", type: "text", title: "Card Summary (shown in marquee)", rows: 3 }),
    defineField({ name: "storyTitle", type: "string", title: "Story Title (shown on detail page)" }),
    defineField({
      name: "equipment",
      type: "array",
      title: "Delivered Equipment",
      of: [{ type: "string" }],
    }),
    defineField({ name: "services", type: "text", title: "Services Provided", rows: 2 }),
    defineField({
      name: "story",
      type: "array",
      title: "Story Paragraphs (one per item)",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "highlights",
      type: "array",
      title: "Project Highlights",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display Order",
      description: "Lower numbers appear first in the marquee",
    }),
  ],
  preview: {
    select: { title: "customer", subtitle: "location", media: "logo" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});
