import TheHeader from "../components/TheHeader";

export const metadata = {
  title: "Periodicals | Outdoor Recreation Archive",
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
    url: "https://outdoorrecreationarchive.com/periodicals",
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

export default function PeriodicalsIndexPage() {
  return (
    <main className="p-3 animate__animated animate__fadeIn">
      <TheHeader title="Periodical collection" />
      <p>Coming soon...</p>
    </main>
  );
}
