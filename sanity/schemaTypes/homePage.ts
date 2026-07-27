import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "valueProp", title: "Value Proposition" },
    { name: "capabilities", title: "Capabilities" },
  ],
  fields: [
    defineField({ name: "heroTitle", type: "string", title: "Hero Title", group: "hero" }),
    defineField({ name: "heroSubtitle", type: "text", title: "Hero Subtitle", rows: 2, group: "hero" }),

    defineField({ name: "valuePropTag", type: "string", title: "Tag Label", group: "valueProp" }),
    defineField({ name: "valuePropHeadline", type: "text", title: "Headline", rows: 2, group: "valueProp" }),
    defineField({ name: "valuePropSubtext", type: "text", title: "Subtext", rows: 3, group: "valueProp" }),
    defineField({
      name: "valuePropSteps",
      type: "array",
      title: "Stepper Items",
      group: "valueProp",
      of: [{
        type: "object",
        name: "step",
        fields: [
          { name: "highlight", type: "string", title: "Highlighted Text" },
          { name: "rest", type: "text", title: "Rest of sentence", rows: 2 },
        ],
        preview: { select: { title: "highlight" } },
      }],
    }),

    defineField({ name: "capabilitiesTag", type: "string", title: "Tag Label", group: "capabilities" }),
    defineField({ name: "capabilitiesHeadline", type: "text", title: "Headline", rows: 2, group: "capabilities" }),
    defineField({ name: "capabilitiesSubheadline", type: "string", title: "Subheadline", group: "capabilities" }),
    defineField({
      name: "solutions",
      type: "array",
      title: "Solution Categories",
      group: "capabilities",
      of: [{
        type: "object",
        name: "solution",
        fields: [
          { name: "title", type: "string", title: "Title" },
          { name: "description", type: "text", title: "Description", rows: 3 },
          {
            name: "image",
            type: "image",
            title: "Image",
            description: "Drag & drop or paste a URL below",
            options: { hotspot: true },
            fields: [{ name: "externalUrl", type: "url", title: "Or paste an image URL" }],
          },
          { name: "isSpecial", type: "boolean", title: 'Link to "Request a Quote" (instead of Products)', initialValue: false },
        ],
        preview: { select: { title: "title", media: "image" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
