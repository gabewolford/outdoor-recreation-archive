import Image from "next/image";
import Link from "next/link";

export default function BrandCard({
  brandName,
  slug,
  firstImage,
  loadingImage,
}) {
  return (
    <Link
      href={`/catalogs/${slug}`}
      className="flex flex-col gap-3 min-w-[140px] max-w-[140px] md:min-w-[155px] md:max-w-[155px] lg:min-w-[185px] lg:max-w-[185px]"
    >
      <Image
        src={firstImage}
        alt={brandName}
        placeholder="blur"
        blurDataURL={loadingImage}
        width={185}
        height={245}
        className="object-cover w-full h-auto max-h-[250px]"
      />
      <p className="text-xs">{brandName}</p>
    </Link>
  );
}
