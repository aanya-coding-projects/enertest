import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "customer",
      title: "Customer Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "customer" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Auburn Hills, Michigan"',
    }),
    defineField({
      name: "logo",
      title: "Customer Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Card Summary (teaser text)",
      type: "text",
      rows: 3,
      description: "Shown on the case-study listing/preview card",
    }),
    defineField({
      name: "storyTitle",
      title: "Story Title",
      type: "string",
    }),
    defineField({
      name: "equipment",
      title: "Equipment Delivered",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "services",
      title: "Services Provided",
      type: "string",
    }),
    defineField({
      name: "story",
      title: "Full Story (one paragraph per entry)",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "customer", subtitle: "location", media: "logo" },
  },
});
