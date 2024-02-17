import BreadcrumbsWithTitle from "@/app/components/BreadcrumbsWithTitle";
import { client } from "../../../../sanity/lib/client";
import CatalogCard from "@/app/components/Catalogs/CatalogCard";
import { kebabCase } from "lodash";

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

export default async function BrandIndexPage({ params }) {
  const { slug } = params;

  const brandData = await client.fetch(
    `
    *[slug.current == $slug]{
      brand,
      'slug': slug.current,
      collection[] {
        title,
        description,
        date,
        source,
        identifier,
        'catalogCover': previewImage.asset->url,
        'loadingImage': previewImage.asset->metadata.lqip,
        'file': file.asset->url,
      }
    }
  `,
    { slug }
  );

  const brandSlug = brandData[0].slug;
  const pageTitle = brandData[0].brand;
  const brandCatalogs = brandData[0].collection;

  return (
    <>
      <BreadcrumbsWithTitle title={pageTitle} />

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {brandCatalogs.map((brand, index) => (
          <CatalogCard
            key={index}
            altText={pageTitle}
            catalogCover={brand.catalogCover}
            slug={brandSlug}
            id={kebabCase(brand.title)}
            loadingImage={brand.loadingImage}
            title={brand.title}
          />
        ))}
      </section>
    </>
  );
}
