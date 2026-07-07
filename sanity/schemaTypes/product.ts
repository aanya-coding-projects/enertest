import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Info", default: true },
    { name: "detail", title: "Detail Page" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // ── Basic info ──────────────────────────────────────────────────────────
    defineField({
      name: "name",
      type: "string",
      title: "Product Name",
      group: "basic",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "basic",
      options: { source: "name" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      type: "string",
      title: "Card Image URL",
      description: "URL shown on the products listing page (can be external or /Images/...)",
      group: "basic",
    }),
    defineField({
      name: "comingSoon",
      type: "boolean",
      title: "Coming Soon",
      initialValue: false,
      group: "basic",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
      rows: 3,
      group: "basic",
    }),

    // ── Layout type ─────────────────────────────────────────────────────────
    defineField({
      name: "layout",
      type: "string",
      title: "Detail Page Layout",
      group: "detail",
      options: {
        list: [
          { title: "Standard (EnerTest product)", value: "standard" },
          { title: "Advanced (tabbed — Description / Applications / Video / Specs)", value: "advanced" },
          { title: "IEST Product", value: "iest" },
        ],
        layout: "radio",
      },
    }),

    // ── Shared fields (standard + advanced + iest) ──────────────────────────
    defineField({
      name: "carouselImages",
      type: "array",
      title: "Carousel Images",
      description: "Images shown in the product image carousel",
      group: "detail",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Key Features",
      group: "detail",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applications",
      type: "array",
      title: "Applications",
      group: "detail",
      of: [{ type: "string" }],
    }),

    // ── Standard layout ──────────────────────────────────────────────────────
    defineField({
      name: "supplements",
      type: "array",
      title: "Supplement Images",
      group: "detail",
      of: [{ type: "supplement" }],
      hidden: ({ document }) => document?.layout !== "standard",
    }),
    defineField({
      name: "supplementLayout",
      type: "string",
      title: "Supplement Display Style",
      group: "detail",
      options: { list: [{ title: "Stacked", value: "stacked" }, { title: "4-column row", value: "row4" }] },
      hidden: ({ document }) => document?.layout !== "standard",
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      group: "detail",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "src", type: "string", title: "Image URL / Path" },
          ],
        },
      ],
      hidden: ({ document }) => document?.layout !== "standard",
    }),

    // ── Advanced layout ──────────────────────────────────────────────────────
    defineField({
      name: "intro",
      type: "array",
      title: "Intro Sections",
      group: "detail",
      of: [{ type: "introBlock" }],
      hidden: ({ document }) => document?.layout !== "advanced",
    }),
    defineField({
      name: "applicationCards",
      type: "array",
      title: "Application Cards",
      group: "detail",
      of: [{ type: "applicationCard" }],
      hidden: ({ document }) => document?.layout !== "advanced",
    }),
    defineField({
      name: "videoEmbedUrl",
      type: "string",
      title: "YouTube Embed URL",
      description: "e.g. https://www.youtube.com/embed/XXXXXXX",
      group: "detail",
      hidden: ({ document }) => document?.layout !== "advanced",
    }),
    defineField({
      name: "specsImage",
      type: "string",
      title: "Specs Table Image URL",
      group: "detail",
      hidden: ({ document }) => document?.layout !== "advanced",
    }),
    defineField({
      name: "downloadUrl",
      type: "string",
      title: "Datasheet / PDF Download URL",
      group: "detail",
      hidden: ({ document }) => !["advanced", "iest"].includes(document?.layout as string),
    }),

    // ── IEST fields ──────────────────────────────────────────────────────────
    defineField({
      name: "model",
      type: "string",
      title: "Model Number",
      group: "detail",
      hidden: ({ document }) => document?.layout !== "iest",
    }),
    defineField({
      name: "iestCategory",
      type: "string",
      title: "IEST Category",
      group: "detail",
      options: {
        list: ["Raw Materials", "Peripheral Equipment", "Products & Applications", "Production Line"],
      },
      hidden: ({ document }) => document?.layout !== "iest",
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      rows: 3,
      group: "seo",
    }),
  ],

  preview: {
    select: { title: "name", subtitle: "slug.current", media: "image" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `/${subtitle}` };
    },
  },
});
