export type SanityProduct = {
  slug: string;
  name: string;
  description?: string | null;
  image?: string | null;
  comingSoon?: boolean;
  layout?: "standard" | "advanced" | "iest" | null;
  // shared
  carouselImages?: string[];
  features?: string[];
  applications?: string[];
  // standard
  supplements?: { label: string; src: string; description?: string | null }[];
  supplementLayout?: "stacked" | "row4" | null;
  gallery?: { label: string; src: string }[];
  // advanced
  intro?: { heading: string; body?: string | null; list?: string[] | null; image: string; reverse?: boolean }[];
  applicationCards?: { title: string; description: string; image: string }[];
  videoEmbedUrl?: string | null;
  specsImage?: string | null;
  downloadUrl?: string | null;
  // iest
  model?: string | null;
  iestCategory?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export type SanityCategory = {
  categoryId: string;
  title: string;
  description: string;
  subcategories: {
    name: string;
    products: {
      slug: string;
      name: string;
      description?: string | null;
      image?: string | null;
      comingSoon?: boolean;
    }[];
  }[];
};

export type SearchResult = {
  slug: string;
  name: string;
  image?: string | null;
  model?: string | null;
  iestCategory?: string | null;
  categoryTitle?: string;
};
