"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadcrumbsOnly({ lastBreadcrumb }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const capitalizeWords = (string) => {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <header>
      <Link href="/" className="font-medium cursor-crosshair">
        Outdoor Recreation Archive
      </Link>
      <nav className="flex flex-col gap-6 lg:gap-12 mb-3 text-sm">
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
                  className={`hover:text-gray-subtext ${
                    index === pathNames.length - 1 ? "text-gray-main" : ""
                  }`}
                >
                  &nbsp;
                  {index === pathNames.length - 1 ? lastBreadcrumb : itemName}
                </Link>
                {pathNames.length !== index + 1 && "/"}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
