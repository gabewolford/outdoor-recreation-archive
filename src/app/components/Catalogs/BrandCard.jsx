import Image from "next/image";
import Link from "next/link";

export default function BrandCard({
  brandName,
  slug,
  firstImage,
  loadingImage,
}) {
  return (
    <Link href={`/catalogs/${slug}`} className="flex flex-col gap-3">
      <Image
        src={firstImage}
        alt={brandName}
        placeholder="blur"
        blurDataURL={loadingImage}
        width={300}
        height={400}
        className="object-cover"
      />
      <p className="text-xs">{brandName}</p>
    </Link>
  );
}
