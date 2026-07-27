import { defineType, defineField } from "sanity";

export const supplement = defineType({
  name: "supplement",
  title: "Supplement Image",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", title: "Label", validation: (R) => R.required() }),
    defineField({ name: "src", type: "image", title: "Image", options: { hotspot: true }, fields: [
      { name: "externalUrl", type: "url", title: "Or paste an image URL" },
    ], validation: (R) => R.required() }),
    defineField({ name: "description", type: "text", title: "Caption", rows: 2 }),
  ],
  preview: {
    select: { title: "label", media: "src" },
  },
});
