export default function NameCard() {
  return (
    <div className="flex flex-col justify-between col-span-1 row-span-1 p-3 text-2xl relative">
      {/* Bottom-left corner */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-4 h-px bg-crosshairs-gray transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 w-px h-4 bg-crosshairs-gray transform -translate-x-1/2 translate-y-1/2"></div>
      {/* Bottom-right corner */}
      <div className="block lg:hidden absolute bottom-0 right-0 w-4 h-px bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      <div className="block lg:hidden absolute bottom-0 right-0 w-px h-4 bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      {/* Content */}
      <h1 className="text-5xl lg:text-3xl">
        Outdoor
        <br />
        Recreation
        <br />
        Archive
      </h1>
      <h6 className="lg:hidden text-2xl">1970-2024</h6>
    </div>
  );
}
