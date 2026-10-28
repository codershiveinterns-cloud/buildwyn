// Head tags each page shares; Next.js replaces (not merges) openGraph per page, so build it whole here.
export function pageMetadata({ title, description, url }) {
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: "Buildwyn",
      title,
      description,
      url,
      type: "website",
      images: ["https://buildwyn.com/assets/og-image.png"],
    },
    twitter: { card: "summary_large_image" },
  };
}
