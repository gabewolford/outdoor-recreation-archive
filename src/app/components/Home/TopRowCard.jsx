"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TopRowCard({ title, linkTo, imageArray, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const route = document.getElementById(id);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    route?.addEventListener("mouseenter", handleMouseEnter);
    route?.addEventListener("mouseleave", handleMouseLeave);

    const interval = isHovered
      ? setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
          );
        }, 200)
      : null;

    return () => {
      route?.removeEventListener("mouseenter", handleMouseEnter);
      route?.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(interval);
    };
  }, [id, isHovered, imageArray]);

  return (
    <Link
      href={linkTo}
      className="route hidden lg:block col-span-1 text-lg relative overflow-hidden hover:text-white"
      id={id}
    >
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-px bg-gray-main transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-px h-4 bg-gray-main transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Content */}
      <div className="relative overflow-hidden h-full">
        {isHovered && imageArray.length > 0 && (
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src={imageArray[currentIndex].imageUrl}
              alt={`Catalog ${currentIndex + 1}`}
              fill
              sizes="(min-width: 1024px) 20vw"
              className="object-cover"
              placeholder="blur"
              priority={true}
              blurDataURL={imageArray[currentIndex].previewUrl}
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
