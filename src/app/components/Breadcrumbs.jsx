"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs({}) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <section className="flex flex-col">
      <div className="flex flex-row text-blue-main">
        <Link href={"/"} className="hover:text-gray-main">
          Home
        </Link>
        {pathNames.length > 0 && "/"}

        {pathNames.map((name, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemName = name;

          return (
            <div key={index}>
              <Link
                key={index}
                href={href}
                className={`capitalize hover:text-gray-main ${
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
    </section>
  );
}
