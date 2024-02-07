import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-4 gap-9 lg:gap-0 lg:grid-cols-12 lg:grid-rows-3">
      <section className="flex flex-col gap-3 col-span-4 lg:col-span-5 lg:row-span-2">
        <p>
          In 2017, USU Special Collections and Archives (SCA) partnered with the
          College of Agriculture and Applied Science's Outdoor Product Design
          and Development (OPDD) program to develop a historical collection of
          books, catalogs, periodicals, photographs, and manuscripts documenting
          the history of outdoor gear. These materials, together with the strong
          environmental collections SCA has already built since the early 1970s,
          form the Outdoor Recreation Archive, which is highlighted in this
          guide.
        </p>
        <p>
          As a public institution, SCA strives to make its collections
          accessible to anyone, from professional researchers to those with a
          more casual interest in the outdoor industry. These materials are
          particularly beneficial to students in the OPDD program, who represent
          the next generation of leaders in the outdoor industry. The Outdoor
          Recreation Archive gives these students easy access to historical
          records from which to better understand the past while drawing
          inspiration for the future.
        </p>
        <p>
          For instructions on donating to the archive, please visit our{" "}
          <span>
            <Link
              href="/donations"
              className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
            >
              Donations Page
            </Link>
          </span>
          .
        </p>
        <p className="hidden lg:block">
          For information about searching and viewing the archive, please see
          the information to the right →
        </p>
        <p className="lg:hidden">
          For information about searching and viewing the archive, please see
          the information to the below ↓
        </p>
      </section>

      <section className="grid grid-cols-4 lg:gap-0 lg:grid-cols-2 lg:col-start-7 col-span-4 lg:col-span-5 lg:row-start-2 lg:row-span-2">
        <div className="flex flex-col col-span-2 lg:col-span-1 pr-3 lg:p-3">
          <h3 className="font-medium">Using This Guide</h3>
          <p className="mb-3">
            This guide categorizes materials in the archive by format: books,
            catalogs, periodicals, photographs, and manuscripts. You can
            navigate to these options using the tabs at the top of this guide.
          </p>
          <p className="mb-3">
            Additionally, you can find information regarding USU Special
            Collections and Archives Outdoor Recreation Archive Research
            Fellowship{" "}
            <span>
              <Link
                href="/research-fellowship"
                className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
              >
                here
              </Link>
            </span>
            . Applications are accepted September 15 to December 1.
          </p>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1 pl-3 lg:p-3">
          <h3 className="font-medium">Viewing The Archive</h3>
          <p className="mb-3">
            If you find materials you'd like to view, you can do so by visiting
            the SCA Reading Room. Plan your visit{" "}
            <span>
              <a
                href="https://library.usu.edu/archives/about/using"
                target="_blank"
                className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
              >
                here
              </a>
              .
            </span>
          </p>
          <p>
            If you are unable to visit our Reading Room, many materials can be
            digitized for a fee. The fee schedule can be viewed on the page
            linked above.
          </p>
        </div>
      </section>
    </div>
  );
}
