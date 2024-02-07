import BreadcrumbsWithTitle from "../components/BreadcrumbsWithTitle";
import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-sm text-gray-main">
      <TheHeader />
      <BreadcrumbsWithTitle title="Donate To The Archive" />
      {children}
    </main>
  );
}
