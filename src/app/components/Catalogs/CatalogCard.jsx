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
        width={185}
        height={245}
        className="object-cover w-full h-auto max-h-[350px]"
      />
      <p className="text-xs">{title}</p>
    </Link>
  );
}
