import { client } from "../../sanity/lib/client";
import BottomRowCard from "./components/Home/BottomRowCard";
import CornerCrosshairs from "./components/Home/CornerCrosshairs";
import NameCard from "./components/Home/NameCard";
import TopRowCard from "./components/Home/TopRowCard";

export default async function HomePage() {
  const data = await client.fetch(`
    *[_type == 'homeImages' && section != null]{
      section,
      color,
      images[]{
        'imageUrl': asset->url,
        'previewUrl': asset->metadata.lqip,
      },
    } | order(section asc)
  `);

  const redCovers = data[0]?.images;
  const orangeCovers = data[1]?.images;
  const yellowCovers = data[2]?.images;
  const greenCovers = data[4]?.images;
  const blueCovers = data[5]?.images;
  const purpleCovers = data[6]?.images;
  const brownCovers = data[7]?.images;
  const blackCovers = data[8]?.images;
  const whiteCovers = data[3]?.images;

  console.log(redCovers);

  return (
    <main className="h-svh max-h-svh lg:grid lg:grid-cols-5 lg:grid-rows-2 overflow-hidden relative">
      <CornerCrosshairs />
      <NameCard />
      <TopRowCard title="About" linkTo="/about" imageArray={redCovers} />
      <TopRowCard title="Books" linkTo="/books" imageArray={orangeCovers} />
      <TopRowCard
        title="Catalogs"
        linkTo="/catalogs"
        imageArray={yellowCovers}
      />
      <TopRowCard
        title="Magazines"
        linkTo="/magazines"
        imageArray={greenCovers}
      />
      <BottomRowCard
        title="Manuscripts"
        linkTo="/manuscripts"
        imageArray={blueCovers}
      />
      <BottomRowCard
        title="Periodicals"
        linkTo="/periodicals"
        imageArray={purpleCovers}
      />
      <BottomRowCard
        title="Photographs"
        linkTo="/photographs"
        imageArray={brownCovers}
      />
      <BottomRowCard
        title="Research Fellowship"
        linkTo="/research-fellowship"
        imageArray={blackCovers}
      />
      <BottomRowCard title="Donate" linkTo="/donate" imageArray={whiteCovers} />
    </main>
  );
}
