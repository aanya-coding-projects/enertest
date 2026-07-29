import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY, CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import type { SanityHomePage, SanityCaseStudy } from "@/sanity/lib/types";
import HomeClient from "./HomeClient";

export default async function Home() {
  const [homePage, caseStudies] = await Promise.all([
    client.fetch<SanityHomePage | null>(HOME_PAGE_QUERY, {}, { next: { tags: ["sanity"] } }),
    client.fetch<SanityCaseStudy[]>(CASE_STUDIES_QUERY, {}, { next: { tags: ["sanity"] } }),
  ]);

  return <HomeClient data={homePage} caseStudies={caseStudies ?? []} />;
}
