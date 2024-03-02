export default function SearchIcon({ strokeColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <path
        d="M28.5 28.5L20.705 20.705M20.705 20.705C22.7408 18.6691 24 15.8566 24 12.75C24 6.5368 18.9632 1.5 12.75 1.5C6.5368 1.5 1.5 6.5368 1.5 12.75C1.5 18.9632 6.5368 24 12.75 24C15.8566 24 18.6691 22.7408 20.705 20.705Z"
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
