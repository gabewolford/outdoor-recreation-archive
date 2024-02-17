import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3 text-gray-main">
      <TheHeader />
      {children}
    </main>
  );
}
