import BottomRowCard from "./components/Home/BottomRowCard";
import CornerCrosshairs from "./components/Home/CornerCrosshairs";
import NameCard from "./components/Home/NameCard";
import TopRowCard from "./components/Home/TopRowCard";
import photo1 from "../../public/images/catalog-covers/abercrombie.jpeg";
import photo2 from "../../public/images/catalog-covers/alpenlite.jpeg";
import photo3 from "../../public/images/catalog-covers/alpine-outfitters.jpeg";
import photo4 from "../../public/images/catalog-covers/alti-wear.jpeg";
import photo5 from "../../public/images/catalog-covers/ascente.jpeg";
import photo6 from "../../public/images/catalog-covers/asolo.jpeg";
import photo7 from "../../public/images/catalog-covers/cabelas.jpeg";
import photo8 from "../../public/images/catalog-covers/california-mountaineering.jpeg";
import photo9 from "../../public/images/catalog-covers/camelbak.jpeg";
import photo10 from "../../public/images/catalog-covers/camelbak.jpeg";
import photo11 from "../../public/images/catalog-covers/cannondale.jpeg";
import photo12 from "../../public/images/catalog-covers/canoe-specialists.jpeg";
import photo13 from "../../public/images/catalog-covers/carhartt.jpeg";
import photo14 from "../../public/images/catalog-covers/cascade-designs.jpeg";
import photo15 from "../../public/images/catalog-covers/chaco.jpeg";
import photo16 from "../../public/images/catalog-covers/cmi.jpeg";

const catalogCovers = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
];

export default function HomePage() {
  return (
    <main className="h-svh max-h-svh lg:grid lg:grid-cols-5 lg:grid-rows-2 overflow-hidden relative">
      <CornerCrosshairs />
      <NameCard />
      <TopRowCard title="About" linkTo="/about" imageArray={catalogCovers} />
      <TopRowCard title="Books" linkTo="/books" imageArray={catalogCovers} />
      <TopRowCard
        title="Catalogs"
        linkTo="/catalogs"
        imageArray={catalogCovers}
      />
      <TopRowCard
        title="Magazines"
        linkTo="/magazines"
        imageArray={catalogCovers}
      />
      <BottomRowCard
        title="Manuscripts"
        linkTo="/manuscripts"
        imageArray={catalogCovers}
      />
      <BottomRowCard
        title="Periodicals"
        linkTo="/periodicals"
        imageArray={catalogCovers}
      />
      <BottomRowCard
        title="Photographs"
        linkTo="/photographs"
        imageArray={catalogCovers}
      />
      <BottomRowCard
        title="Research Fellowship"
        linkTo="/research-fellowship"
        imageArray={catalogCovers}
      />
      <BottomRowCard
        title="Donate"
        linkTo="/donate"
        imageArray={catalogCovers}
      />
    </main>
  );
}
