import Link from "next/link";
import TheHeader from "../components/TheHeader";
import ExternalLink from "../components/About/ExternalLink";

export default function AboutPage() {
  const pressLinks = [
    {
      outlet: "Outside Magazine",
      url: "https://www.outsideonline.com/business-journal/issues/archiving-the-history-of-the-outdoor-industry/",
    },
    {
      outlet: "Gear Patrol",
      url: "https://www.gearpatrol.com/outdoors/a36412628/utah-state-university-outdoor-recreation-archive/",
    },
    {
      outlet: "Hypebeast",
      url: "https://hypebeast.com/2020/11/outdoor-recreation-archive-utah-university-interview",
    },
    {
      outlet: "Subukaru Magazine",
      url: "https://sabukaru.online/articles/outdoor-recreation-archive",
    },
    {
      outlet: "Mountain Gazette",
      url: "https://mountaingazette.com/blogs/mountain-notes/feature-usu-outdoor-recreation-archive",
    },
    {
      outlet: "Design Reviewed",
      url: "https://designreviewed.com/the-outdoor-recreation-archive/",
    },
    {
      outlet: "Field Mag",
      url: "https://www.fieldmag.com/articles/outdoor-recreation-archive-vintage-camp-gear-instagram",
    },
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/outdoorrecarchive/",
    },
    {
      platform: "Threads",
      url: "https://www.threads.net/@outdoorrecarchive",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/outdoorrecarchive/",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/Outdoor_Archive",
    },
  ];

  return (
    <main className="p-3 grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-6 border border-blue-500">
      <section className="flex flex-col col-span-4 lg:col-span-5 lg:row-span-4 mb-12">
        <TheHeader title="Introduction" />
        <div className="flex flex-col gap-3">
          <p>
            In 2017, USU Special Collections and Archives (SCA) partnered with
            the College of Agriculture and Applied Science's Outdoor Product
            Design and Development (OPDD) program to develop a historical
            collection of books, catalogs, periodicals, photographs, and
            manuscripts documenting the history of outdoor gear. These
            materials, together with the strong environmental collections SCA
            has already built since the early 1970s, form the Outdoor Recreation
            Archive, which is highlighted in this guide.
          </p>
          <p>
            As a public institution, SCA strives to make its collections
            accessible to anyone, from professional researchers to those with a
            more casual interest in the outdoor industry. These materials are
            particularly beneficial to students in the OPDD program, who
            represent the next generation of leaders in the outdoor industry.
            The Outdoor Recreation Archive gives these students easy access to
            historical records from which to better understand the past while
            drawing inspiration for the future.
          </p>
          <p>
            For instructions on donating to the archive, please visit our{" "}
            <Link href="/donate" className="underline underline-offset-4">
              Donate Page
            </Link>
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
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 col-span-4 lg:col-start-7 lg:col-span-5 lg:row-start-4 lg:row-span-3 text-sm mb-12">
        <div className="flex flex-col flex-1 gap-6 lg:gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Using This Guide</h3>
            <p>
              This guide categorizes materials in the archive by format: books,
              catalogs, magazines, manuscripts, periodicals, and photographs.
              You can navigate to these different categories via the home page.
            </p>
            <p>
              Additionally, you can find information regarding USU Special
              Collections and Archives Outdoor Recreation Archive Fellowship{" "}
              <Link
                href="/research-fellowship"
                className="underline underline-offset-4"
              >
                here
              </Link>
              . Applications are accepted September 15 to December 1.
            </p>
          </div>

          <div className="flex flex-col lg:hidden gap-1">
            <h3 className="font-semibold">Viewing The Archive</h3>
            <p>
              If you find materials you'd like to view, you can do so by
              visiting the SCA Reading Room. Plan your visit{" "}
              <a
                href="https://library.usu.edu/archives/about/using"
                target="_blank"
                className="underline underline-offset-4"
              >
                here
              </a>
              .
            </p>
            <p>
              If you are unable to visit our Reading Room, many materials can be
              digitized for a fee. The fee schedule can be viewed on the page
              linked above.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Press</h3>
            <ul className="flex flex-col gap-1">
              {pressLinks.map((article, index) => (
                <li key={index}>
                  <ExternalLink text={article.outlet} linkTo={article.url} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex lg:hidden flex-col gap-1">
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="flex flex-col gap-1">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <ExternalLink text={social.platform} linkTo={social.url} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex flex-col flex-1 gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Viewing The Archive</h3>
            <p>
              If you find materials you'd like to view, you can do so by
              visiting the SCA Reading Room. Plan your visit{" "}
              <a
                href="https://library.usu.edu/archives/about/using"
                target="_blank"
                className="underline underline-offset-4"
              >
                here
              </a>
              .
            </p>
            <p>
              If you are unable to visit our Reading Room, many materials can be
              digitized for a fee. The fee schedule can be viewed on the page
              linked above.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="flex flex-col gap-1">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <ExternalLink text={social.platform} linkTo={social.url} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
