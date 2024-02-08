"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TopRowCard({ title, linkTo, imageArray }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
      }, 200); // Change image every .5 seconds (adjust as needed)
    }

    return () => clearInterval(interval);
  }, [isHovered, imageArray]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={linkTo}
      className="hidden lg:block col-span-1 text-lg relative overflow-hidden hover:text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-px bg-gray-main transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-px h-4 bg-gray-main transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Content */}
      <div className="relative overflow-hidden h-full">
        {isHovered && imageArray.length > 0 && (
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src={imageArray[currentIndex]}
              alt={`Catalog ${currentIndex + 1}`}
              fill
              objectFit="cover"
            />
          </div>
        )}
        <h3
          className={`${
            isHovered ? "hidden" : "flex"
          } absolute p-3 top-0 left-0 right-0`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
