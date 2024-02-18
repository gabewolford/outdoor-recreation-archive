import ExternalLink from "../About/ExternalLink";

export default function PastFellowCard({
  name,
  affiliation,
  description,
  linkText,
  podcastUrl,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-[13px] text-gray-subtext italic leading-[18.2px] mb-2">
          {affiliation}
        </p>

        <p className="mb-1">{description}</p>
        <ExternalLink text={linkText} linkTo={podcastUrl} />
      </div>
    </div>
  );
}
