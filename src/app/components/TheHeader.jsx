import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="font-medium text-base">
      <Link href="/" className="cursor-crosshair">
        Outdoor Recreation Archive
      </Link>
    </header>
  );
}
