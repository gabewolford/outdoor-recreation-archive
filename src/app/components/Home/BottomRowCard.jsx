"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BottomRowCard({ title, linkTo, imageArray, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
      }, 200); // Change image every .2 seconds (adjust as needed)
    }

    return () => clearInterval(interval);
  }, [isHovered, imageArray]);

  useEffect(() => {
    const route = document.getElementById(id);

    route?.addEventListener("mouseenter", handleMouseEnter);
    route?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      route?.removeEventListener("mouseenter", handleMouseLeave);
      route?.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`${
          isHovered ? "absolute" : "hidden"
        } bg-black/85 w-full h-svh -z-10`}
      ></div>
      <Link
        href={linkTo}
        className="hidden lg:block col-span-1 text-lg relative hover:text-white hover:z-30"
        id={id}
      >
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-4 h-px bg-gray-main transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-px h-4 bg-gray-main transform translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-4 h-px bg-gray-main transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-px h-4 bg-gray-main transform translate-x-1/2 translate-y-1/2"></div>
        {/* Content */}
        <div className="relative h-full">
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
      <h3
        className={`${
          isHovered ? "absolute" : "hidden"
        } top-0 left-0 lg:text-9xl xl:text-[136px] 2xl:text-[184px] text-white p-3`}
      >
        {title}
      </h3>
    </>
  );
}
