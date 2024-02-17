import { client } from "../../../sanity/lib/client";
import BrandCard from "../components/Catalogs/BrandCard";
import BreadcrumbsWithTitle from "../components/BreadcrumbsWithTitle";

export default async function CatalogsIndexPage() {
  const data = await client.fetch(`
    *[_type == 'catalogIndex']{
      brand,
      'slug': slug.current,
      collection[] {
        title,
        description,
        date,
        source,
        identifier,
        'previewImage': previewImage.asset->url,
        'loadingImage': previewImage.asset->metadata.lqip,
        'file': file.asset->url,
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
    <>
      <BreadcrumbsWithTitle title="Outdoor Recreation Catalogs" />

      <section className="mb-12">
        <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">A-F</h2>
        <div className="flex flex-row gap-3 overflow-x-scroll">
          {groupedBrands.AtoF.map((brand, index) => (
            <BrandCard
              key={index}
              brandName={brand.brand}
              firstImage={brand.collection[0].previewImage}
              slug={brand.slug}
              loadingImage={brand.collection[0].loadingImage}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">G-N</h2>
        <div className="flex flex-row gap-3 overflow-x-scroll">
          {groupedBrands.GtoN.map((brand, index) => (
            <BrandCard
              key={index}
              brandName={brand.brand}
              firstImage={brand.collection[0].previewImage}
              slug={brand.slug}
              loadingImage={brand.collection[0].loadingImage}
            />
          ))}
        </div>
      </section>
    </>
  );
}
