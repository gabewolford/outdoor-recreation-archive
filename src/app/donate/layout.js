import BreadcrumbsWithTitle from "../components/BreadcrumbsWithTitle";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-sm text-gray-main">
      <BreadcrumbsWithTitle />
      {children}
    </main>
  );
}
