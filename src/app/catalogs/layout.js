import BreadcrumbsWithTitle from "../components/BreadcrumbsWithTitle";
import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-gray-main">
      <TheHeader />
      <BreadcrumbsWithTitle title="Outdoor Recreation Catalogs" />
      <div className="lg:grid grid-cols-12">{children}</div>
    </main>
  );
}
