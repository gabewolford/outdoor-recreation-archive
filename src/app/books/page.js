import TheHeader from "../components/TheHeader";

export const metadata = {
  title: "Books | Outdoor Recreation Archive",
  description:
    "A historical collection of books, catalogs, periodicals, photographs, and manuscripts documenting the history of outdoor gear - available to everyone.",
  keywords:
    "Outdoor, outdoors, recreation, archive, media archive, outdoor recreation archive, books, catalogs, magazines, manuscripts, periodicals, photographs, utah state university, outdoor product design and development, outdoor catalogs, outdoor history",
  openGraph: {
    title: "Outdoor Recreation Archive",
    description: "Preserving the history of outdoor gear.",
    siteName: "Outdoor Recreation Archive",
    type: "website",
    locale: "en_US",
    url: "https://outdoorrecreationarchive.com/books",
    images: [
      {
        url: "https://outdoorrecreationarchive.com/images/og-image.png",
        alt: "Outdoor Recreation Archive",
      },
    ],
  },
  images: [
    {
      url: "https://outdoorrecreationarchive.com/images/og-image.png",
      alt: "Outdoor Recreation Archive",
    },
  ],
};

export default function BooksIndexPage() {
  return (
    <main className="p-3 animate__animated animate__fadeIn">
      <TheHeader title="Book collection" />
      <p>Coming soon...</p>
    </main>
  );
}
