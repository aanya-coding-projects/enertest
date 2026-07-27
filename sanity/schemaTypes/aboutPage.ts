import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "whoWeAre", title: "Who We Are" },
    { name: "painPoints", title: "Pain Points & Value" },
    { name: "strengths", title: "Core Strengths" },
    { name: "process", title: "Process Steps" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({ name: "heroTitle", type: "text", title: "Hero Title", rows: 2, group: "hero" }),
    defineField({ name: "heroSubtitle", type: "string", title: "Hero Subtitle", group: "hero" }),
    defineField({ name: "heroVideoUrl", type: "url", title: "Hero Background Video URL", description: "Paste a public video URL (e.g. /Videos/Aboutt.mp4 or https://...)", group: "hero" }),

    defineField({ name: "whoWeAreTitle", type: "string", title: "Section Title", group: "whoWeAre" }),
    defineField({
      name: "whoWeAreBody",
      type: "array",
      title: "Body Paragraphs (one per array item)",
      group: "whoWeAre",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      group: "whoWeAre",
      of: [{
        type: "object",
        name: "stat",
        fields: [
          { name: "num", type: "string", title: "Number (e.g. 10+)" },
          { name: "label", type: "string", title: "Label" },
        ],
        preview: { select: { title: "num", subtitle: "label" } },
      }],
    }),

    defineField({ name: "painPointsTitle", type: "string", title: "Pain Points Section Title", group: "painPoints" }),
    defineField({
      name: "painPoints",
      type: "array",
      title: "Pain Points",
      group: "painPoints",
      of: [{ type: "string" }],
    }),
    defineField({ name: "valuePropTitle", type: "string", title: "Value Proposition Section Title", group: "painPoints" }),
    defineField({
      name: "valuePoints",
      type: "array",
      title: "Value Points",
      group: "painPoints",
      of: [{ type: "string" }],
    }),

    defineField({ name: "strengthsTitle", type: "string", title: "Section Title", group: "strengths" }),
    defineField({
      name: "strengths",
      type: "array",
      title: "Strength Cards",
      group: "strengths",
      of: [{
        type: "object",
        name: "strengthCard",
        fields: [
          { name: "title", type: "string", title: "Card Title" },
          { name: "items", type: "array", title: "Bullet Points", of: [{ type: "string" }] },
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    defineField({ name: "processTitle", type: "string", title: "Section Title", group: "process" }),
    defineField({
      name: "processSteps",
      type: "array",
      title: "Process Steps",
      group: "process",
      of: [{
        type: "object",
        name: "processStep",
        fields: [
          { name: "num", type: "string", title: "Step Number (e.g. 01)" },
          { name: "title", type: "string", title: "Step Title" },
          { name: "desc", type: "text", title: "Description", rows: 3 },
        ],
        preview: { select: { title: "num", subtitle: "title" } },
      }],
    }),

    defineField({ name: "ctaTitle", type: "string", title: "CTA Title", group: "cta" }),
    defineField({ name: "ctaSub", type: "text", title: "CTA Subtitle", rows: 2, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
