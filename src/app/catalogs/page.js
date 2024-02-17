import { client } from "../../../sanity/lib/client";

export default async function CatalogsIndexPage() {
  // const data = await client.fetch(`
  //   *[_type == 'catalogIndex']{
  //     brand,
  //     'slug': slug.current,
  //     collection[] {
  //       title,
  //       description,
  //       date,
  //       source,
  //       identifier,
  //       'previewImage': previewImage.asset->url,
  //       'file': file.asset->url,
  //     }
  //   }
  // `);
  // console.log(data[0]?.collection);

  return <p>Coming soon...</p>;
}
