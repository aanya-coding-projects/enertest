import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import type { SanityAboutPage } from "@/sanity/lib/types";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  const data = await client.fetch<SanityAboutPage | null>(ABOUT_PAGE_QUERY);
  return <AboutClient data={data} />;
}
