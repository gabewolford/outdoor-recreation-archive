"use client";

import { useState } from "react";
import BrandCard from "./BrandCard";

export default function ScrollableSection({ title, brands }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(brands);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = brands.filter((brand) =>
      brand.brand.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBrands(filtered);
  };

  return (
    <section className="mb-12">
      <div className="flex flex-row gap-6 items-center mb-6 w-full relative">
        <h2 className="text-[25px] leading-[1]">{title}</h2>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by brand"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border-[0.25px] border-gray-main/30 h-full focus:outline-blue-main/90 focus:rounded-none text-sm flex-1 md:flex-none"
        />
      </div>

      <div className="flex flex-row gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-main/60 scrollbar-track-transparent pb-3 h-[300px]">
        {/* Brand Cards */}
        {filteredBrands.map((brand, index) => (
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
