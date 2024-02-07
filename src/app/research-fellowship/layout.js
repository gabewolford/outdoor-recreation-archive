import Breadcrumbs from "../components/Breadcrumbs";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-sm text-gray-main">
      <Breadcrumbs />
      {children}
    </main>
  );
}
