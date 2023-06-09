'use client'; // Error components must be Client components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='border-red-700 bg-red-900 p-4 border-2'>
      <h2>Something went wrong in Board!</h2>
      <button
        className='px-4 py-2 bg-red-600 rounded hover:bg-red-500'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
