import Image from "next/image";
import Link from "next/link";

export default function CatalogCard({ brandName, slug, title, previewImage }) {
  return (
    <Link href={`/catalogs/${brandName}/${slug}`}>
      <a className="flex flex-col gap-3">
        <Image src={previewImage} alt={title} height={400} width={300} />
        <figcaption className="text-xs">{title}</figcaption>
      </a>
    </Link>
  );
}
