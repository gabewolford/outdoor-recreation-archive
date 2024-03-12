"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Pagination({ currentIndex, totalItems }) {
  const [currentPage, setCurrentPage] = useState(currentIndex);
  const router = useRouter();

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
    <div className="flex-row gap-2 hidden lg:flex lg:col-start-7 lg:col-span-5 lg:row-start-2 items-end text-sm mb-3">
      <button
        type="button"
        onClick={() => router.back()}
        className="text-blue-main font-semibold hover:text-gray-subtext"
      >
        ← Go back
      </button>
      {/* <Link
        href="/catalogs"
        onClick={handlePrevPage}
        className="text-blue-main font-semibold hover:text-gray-subtext"
      >
        Previous
      </Link>
      <p>{`${currentPage} of ${totalItems}`}</p>
      <p>1 of 3</p>
      <Link
        href="/catalogs"
        onClick={handleNextPage}
        className="text-blue-main font-semibold hover:text-gray-subtext"
      >
        Next
      </Link> */}
    </div>
  );
}
