import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/wyckhc98fqfldjgrbmfc.jpg')] grid min-h-full place-items-center bg-no-repeat bg-cover relative bg-blend-multiply h-screen px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center relative z-10">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
