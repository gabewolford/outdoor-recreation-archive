import Link from "next/link";
import PastFellowCard from "../components/Research-Fellowship/PastFellowCard";

export default function ResearchFellowshipPage() {
  return (
    <div className="grid grid-cols-4 gap-9 lg:gap-0 lg:grid-cols-12 lg:grid-rows-3 text-sm">
      <section className="flex flex-col gap-3 col-span-4 lg:col-span-5 lg:row-span-3">
        <p>
          Utah State University Special Collections and Archives is excited to
          announce a research fellowship to support academic and independent
          scholars engaged in scholarly writing, publications, media and art
          projects related to outdoor recreation and the outdoor industry.
          Topics related to diversity and sustainability in the outdoors are
          particularly encouraged.
        </p>
        <p>
          Fellowship stipends are a maximum of $1,500 and are intended to offset
          the cost of visiting USU's Merrill-Cazier Library in Logan, Utah to
          conduct on-site research in the Outdoor Recreation Archive. The
          research period may range from several days to several weeks depending
          on the project.
        </p>
        <p>
          Applicants may request funding up to the full amount of $1,500. The
          Selection Committee will determine the amount of the award based on a
          range of factors including the specific research topic, its relevance
          to the Outdoor Recreation Archive, the amount of time required to
          consult the materials, distance traveled, and need.
        </p>
        <p>
          Please visit our{" "}
          <span>
            <Link
              href="/about"
              className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
            >
              About Page
            </Link>
          </span>{" "}
          for more information about the Outdoor Recreation Archive and the
          materials it contains. Questions about the application process should
          be directed to Clint Pumphrey at{" "}
          <span>
            <a
              href="mailto:clint.pumphrey@usu.edu"
              className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
            >
              clint.pumphrey@usu.edu
            </a>
          </span>{" "}
          or{" "}
          <span>
            <a
              href="tel:+14357970891"
              className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
            >
              (435) 797-0891
            </a>
            .
          </span>
        </p>
        <p className="hidden lg:block">
          Check out some of our past research fellows and their projects →
        </p>
        <p className="lg:hidden">
          Check out some of our past research fellows and their projects ↓
        </p>
        <p className="mt-9">
          <span className="font-medium">Deadlines:</span> Applicants are invited
          for research visits between January 2024 and August 2024. The
          application deadline is December 1, 2023 and applicants will be
          notified of results by December 15, 2023.
        </p>
        <p>
          <span className="font-medium">Eligibility:</span> Faculty, graduate
          students, and independent scholars who are interested in conducting
          primary source-based research at the Outdoor Recreation Archive are
          invited to apply.
        </p>
        <p>
          <span className="font-medium">Application:</span> A complete
          application consists of three parts: the{" "}
          <span>
            <a
              href="/documents/Outdoor_Recreation_Archive_Fellowship_Application.pdf"
              target="_blank"
              className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
            >
              application form
            </a>
          </span>
          , a project proposal, and a curriculum vitae. The project proposal is
          to include a general description or abstract of the research project,
          its title and format, and the applicant's contact details. Applicants
          should also list specific material(s) they intend to consult during
          the desired dates of the fellowship. Successful applications will also
          explain how collections of the Outdoor Recreation Archive are
          essential to the successful completion of the research project.
          Complete applications (including all three parts) must be submitted as
          one PDF document and transmitted as an e-mail attachment to{" "}
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
        <p>
          <span className="font-medium">Highlander Podcast:</span> Each fellow
          is required to complete an interview for the USU Outdoor Product
          Design and Development's Highlander Podcast by the end of the award
          period. The topic of the interview will be the work they completed
          using the Outdoor Recreation Archive.
        </p>
        <p>
          <span className="font-medium">Sponsorships:</span> A generous
          contribution from REI is funding a 2024 Outdoor Recreation Archive
          Research Fellowship.
        </p>
      </section>

      <section className="grid grid-cols-4 lg:gap-0 lg:grid-cols-2 lg:col-start-7 col-span-4 lg:col-span-5 lg:row-start-2 lg:row-span-2">
        <div className="flex flex-col col-span-2 lg:col-span-1 pr-3 lg:p-3">
          <PastFellowCard
            name="Dr. Rachel Gross"
            year="2022"
            affiliation="Assistant Professor of History at Colorado University Denver"
            project={`Two articles, including “The Gender Politics of Do-It-Yourself:
            Frostline Kits and the American Outdoor Equipment Boom of the 1970s"
            and “Boxing in the Outdoors: Cabela's, REI, and the Growth of
            Specialty Retailers”`}
            podcastLink="https://open.spotify.com/episode/2OYcgyKd9XpkTBDhZ78Z5k?si=bXSiEVCxS_KmgxCXChKIwA"
          />
          <PastFellowCard
            name="Stine Danielle"
            year="2022"
            affiliation="Candidate for Masters of Fine Arts, Photography, University of Nebraska-Lincoln"
            project={`A multi-disciplinary art installation exploring the inclusion, participation, and representation of people of color outdoors`}
            podcastLink="https://open.spotify.com/episode/7aiFxqqrRVgI7x2iqKOQ91?si=X5I8c0a3StyKeKNK7ULoMg"
          />
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1 pl-3 lg:p-3">
          <PastFellowCard
            name="Katie Hargrave and Meredith Lynn"
            year="2023"
            affiliation="Associate Professor of Art, University of Tennessee Chattanooga and Assistant Professor, Florida State University, respectively"
            project={`Art installation entitled “A straight line: history, design, and use”`}
          />
          <PastFellowCard
            name="Avery Trufelman"
            year="2023"
            affiliation="Creator of 'Articles Of Interest', a podcast about what we wear"
            project={`A multi-part podcast series about outdoor fashion”`}
          />
        </div>
      </section>
    </div>
  );
}
