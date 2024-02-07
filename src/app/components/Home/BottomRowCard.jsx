import Link from "next/link";

export default function BottomRowCard({ title, linkTo }) {
  return (
    <Link
      href={linkTo}
      className="hidden lg:block col-span-1 p-3 text-lg relative hover:bg-blue-main hover:text-white"
    >
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-4 h-px bg-gray-main transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-px h-4 bg-gray-main transform translate-x-1/2 -translate-y-1/2"></div>
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-4 h-px bg-gray-main transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-px h-4 bg-gray-main transform translate-x-1/2 translate-y-1/2"></div>
      {/* Content */}
      {title}
    </Link>
  );
}
