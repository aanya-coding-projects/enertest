import { groq } from "next-sanity";

// ── Page singleton queries ────────────────────────────────────────────────────

export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage" && _id == "homePage"][0] {
    heroTitle,
    heroSubtitle,
    valuePropTag,
    valuePropHeadline,
    valuePropSubtext,
    valuePropSteps[] { highlight, rest },
    capabilitiesTag,
    capabilitiesHeadline,
    capabilitiesSubheadline,
    solutions[] {
      _key,
      title,
      description,
      "image": coalesce(image.asset->url, image.externalUrl),
      isSpecial,
    },
  }
`;

export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0] {
    heroTitle,
    heroSubtitle,
    heroVideoUrl,
    whoWeAreTitle,
    whoWeAreBody,
    stats[] { num, label },
    painPointsTitle,
    painPoints,
    valuePropTitle,
    valuePoints,
    strengthsTitle,
    strengths[] { title, items },
    processTitle,
    processSteps[] { num, title, desc },
    ctaTitle,
    ctaSub,
  }
`;

export const CONTACT_PAGE_QUERY = groq`
  *[_type == "contactPage" && _id == "contactPage"][0] {
    heroTitle,
    heroSubtitle,
    addressLine1,
    addressLine2,
    email,
    phone,
    expectSteps[] { step, text },
  }
`;

// ── Case Studies ──────────────────────────────────────────────────────────────

export const CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(order asc, customer asc) {
    "slug": slug.current,
    customer,
    location,
    "logo": coalesce(logo.asset->url, logo.externalUrl),
    summary,
    storyTitle,
  }
`;

export const CASE_STUDY_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    customer,
    location,
    "logo": coalesce(logo.asset->url, logo.externalUrl),
    summary,
    storyTitle,
    equipment,
    services,
    story,
    highlights,
  }
`;

export const ALL_CASE_STUDY_SLUGS_QUERY = groq`
  *[_type == "caseStudy" && defined(slug.current)][].slug.current
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(order asc) {
    categoryId,
    title,
    description,
    subcategories[] {
      name,
      products[]-> {
        "slug": slug.current,
        name,
        description,
        comingSoon,
        "image": coalesce(image.asset->url, image.externalUrl),
        layout,
      }
    }
  }
`;

export const PRODUCT_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0] {
    "slug": slug.current,
    name,
    description,
    "image": coalesce(image.asset->url, image.externalUrl),
    comingSoon,
    layout,
    "carouselImages": carouselImages[]{"url": coalesce(asset->url, externalUrl)}.url,
    features,
    applications,
    supplements[] {
      label,
      "src": coalesce(src.asset->url, src.externalUrl),
      description,
    },
    supplementLayout,
    gallery[] {
      label,
      "src": coalesce(src.asset->url, src.externalUrl),
    },
    intro[] {
      heading,
      body,
      list,
      "image": coalesce(image.asset->url, image.externalUrl),
      reverse,
    },
    applicationCards[] {
      title,
      description,
      "image": coalesce(image.asset->url, image.externalUrl),
    },
    videoEmbedUrl,
    "specsImage": coalesce(specsImage.asset->url, specsImage.externalUrl),
    downloadUrl,
    model,
    iestCategory,
    seoTitle,
    seoDescription,
  }
`;

export const ALL_PRODUCT_SLUGS_QUERY = groq`
  *[_type == "product" && defined(slug.current)][].slug.current
`;

export const PRODUCT_CATEGORY_QUERY = groq`
  *[_type == "category" && references(*[_type=="product" && slug.current==$slug]._id)][0] {
    categoryId,
    title,
  }
`;

// Search: all non-comingSoon products that have a detail page
// (engineering-services stubs have no features — filter them out)
export const SEARCHABLE_PRODUCTS_QUERY = groq`
  *[_type == "product" && comingSoon != true && count(features) > 0] {
    "slug": slug.current,
    name,
    "image": coalesce(image.asset->url, image.externalUrl),
    model,
    iestCategory,
  }
`;

// Featured products (the 3 EnerTest flagship products)
export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product" && slug.current in $slugs] {
    "slug": slug.current,
    name,
    "image": coalesce(image.asset->url, image.externalUrl),
    description,
    comingSoon,
  }
`;
