export default function TopRowCard({ title }) {
  return (
    <div className="hidden lg:block col-span-1 p-3 text-lg relative">
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-px bg-crosshairs-gray transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-px h-4 bg-crosshairs-gray transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Content */}
      {title}
    </div>
  );
}
