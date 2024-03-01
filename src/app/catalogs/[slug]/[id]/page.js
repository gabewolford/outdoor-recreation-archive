import BreadcrumbsOnly from "@/app/components/BreadcrumbsOnly";
import Image from "next/image";
import Pagination from "@/app/components/Catalogs/Pagination";
import { client } from "../../../../../sanity/lib/client";
import CurrentDate from "@/app/components/Catalogs/CurrentDate";

export async function generateStaticParams() {
  const data = await client.fetch(`
    *[_type == 'catalogIndex']{
      collection[] {
        'key': _key,
        identifier,
      }
    }
  `);

  // Flatten the array and return individual 'id'
  const individualIds = data.flatMap((obj) => {
    return obj.collection.map((collectionObj) => ({
      id: collectionObj.key,
    }));
  });

  return individualIds.map((object) => {
    id: object.id;
  });
}

export default async function CatalogDetailsPage({ params }) {
  const { id } = params;

  const catalogData = await client.fetch(
    `
    *[_type == "catalogIndex" && $id in collection[]._key]{
      brand,
      collection[_key == $id] {
        title,
        description,
        date,
        source,
        identifier,
        'catalogCover': previewImage.asset->url,
        'loadingImage': previewImage.asset->metadata.lqip,
        'file': file.asset->url 
      }
    }
  `,
    { id }
  );

  const catalogDetails = catalogData[0]?.collection[0];
  const brandName = catalogData[0]?.brand;
  const title = catalogDetails?.title;
  const catalogCover = catalogDetails?.catalogCover;
  const loadingImage = catalogDetails?.loadingImage;
  const description = catalogDetails?.description;
  const source = catalogDetails?.source;
  const date = catalogDetails?.date;
  const identifier = catalogDetails?.identifier;
  const pdfFile = catalogDetails?.file;

  return (
    <>
      <BreadcrumbsOnly lastBreadcrumb={title} />
      <main className="grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-5">
        <a
          href={pdfFile}
          className="col-span-4 lg:col-span-5 lg:row-start-1 lg:row-span-5 hover:opacity-90"
          target="_blank"
        >
          <Image
            src={catalogCover}
            alt={brandName}
            className="flex w-full h-auto object-cover"
            width={350}
            height={450}
            placeholder="blur"
            blurDataURL={loadingImage}
          />
        </a>
        <section className="col-span-4 lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:row-span-1 text-sm flex flex-row md:gap-6 py-4">
          <div className="hidden lg:flex lg:w-1/2 lg:max-w-1/2"></div>
          <div className="flex flex-col gap-1 lg:w-1/2 lg:max-w-1/2">
            <h3 className="font-semibold">Citation</h3>
            <p>
              {brandName}, "{title}", USU Digital Exhibits, accessed{" "}
              <CurrentDate />,{" "}
              <a
                href="http://exhibits.lib.usu.edu/exhibits/show/outdoorcatalogs"
                target="_blank"
                className="break-all"
              >
                http://exhibits.lib.usu.edu/exhibits/show/outdoorcatalogs
              </a>
              .
            </p>
          </div>
        </section>
        <Pagination />
        <section className="col-span-4 lg:col-span-5 lg:col-start-7 lg:row-start-3 lg:row-span-4 text-sm flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:w-1/2">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Title</h3>
                <p>{title}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Subject</h3>
                <p>Outdoor Products; Catalog; {brandName}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Description</h3>
                <p>
                  {brandName} catalog, {`${description}`.toLowerCase()}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Creator</h3>
                <p>{brandName}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Source</h3>
                <p>{source}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Publisher</h3>
                <p>Utah State University Libraries</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Date</h3>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:w-1/2">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Contributor</h3>
                <p>Digital Initiatives Unit, Merrill-Cazier Library</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Rights</h3>
                <p className="break-all">
                  In copyright{" "}
                  <span>
                    <a
                      href="https://rightsstatements.org/page/InC/1.0/?language=en"
                      target="_blank"
                    >
                      https://rightsstatements.org/page/InC/1.0/?language=en
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Identifier</h3>
                <p>{identifier}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
