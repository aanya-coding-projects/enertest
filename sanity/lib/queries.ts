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
        "image": image.asset->url,
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
    "image": image.asset->url,
    comingSoon,
    layout,
    "carouselImages": carouselImages[].asset->url,
    features,
    applications,
    supplements[] {
      label,
      "src": src.asset->url,
      description,
    },
    supplementLayout,
    gallery[] {
      label,
      "src": src.asset->url,
    },
    intro[] {
      heading,
      body,
      list,
      "image": image.asset->url,
      reverse,
    },
    applicationCards[] {
      title,
      description,
      "image": image.asset->url,
    },
    videoEmbedUrl,
    "specsImage": specsImage.asset->url,
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
    "image": image.asset->url,
    model,
    iestCategory,
  }
`;

// Featured products (the 3 EnerTest flagship products)
export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product" && slug.current in $slugs] {
    "slug": slug.current,
    name,
    "image": image.asset->url,
    description,
    comingSoon,
  }
`;
