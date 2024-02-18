import TheHeader from "../components/TheHeader";

export default function Layout({ children }) {
  return (
    <main className="p-3">
      <TheHeader title="Donating to the archive" />
      {children}
    </main>
  );
}
