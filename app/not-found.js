import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">404</h1>
      <p className="mt-3 text-lg text-neutral-600">Page not found</p>
      <Link href="/" className="mt-6 inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
        Go back home
      </Link>
    </div>
  );
}
