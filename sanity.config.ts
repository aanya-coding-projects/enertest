import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "enertest",
  title: "EnerTest Solutions",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "1tsozi8b",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",   // ← ADD THIS LINE
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Products")
              .child(
                S.documentTypeList("product")
                  .title("All Products")
                  .defaultOrdering([{ field: "name", direction: "asc" }])
              ),
            S.divider(),
            S.listItem()
              .title("Categories")
              .child(
                S.documentTypeList("category")
                  .title("Categories")
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});