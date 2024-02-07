export default function BottomRowCard({ title }) {
  return (
    <div className="hidden lg:block col-span-1 p-2 text-lg relative">
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-4 h-px bg-crosshairs-gray transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-px h-4 bg-crosshairs-gray transform translate-x-1/2 -translate-y-1/2"></div>
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-4 h-px bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-px h-4 bg-crosshairs-gray transform translate-x-1/2 translate-y-1/2"></div>
      {/* Content */}
      {title}
    </div>
  );
}
