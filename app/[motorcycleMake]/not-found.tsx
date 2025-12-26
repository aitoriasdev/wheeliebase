import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Motorcycle brand not found</h2>
      <p className="text-gray-600 mt-2">
        We couldn't find any models for this brand.
      </p>
      <Link href="/home">Return Home</Link>
    </div>
  );
}
