import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3">
      <TheHeader title="Periodical collection" />
      {children}
    </main>
  );
}
