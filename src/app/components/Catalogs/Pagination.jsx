"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pagination({ currentIndex, totalItems }) {
  const [currentPage, setCurrentPage] = useState(currentIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalItems) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex-row gap-2 hidden md:flex">
      <Link
        href="/catalogs"
        onClick={handlePrevPage}
        className="text-blue-main font-semibold hover:text-gray-subtext"
      >
        Previous
      </Link>
      {/* <p>{`${currentPage} of ${totalItems}`}</p> */}
      <p>1 of 3</p>
      <Link
        href="/catalogs"
        onClick={handleNextPage}
        className="text-blue-main font-semibold hover:text-gray-subtext"
      >
        Next
      </Link>
    </div>
  );
}
