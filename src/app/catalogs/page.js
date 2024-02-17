import { client } from "../../../sanity/lib/client";
import BrandCard from "../components/Catalogs/BrandCard";

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
      <section className="lg:col-span-12 mb-12">
        <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">A-F</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3">
          {groupedBrands.AtoF.map((brand) => (
            <div key={brand.slug} className="col-span-1 lg:col-span-2">
              {brand.collection.length > 0 && (
                <BrandCard
                  key={brand.collection[0].identifier}
                  brandName={brand.brand}
                  firstImage={brand.collection[0].previewImage}
                  slug={brand.slug}
                  loadingImage={brand.collection[0].loadingImage}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="lg:col-span-12 mb-12">
        <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">G-N</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3">
          {groupedBrands.GtoN.map((brand) => (
            <div key={brand.slug} className="col-span-1 lg:col-span-2">
              {brand.collection.length > 0 && (
                <BrandCard
                  key={brand.collection[0].identifier}
                  brandName={brand.brand}
                  firstImage={brand.collection[0].previewImage}
                  slug={brand.slug}
                  loadingImage={brand.collection[0].loadingImage}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="lg:col-span-12 mb-12">
        <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">O-Z</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3">
          {groupedBrands.OtoZ.map((brand) => (
            <div key={brand.slug} className="col-span-1 lg:col-span-2">
              {brand.collection.length > 0 && (
                <BrandCard
                  key={brand.collection[0].identifier}
                  brandName={brand.brand}
                  firstImage={brand.collection[0].previewImage}
                  slug={brand.slug}
                  loadingImage={brand.collection[0].loadingImage}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
