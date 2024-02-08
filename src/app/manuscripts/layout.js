import BreadcrumbsWithTitle from "../components/BreadcrumbsWithTitle";
import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-gray-main">
      <TheHeader />
      <BreadcrumbsWithTitle title="Manuscript Collection" />
      {children}
    </main>
  );
}
