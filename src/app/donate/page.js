import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="grid grid-cols-4 gap-9 lg:gap-0 lg:grid-cols-12 lg:grid-rows-3 text-sm">
      <section className="flex flex-col gap-3 col-span-4 lg:col-span-5 lg:row-span-2">
        <p>
          We greatly appreciate any support for the Outdoor Recreation Archive,
          and are always accepting donations of materials such as books,
          catalogs, magazines, periodicals, and photographs, as well as monetary
          donations.
        </p>
        <p>
          Your generosity goes a long way in supporting our mission to preserve
          the history of the outdoor industry for future generations to cherish
          the same way that we do.
        </p>
      </section>

      <section className="grid grid-cols-4 lg:gap-0 lg:grid-cols-2 lg:col-start-7 col-span-4 lg:col-span-5 lg:row-start-2 lg:row-span-2">
        <div className="flex flex-col col-span-2 lg:col-span-1 pr-3 lg:p-3">
          <h3 className="font-medium">Physical Donations</h3>
          <p className="mb-3">
            For donation of physical or digital materials, please contact
            manuscript curator Clint Pumphrey at{" "}
            <span>
              <a
                href="mailto:clint.pumphrey@usu.edu"
                className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
              >
                clint.pumphrey@usu.edu
              </a>
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1 pl-3 lg:p-3">
          <h3 className="font-medium">Monetary Donations</h3>
          <p className="mb-3">
            To make a one-time or recurring monetary donation to the archive,
            you can do so{" "}
            <span>
              <a
                href="https://www.givecampus.com/campaigns/34521/donations/new"
                target="_blank"
                className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
              >
                here
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
