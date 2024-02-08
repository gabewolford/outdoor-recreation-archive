"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadcrumbsWithTitle({ title }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const capitalizeWords = (string) => {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section className="flex flex-col gap-12 text-sm">
      <div className="flex flex-row text-blue-main">
        <Link href={"/"} className="hover:text-gray-main">
          Home
        </Link>
        {pathNames.length > 0 && "/"}

        {pathNames.map((name, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemName = capitalizeWords(
            name.charAt(0).toUpperCase() + name.slice(1)
          );

          return (
            <div key={index}>
              <Link
                key={index}
                href={href}
                className={`hover:text-gray-main ${
                  index === pathNames.length - 1 ? "text-gray-main" : ""
                }`}
              >
                &nbsp;{itemName}
              </Link>
              {pathNames.length !== index + 1 && "/"}
            </div>
          );
        })}
      </div>
      <h2 className="text-[26px] lg:text-[52px] leading-[1] mb-6">{title}</h2>
    </section>
  );
}
