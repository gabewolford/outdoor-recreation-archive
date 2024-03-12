"use client";

import { useEffect } from "react";
import Link from "next/link";
import BreadcrumbsOnly from "./components/BreadcrumbsOnly";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-3 grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-6 animate__animated animate__fadeIn">
      <section className="flex flex-col col-span-4 lg:col-span-5 lg:row-span-4 mb-12">
        <BreadcrumbsOnly lastBreadcrumb="Page Not Found" />
        <div className="flex flex-col gap-6 lg:gap-12 mt-3 lg:mt-9 mb-6 lg:mb-12">
          <h1 className="text-3xl lg:text-5xl">
            This page does not exist or cannot be found.
          </h1>
        </div>
        <Link href="/" className="hover:text-gray-subtext">
          ← Go home
        </Link>
      </section>
    </main>
  );
}
