import BrandCard from "./BrandCard";

export default function ScrollableSection({ title, brands }) {
  return (
    <section className="mb-12">
      <h2 className="text-[26px] lg:text-[39px] leading-[1] mb-6">{title}</h2>
      <div className="flex flex-row gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-main/60 scrollbar-track-transparent pb-3 h-[300px]">
        {brands.map((brand, index) => (
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
  );
}
