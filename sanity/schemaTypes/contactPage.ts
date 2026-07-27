import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", type: "string", title: "Page Title" }),
    defineField({ name: "heroSubtitle", type: "text", title: "Page Subtitle", rows: 2 }),
    defineField({ name: "addressLine1", type: "string", title: "Address Line 1 (street)" }),
    defineField({ name: "addressLine2", type: "string", title: "Address Line 2 (city, state, zip)" }),
    defineField({ name: "email", type: "string", title: "Contact Email" }),
    defineField({ name: "phone", type: "string", title: "Phone Number" }),
    defineField({
      name: "expectSteps",
      type: "array",
      title: "What to Expect Steps",
      of: [{
        type: "object",
        name: "expectStep",
        fields: [
          { name: "step", type: "string", title: "Step Label (e.g. 01)" },
          { name: "text", type: "text", title: "Step Description", rows: 2 },
        ],
        preview: { select: { title: "step", subtitle: "text" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
