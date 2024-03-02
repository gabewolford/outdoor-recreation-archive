"use client";

import { useState, useEffect, useRef } from "react";
import BrandCard from "./BrandCard";
import SearchIcon from "./UI/SearchIcon";

export default function ScrollableSection({ title, brands }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [isHovered, setHovered] = useState(false);
  const [isSectionHovered, setSectionHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = brands.filter((brand) =>
      brand.brand.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBrands(filtered);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
    }
  }, [isActive]);

  return (
    <section className="mb-12">
      <div className="flex flex-row gap-6 items-center mb-6 w-full">
        <h2 className="text-[25px] md:text-[32px] leading-[1]">{title}</h2>
        <div
          className={`relative flex flex-row items-center flex-1 text-[25px] md:text-[32px] leading-[1] h-fit gap-2.5 border-b  ${
            isActive ? "border-b-[#BFBFBF]" : "border-b-white"
          }`}
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setActive(!isActive)}
          >
            <SearchIcon strokeColor={isHovered ? "#666666" : "#BFBFBF"} />
          </div>
          {isActive ? (
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="focus:outline-none w-full"
              ref={inputRef}
            />
          ) : (
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="focus:outline-none w-full bg-white cursor-crosshair"
              disabled
            />
          )}
        </div>
      </div>

      <div
        className={`flex flex-row gap-3 overflow-x-auto pb-3 h-[300px] ${
          isSectionHovered
            ? "scrollbar-thin scrollbar-thumb-gray-main/60 scrollbar-track-transparent"
            : "scrollbar-none"
        }`}
        onMouseEnter={() => setSectionHovered(true)}
        onMouseLeave={() => setSectionHovered(false)}
      >
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
