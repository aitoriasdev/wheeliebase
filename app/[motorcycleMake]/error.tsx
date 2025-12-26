'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  return (
    <div className="p-6 border rounded-md bg-red-50">
      <h2 className="text-lg font-semibold text-red-700">
        Failed to load motorcycles
      </h2>

      <p className="text-sm text-red-600 mt-2">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
