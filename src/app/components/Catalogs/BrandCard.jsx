"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrandCard({
  brandName,
  slug,
  firstImage,
  loadingImage,
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <Link
      href={`/catalogs/${slug}`}
      className={`flex flex-col gap-3 min-w-[140px] max-w-[140px] md:min-w-[155px] md:max-w-[155px] lg:min-w-[185px] lg:max-w-[185px] hover:opacity-90 lg:pr-3 ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Image
        src={firstImage}
        alt={brandName}
        placeholder="blur"
        blurDataURL={loadingImage}
        width={185}
        height={245}
        className={`object-cover w-full h-auto max-h-[250px] ${
          isDragging ? "cursor-grabbing" : ""
        }`}
      />
      <p className={`text-xs ${isDragging ? "cursor-grabbing" : ""}`}>
        {brandName}
      </p>
    </Link>
  );
}
