import { client } from "../../../sanity/lib/client";
import TheHeader from "../components/TheHeader";
import ScrollableSection from "../components/Catalogs/ScrollableSection";

export const metadata = {
  title: "Catalogs | Outdoor Recreation Archive",
  description:
    "A historical collection of books, catalogs, periodicals, photographs, and manuscripts documenting the history of outdoor gear - available to everyone.",
  keywords:
    "Outdoor, outdoors, recreation, archive, media archive, outdoor recreation archive, books, catalogs, magazines, manuscripts, periodicals, photographs, utah state university, outdoor product design and development, outdoor catalogs, outdoor history",
  openGraph: {
    title: "Outdoor Recreation Archive",
    description: "Preserving the history of outdoor gear.",
    siteName: "Outdoor Recreation Archive",
    type: "website",
    locale: "en_US",
    url: "https://outdoorrecreationarchive.com",
    images: [
      {
        url: "https://outdoorrecreationarchive.com/images/og-image.png",
        alt: "Outdoor Recreation Archive",
      },
    ],
  },
  images: [
    {
      url: "https://outdoorrecreationarchive.com/images/og-image.png",
      alt: "Outdoor Recreation Archive",
    },
  ],
};

export default async function CatalogsIndexPage() {
  const data = await client.fetch(`
    *[_type == 'catalogIndex']{
      brand,
      'slug': slug.current,
      collection[] {
        title,
        'previewImage': previewImage.asset->url,
        'loadingImage': previewImage.asset->metadata.lqip,
      }
    } | order(brand asc)
  `);

  const groupedBrands = {
    AtoF: [],
    GtoN: [],
    OtoZ: [],
  };

  data.forEach((item) => {
    const firstLetter = item.brand.charAt(0).toUpperCase();

    if (firstLetter >= "A" && firstLetter <= "F") {
      groupedBrands.AtoF.push(item);
    } else if (firstLetter >= "G" && firstLetter <= "N") {
      groupedBrands.GtoN.push(item);
    } else {
      groupedBrands.OtoZ.push(item);
    }
  });

  return (
    <main className="p-3 animate__animated animate__fadeIn mb-12">
      <TheHeader title="Catalog collection" />
      <ScrollableSection title="A-F" brands={groupedBrands.AtoF} />
      <ScrollableSection title="G-N" brands={groupedBrands.GtoN} />
      <ScrollableSection title="O-Z" brands={groupedBrands.OtoZ} />
    </main>
  );
}
