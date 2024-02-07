import BottomRowCard from "./components/Home/BottomRowCard";
import CornerCrosshairs from "./components/Home/CornerCrosshairs";
import NameCard from "./components/Home/NameCard";
import TopRowCard from "./components/Home/TopRowCard";

export default function HomePage() {
  return (
    <main className="min-h-screen lg:h-svh w-full grid grid-cols-1 lg:grid-cols-5 grid-rows-1 lg:grid-rows-2 overflow-hidden relative">
      <CornerCrosshairs />
      <NameCard />
      <TopRowCard title="About" />
      <TopRowCard title="Books" />
      <TopRowCard title="Catalogs" />
      <TopRowCard title="Magazines" />
      <BottomRowCard title="Manuscripts" />
      <BottomRowCard title="Periodicals" />
      <BottomRowCard title="Photographs" />
      <BottomRowCard title="Research Fellowship" />
      <BottomRowCard title="Donate" />
    </main>
  );
}
