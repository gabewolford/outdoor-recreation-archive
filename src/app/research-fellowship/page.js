import Link from "next/link";
import TheHeader from "../components/TheHeader";
import PastFellowCard from "../components/Research-Fellowship/PastFellowCard";

export default function ResearchFellowshipPage() {
  const pastFellows = [
    {
      year: 2023,
      name: "Katie Hargrave and Meredith Lynn",
      affiliation:
        "Assistant Professor of Art, University of Tennessee Chattanooga and Assistant Professor, Florida State University, respectively",
      description:
        "Art installation entitled “A straight line: history, design, and use”",
      linkText: "Listen to the podcast",
      podcastUrl:
        "https://open.spotify.com/episode/7iEqlZphN7Q7aTB4UNfJBv?si=6181e24354ab468e",
    },
    {
      year: 2023,
      name: "Avery Trufelman",
      affiliation:
        "Creator of 'Articles of Interest', a podcast about what we wear",
      description:
        "Art installation entitled “A straight line: history, desA multi-part podcast series about outdoor fashion",
      linkText: "Listen to the podcast",
      podcastUrl:
        "https://open.spotify.com/episode/6maL1vwjIOiWgBlqReZ9vR?si=81d8a5fd98594af6",
    },
    {
      year: 2022,
      name: "Dr. Rachel Gross",
      affiliation:
        "Assistant Professor of History at Colorado University Denver",
      description:
        "A multi-disciplinary art installation exploring the inclusion, participation, and representation of people of color outdoors",
      linkText: "Listen to the podcast",
      podcastUrl:
        "https://open.spotify.com/episode/2OYcgyKd9XpkTBDhZ78Z5k?si=bXSiEVCxS_KmgxCXChKIwA",
    },
    {
      year: 2022,
      name: "Stine Danielle",
      affiliation:
        "Candidate for Masters of Fine Arts, Photography, University of Nebraska-Lincoln",
      description:
        "Two articles, including 'The Gender Politics of Do-It-Yourself: Frostline Kits and the American Outdoor Equipment Boom of the 1970s' and 'Boxing in the Outdoors: Cabela's, REI, and the Growth of Specialty Retailers'",
      linkText: "Listen to the podcast",
      podcastUrl:
        "https://open.spotify.com/episode/7aiFxqqrRVgI7x2iqKOQ91?si=X5I8c0a3StyKeKNK7ULoMg",
    },
  ];

  const fellows2023 = pastFellows.filter((fellow) => fellow.year === 2023);
  const fellows2022 = pastFellows.filter((fellow) => fellow.year === 2022);

  return (
    <main className="p-3 grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-6">
      <section className="flex flex-col col-span-4 lg:col-span-5 lg:row-span-6 mb-6 lg:mb-0">
        <TheHeader title="Research fellowship" />
        <div className="flex flex-col gap-3 mb-12">
          <p>
            Utah State University Special Collections and Archives is excited to
            announce a research fellowship to support academic and independent
            scholars engaged in scholarly writing, publications, media and art
            projects related to outdoor recreation and the outdoor industry.
            Topics related to diversity and sustainability in the outdoors are
            particularly encouraged.
          </p>
          <p>
            Fellowship stipends are a maximum of $1,500 and are intended to
            offset the cost of visiting USU's Merrill-Cazier Library in Logan,
            Utah to conduct on-site research in the Outdoor Recreation Archive.
            The research period may range from several days to several weeks
            depending on the project.
          </p>
          <p>
            Applicants may request funding up to the full amount of $1,500. The
            Selection Committee will determine the amount of the award based on
            a range of factors including the specific research topic, its
            relevance to the Outdoor Recreation Archive, the amount of time
            required to consult the materials, distance traveled, and need.
          </p>
          <p>
            Please visit our{" "}
            <Link href="/about" className="underline underline-offset-4">
              About Page
            </Link>{" "}
            for more information about the Outdoor Recreation Archive and the
            materials it contains. Questions about the application process
            should be directed to Clint Pumphrey at{" "}
            <a
              href="mailto:clint.pumphrey@usu.edu"
              target="_blank"
              className="underline underline-offset-4"
            >
              clint.pumphrey@usu.edu
            </a>{" "}
            or{" "}
            <a
              href="tel:14357970891"
              target="_blank"
              className="underline underline-offset-4"
            >
              (435) 797-0891
            </a>
            .
          </p>
          <p>
            Check out some of our past research fellows and their projects ↓
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm mb-12">
          <h2 className="text-[25px]">2023</h2>
          <ul className="flex flex-col gap-4">
            {fellows2023.map((fellow, index) => (
              <li key={index}>
                <PastFellowCard
                  name={fellow.name}
                  affiliation={fellow.affiliation}
                  description={fellow.description}
                  podcastUrl={fellow.podcastUrl}
                  linkText={fellow.linkText}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 text-sm mb-12">
          <h2 className="text-[25px]">2022</h2>
          <ul className="flex flex-col gap-4">
            {fellows2022.map((fellow, index) => (
              <li key={index}>
                <PastFellowCard
                  name={fellow.name}
                  affiliation={fellow.affiliation}
                  description={fellow.description}
                  podcastUrl={fellow.podcastUrl}
                  linkText={fellow.linkText}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-6 col-span-4 lg:col-start-7 lg:col-span-5 lg:row-start-3 lg:row-span-3 text-sm mb-12">
        <h2 className="text-[25px]">Apply</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Deadlines</h3>
              <p>
                Applicants are invited for research visits between January 2024
                and August 2024. The application deadline is December 1, 2023
                and applicants will be notified of results by December 15, 2023.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Eligibility</h3>
              <p>
                Faculty, graduate students, and independent scholars who are
                interested in conducting primary source-based research at the
                Outdoor Recreation Archive are invited to apply.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Highlander Podcast</h3>
              <p>
                Each fellow is required to complete an interview for the USU
                Outdoor Product Design and Development's Highlander Podcast by
                the end of the award period. The topic of the interview will be
                the work they completed using the Outdoor Recreation Archive.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Sponsorships</h3>
              <p>
                A generous contribution from REI is funding a 2024 Outdoor
                Recreation Archive Research Fellowship.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Application</h3>
              <p>
                A complete application consists of three parts: the{" "}
                <a
                  href="/documents/Outdoor_Recreation_Archive_Fellowship_Application.pdf"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  application form
                </a>
                , a project proposal, and a curriculum vitae. The project
                proposal is to include a general description or abstract of the
                research project, its title and format, and the applicant's
                contact details. Applicants should also list specific
                material(s) they intend to consult during the desired dates of
                the fellowship. Successful applications will also explain how
                collections of the Outdoor Recreation Archive are essential to
                the successful completion of the research project. Complete
                applications (including all three parts) must be submitted as
                one PDF document and transmitted as an e-mail attachment to{" "}
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
          </div>
        </div>
      </section>
    </main>
  );
}
