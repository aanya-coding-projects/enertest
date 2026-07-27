export type SanityHomePage = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  valuePropTag?: string | null;
  valuePropHeadline?: string | null;
  valuePropSubtext?: string | null;
  valuePropSteps?: { highlight: string; rest: string }[] | null;
  capabilitiesTag?: string | null;
  capabilitiesHeadline?: string | null;
  capabilitiesSubheadline?: string | null;
  solutions?: { _key: string; title: string; description: string; image?: string | null; isSpecial?: boolean }[] | null;
};

export type SanityAboutPage = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  heroVideoUrl?: string | null;
  whoWeAreTitle?: string | null;
  whoWeAreBody?: string[] | null;
  stats?: { num: string; label: string }[] | null;
  painPointsTitle?: string | null;
  painPoints?: string[] | null;
  valuePropTitle?: string | null;
  valuePoints?: string[] | null;
  strengthsTitle?: string | null;
  strengths?: { title: string; items: string[] }[] | null;
  processTitle?: string | null;
  processSteps?: { num: string; title: string; desc: string }[] | null;
  ctaTitle?: string | null;
  ctaSub?: string | null;
};

export type SanityContactPage = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  email?: string | null;
  phone?: string | null;
  expectSteps?: { step: string; text: string }[] | null;
};

export type SanityCaseStudy = {
  slug: string;
  customer: string;
  location?: string | null;
  logo?: string | null;
  summary?: string | null;
  storyTitle?: string | null;
  equipment?: string[] | null;
  services?: string | null;
  story?: string[] | null;
  highlights?: string[] | null;
};

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
