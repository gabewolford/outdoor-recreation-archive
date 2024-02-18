import { client } from "../../../sanity/lib/client";
import TheHeader from "../components/TheHeader";
import ScrollableSection from "../components/Catalogs/ScrollableSection";

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
      <TheHeader title="Catalog collection" />
      <ScrollableSection title="A-F" brands={groupedBrands.AtoF} />
      <ScrollableSection title="G-N" brands={groupedBrands.GtoN} />
      <ScrollableSection title="O-Z" brands={groupedBrands.OtoZ} />
    </>
  );
}
