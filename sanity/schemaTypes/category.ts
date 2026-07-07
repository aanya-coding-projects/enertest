import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "categoryId",
      type: "string",
      title: "ID (used in URL hash)",
      description: 'e.g. "test-system-solutions". Must be unique, no spaces.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Category Title",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Category Description",
      rows: 3,
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display Order",
      description: "Lower numbers appear first",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subcategories",
      type: "array",
      title: "Subcategories",
      of: [
        {
          type: "object",
          name: "subcategory",
          title: "Subcategory",
          fields: [
            defineField({ name: "name", type: "string", title: "Subcategory Name", validation: (R) => R.required() }),
            defineField({
              name: "products",
              type: "array",
              title: "Products",
              of: [{ type: "reference", to: [{ type: "product" }] }],
            }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
    }),
  ],

  preview: {
    select: { title: "title", subtitle: "order" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Order: ${subtitle}` };
    },
  },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
