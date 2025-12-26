export default function Footer() {
  const date = new Date();

  return (
    <footer className="px-6 py-4 text-gray-600">
      {date.getFullYear()} &copy; Aitorias
    </footer>
  );
}
