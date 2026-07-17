import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "iestbattery.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },

  async redirects() {
    return [
      // --- Core pages: 1:1 matches ---
      { source: "/about", destination: "/about", permanent: true },
      { source: "/contact", destination: "/contact", permanent: true },
      { source: "/services", destination: "/products", permanent: true }, // update destination if you build a dedicated /services page

      // --- Category-level pages: no exact new-site page yet, sending to catalog ---
      // TODO: once category anchors/pages exist on the new site, point these at the specific section instead of the generic /products page
      { source: "/manufacturing-solutions", destination: "/products", permanent: true },
      { source: "/test-chamber-chiller", destination: "/products", permanent: true },
      { source: "/battery-cell-test-systems", destination: "/products", permanent: true },
      { source: "/battery-module-pack-test-systems", destination: "/products", permanent: true },
      { source: "/aftersales-equipment", destination: "/products", permanent: true },
      { source: "/resources", destination: "/products", permanent: true },

      // --- Shop / listing pages, duplicates in Wix ---
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/shop-1", destination: "/products", permanent: true },
      { source: "/items", destination: "/products", permanent: true },
      { source: "/book-online", destination: "/contact", permanent: true }, // update if booking flow exists elsewhere

      // --- Individual products: VERIFY before enabling these two ---
      // { source: "/product-page/5v300a-cell-cycler", destination: "/products/battery-cell-cycler", permanent: true },
      // { source: "/product-page/end-of-service-tester", destination: "/products/battery-end-of-line-tester", permanent: true }, // target page is comingSoon:true, don't enable until it's live

      // --- Individual products: no matching item in new catalog, sending to /products ---
      { source: "/product-page/portable-module-charge-discharge-device-pbm-m-series", destination: "/products", permanent: true },
      { source: "/product-page/comprehensive-battery-maintenance-system-brts-100", destination: "/products", permanent: true },
      { source: "/product-page/battery-balancer-64ch-pbm-pw-b-6405", destination: "/products", permanent: true },
      { source: "/product-page/hv-pack-test-cable", destination: "/products", permanent: true },
      { source: "/product-page/pbm-pw-b-3605", destination: "/products", permanent: true },
      { source: "/product-page/emergency-battery-pack-storage-box", destination: "/products", permanent: true },
      { source: "/product-page/aligator-harness", destination: "/products", permanent: true },
      { source: "/product-page/balanacing-harness", destination: "/products", permanent: true },
      { source: "/product-page/module-data-acquistion-cable", destination: "/products", permanent: true },
      { source: "/product-page/portable-battery-immersion-tank", destination: "/products", permanent: true },
      { source: "/product-page/module-maintenance-device-pbm-m-series", destination: "/products", permanent: true },
      { source: "/product-page/module-maintenance-device-pbm-cm-series", destination: "/products", permanent: true },
      { source: "/product-page/explosion-proof-transport-box", destination: "/products", permanent: true },
      { source: "/product-page/lv-communication-harness", destination: "/products", permanent: true },
      { source: "/product-page/copy-of-pbm-pw-b-4805", destination: "/products", permanent: true }, // CHECK: verify this wasn't a stray duplicate before shipping

      // --- Placeholder / test content from Wix, not real products ---
      // TODO: confirm these were actually just test data before deleting these lines and letting them 404
      { source: "/items/this-is-a-title-01", destination: "/products", permanent: true },
      { source: "/items/this-is-a-title-02", destination: "/products", permanent: true },
      { source: "/items/this-is-a-title-03", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;