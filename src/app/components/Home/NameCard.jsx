export default function NameCard() {
  return (
    <div className="col-span-1 row-span-1 p-2 text-2xl relative">
      {/* Bottom-left corner */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-4 h-px bg-crosshairs-gray transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 w-px h-4 bg-crosshairs-gray transform -translate-x-1/2 translate-y-1/2"></div>
      {/* Bottom-right corner */}
      <div className="block lg:hidden absolute bottom-0 right-0 w-4 h-px bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      <div className="block lg:hidden absolute bottom-0 right-0 w-px h-4 bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      {/* Content */}
      <h1 className="text-6xl lg:text-3xl leading-tight lg:leading-snug">
        Outdoor
        <br />
        Recreation
        <br />
        Archive
      </h1>
    </div>
  );
}
