import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="font-medium">
      <Link href="/" className="cursor-crosshair">
        Outdoor Recreation Archive
      </Link>
    </header>
  );
}
