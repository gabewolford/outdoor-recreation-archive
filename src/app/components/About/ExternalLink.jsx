export default function ExternalLink({ text, linkTo }) {
  return (
    <a
      href={linkTo}
      target="_blank"
      className="text-blue-main underline underline-offset-4"
    >
      {text}
    </a>
  );
}
