"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import menuIcon from "../../../public/icons/menu.svg";
import closeIcon from "../../../public/icons/close.svg";

export default function MobileMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className={isMobileMenuOpen ? "hidden" : "lg:hidden"}>
        <button
          onClick={toggleMobileMenu}
          className="absolute top-3 right-3 z-30"
        >
          <Image src={menuIcon} alt="Menu" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden absolute top-3 right-3 z-[9999] animate__animated animate__rotateIn"
        >
          <Image src={closeIcon} alt="Close" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9000] animate__animated animate__slideInDown flex flex-col">
          <h3 className="flex flex-col w-full p-3 text-gray-main font-medium">
            Outdoor Recreation Archive
          </h3>
          <div className="flex flex-col flex-1">
            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              About
            </Link>
            <Link
              href="/books"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Books
            </Link>
            <Link
              href="/catalogs"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Catalogs
            </Link>
            <Link
              href="/magazines"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Magazines
            </Link>
            <Link
              href="/manuscripts"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Manuscripts
            </Link>
            <Link
              href="/periodicals"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Periodicals
            </Link>
            <Link
              href="/photographs"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Photographs
            </Link>
            <Link
              href="/research-fellowship"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Research Fellowship
            </Link>
            <Link
              href="/donate"
              onClick={toggleMobileMenu}
              className="flex flex-1 items-center text-xl border-b w-full p-3"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
