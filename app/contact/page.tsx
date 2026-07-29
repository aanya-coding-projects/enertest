import { client } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import type { SanityContactPage } from "@/sanity/lib/types";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const data = await client.fetch<SanityContactPage | null>(CONTACT_PAGE_QUERY, {}, { next: { tags: ["sanity"] } });
  return <ContactClient data={data} />;
}
