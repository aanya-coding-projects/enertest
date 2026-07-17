import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section", default: true },
    { name: "capabilities", title: "Capabilities Section" },
  ],
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      group: "hero",
      initialValue: "Battery Testing & Manufacturing Solutions",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
      group: "hero",
      initialValue: "We provide installations",
    }),
    defineField({
      name: "capabilitiesTag",
      title: "Section Tag",
      type: "string",
      group: "capabilities",
      initialValue: "CAPABILITIES",
    }),
    defineField({
      name: "capabilitiesHeadline",
      title: "Headline",
      type: "string",
      group: "capabilities",
      initialValue: "From Cells to Complete Energy Systems. Engineered, Installed, Optimized.",
    }),
    defineField({
      name: "capabilitiesSubheadline",
      title: "Subheadline",
      type: "string",
      group: "capabilities",
      initialValue: "Reliable engineering, automation, and integration.",
    }),
    defineField({
      name: "solutionCategories",
      title: "Solution Categories",
      type: "array",
      group: "capabilities",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "image", type: "image", title: "Image" },
            { name: "isSpecial", type: "boolean", title: "Special (links to Request a Quote)?", initialValue: false },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page Content" };
    },
  },
});
