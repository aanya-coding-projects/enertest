import { defineType, defineField } from "sanity";

export const introBlock = defineType({
  name: "introBlock",
  title: "Intro Block",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading", validation: (R) => R.required() }),
    defineField({ name: "body", type: "text", title: "Body Text", rows: 4 }),
    defineField({ name: "list", type: "array", title: "Bullet List", of: [{ type: "string" }] }),
    defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true }, fields: [
      { name: "externalUrl", type: "url", title: "Or paste an image URL" },
    ], validation: (R) => R.required() }),
    defineField({ name: "reverse", type: "boolean", title: "Image on left", initialValue: false }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
