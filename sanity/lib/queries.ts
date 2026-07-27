import { groq } from "next-sanity";

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
