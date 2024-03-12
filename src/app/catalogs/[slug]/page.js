import { client } from "../../../../sanity/lib/client";
import CatalogCard from "@/app/components/Catalogs/CatalogCard";
import TheHeader from "@/app/components/TheHeader";

export async function generateStaticParams() {
  const data = await client.fetch(`
    *[_type == 'catalogIndex']{
      'slug': slug.current,
    }
  `);

  return data.map((brand) => {
    slug: brand.slug;
  });
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const brandData = await client.fetch(
    `
    *[slug.current == $slug]{
      brand,
      'slug': slug.current,
    }
  `,
    { slug }
  );

  const brandName = brandData[0]?.brand;

  return {
    title: `${brandName} | Catalog Collection`,
    description: `${brandName} Catalogs`,
    keywords: `${brandName}, Outdoor, outdoors, recreation, archive, media archive, outdoor recreation archive, books, catalogs, magazines, manuscripts, periodicals, photographs, utah state university, outdoor product design and development, outdoor catalogs, outdoor history`,
    openGraph: {
      title: `${brandName} | Catalog Collection`,
      description: `${brandName} Catalogs`,
      siteName: "Outdoor Recreation Archive",
      type: "website",
      locale: "en_US",
      url: `https://outdoorrecreationarchive.com/catalogs/${slug}`,
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
}

export default async function BrandIndexPage({ params }) {
  const { slug } = params;

  const brandData = await client.fetch(
    `
    *[slug.current == $slug]{
      brand,
      'slug': slug.current,
      collection[] {
        title,
        'key': _key,
        'catalogCover': previewImage.asset->url,
        'loadingImage': previewImage.asset->metadata.lqip,
      }
    }
  `,
    { slug }
  );

  const brandSlug = brandData[0]?.slug;
  const pageTitle = brandData[0]?.brand;
  const brandCatalogs = brandData[0]?.collection;

  return (
    <main className="p-3 animate__animated animate__fadeIn">
      <TheHeader title={pageTitle} />
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {brandCatalogs.map((brand, index) => (
          <CatalogCard
            key={index}
            altText={pageTitle}
            catalogCover={brand.catalogCover}
            slug={brandSlug}
            id={brand.key}
            loadingImage={brand.loadingImage}
            title={brand.title}
          />
        ))}
      </section>
    </main>
  );
}
