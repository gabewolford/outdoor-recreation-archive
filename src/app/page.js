import BottomRowCard from "./components/Home/BottomRowCard";
import CornerCrosshairs from "./components/Home/CornerCrosshairs";
import NameCard from "./components/Home/NameCard";
import TopRowCard from "./components/Home/TopRowCard";

export default function HomePage() {
  return (
    <main className="h-svh max-h-svh lg:grid lg:grid-cols-5 lg:grid-rows-2 overflow-hidden relative">
      <CornerCrosshairs />
      <NameCard />
      <TopRowCard title="About" linkTo="/about" />
      <TopRowCard title="Books" linkTo="/books" />
      <TopRowCard title="Catalogs" linkTo="/catalogs" />
      <TopRowCard title="Magazines" linkTo="/magazines" />
      <BottomRowCard title="Manuscripts" linkTo="/manuscripts" />
      <BottomRowCard title="Periodicals" linkTo="/periodicals" />
      <BottomRowCard title="Photographs" linkTo="/photographs" />
      <BottomRowCard
        title="Research Fellowship"
        linkTo="/research-fellowship"
      />
      <BottomRowCard title="Donate" linkTo="/donate" />
    </main>
  );
}
