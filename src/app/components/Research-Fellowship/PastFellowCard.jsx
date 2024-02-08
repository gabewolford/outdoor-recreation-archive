export default function PastFellowCard({
  name,
  year,
  affiliation,
  project,
  podcastLink,
}) {
  return (
    <div className="pb-4">
      <p className="font-medium">
        {name}, {year}
      </p>
      <p className="mb-2">{affiliation}</p>
      <p className="font-medium">Project</p>
      <p className="mb-2">{project}</p>
      <p className="font-medium">Podcast</p>
      {podcastLink ? (
        <p className="mb-2">
          <a
            href={podcastLink}
            target="_blank"
            className="text-blue-main font-medium hover:text-gray-main hover:underline-offset-4 hover:underline"
          >
            Listen
          </a>
        </p>
      ) : (
        <p className="mb-2">Coming soon</p>
      )}
    </div>
  );
}
