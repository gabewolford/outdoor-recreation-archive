import Image from "next/image";
import Link from "next/link";

export default function CatalogCard({
  slug,
  altText,
  id,
  title,
  catalogCover,
  loadingImage,
}) {
  return (
    <Link
      href={`/catalogs/${slug}/${id}`}
      className="col-span-1 flex flex-col gap-3"
    >
      <Image
        src={catalogCover}
        alt={altText}
        placeholder="blur"
        blurDataURL={loadingImage}
        width={170}
        height={225}
        className="object-cover w-fit h-auto"
      />
      <p className="text-xs">{title}</p>
    </Link>
  );
}
