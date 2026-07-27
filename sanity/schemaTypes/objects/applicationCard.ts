import { defineType, defineField } from "sanity";

export const applicationCard = defineType({
  name: "applicationCard",
  title: "Application Card",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (R) => R.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 3, validation: (R) => R.required() }),
    defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true }, fields: [
      { name: "externalUrl", type: "url", title: "Or paste an image URL" },
    ], validation: (R) => R.required() }),
  ],
  preview: {
    select: { title: "title" },
  },
});
