import TheHeader from "../components/TheHeader";

export const metadata = {
  title: "Donate | Outdoor Recreation Archive",
  description: "Preserving the history of outdoor gear.",
};

export default function DonatePage() {
  return (
    <main className="p-3 grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-6">
      <section className="flex flex-col col-span-4 lg:col-span-5 lg:row-span-6 mb-12">
        <TheHeader title="Donating to the archive" />
        <div className="flex flex-col gap-3 mb-12">
          <p>
            We greatly appreciate any support for the Outdoor Recreation
            Archive, and are always accepting donations of materials such as
            books, catalogs, magazines, periodicals, and photographs, as well as
            monetary donations.
          </p>
          <p>
            Your generosity goes a long way in supporting our mission to
            preserve the history of the outdoor industry for future generations
            to cherish the same way that we do.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Physical Donations</h3>
            <p>
              For donation of physical or digital materials, please contact
              manuscript curator Clint Pumphrey at{" "}
              <a
                href="mailto:clint.pumphrey@usu.edu"
                target="_blank"
                className="underline underline-offset-4"
              >
                clint.pumphrey@usu.edu
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Monetary Donations</h3>
            <p>
              To make a one-time or recurring monetary donation to the archive,
              you can do so{" "}
              <a
                href="https://www.givecampus.com/campaigns/34521/donations/new"
                target="_blank"
                className="underline underline-offset-4"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
