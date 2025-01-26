import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";

type MovieCardProps = {
  id: string;
  primaryTitle: string;
  originalTitle: string;
  type: string;
  description: string;
  primaryImage: string;
  contentRating: string | null;
  isAdult: boolean;
  releaseDate: string;
  startYear: number;
  endYear: number | null;
  runtimeMinutes: number;
  genres: string[];
  interests: string[];
  countriesOfOrigin: string[];
  externalLinks: string[];
  spokenLanguages: string[];
  filmingLocations: string | null;
  productionCompanies: { id: string; name: string }[];
  budget: number | null;
  grossWorldwide: number | null;
  averageRating: number | null;
  numVotes: number | null;
};

export default function MovieDetails({
  movie,
  isOpen,
  setIsOpen,
}: {
  movie: MovieCardProps;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 "
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl rounded-xl bg-white p-6 backdrop-blur-md text-gray-900 dark:text-gray-100 dark:bg-gray-800">
            <div className="mb-4">
              <Image
                layout="responsive"
                width={800}
                height={600}
                src={movie.primaryImage || "/movie.jpg"}
                alt={movie.primaryTitle}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <DialogTitle
              as="h3"
              className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {movie.primaryTitle} ({movie.startYear})
            </DialogTitle>

            <p className="text-gray-500 mt-2 dark:text-gray-100">
              {movie.description}
            </p>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Genres:
              </p>
              <ul className="flex space-x-2">
                {movie.genres.map((genre, index) => (
                  <li key={index} className="text-blue-600 text-sm">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Release Date:
              </p>
              <p className="text-gray-700 dark:text-gray-100">
                {movie.releaseDate}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Runtime:
              </p>
              <p className="text-gray-700 dark:text-gray-100">
                {movie.runtimeMinutes} minutes
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Spoken Languages:
              </p>
              <ul className="flex space-x-2">
                {movie.spokenLanguages?.map((lang, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-100">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Production Companies:
              </p>
              <ul>
                {movie.productionCompanies.map((company) => (
                  <li
                    key={company.id}
                    className="text-gray-700 dark:text-gray-100"
                  >
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800 dark:text-gray-100">
                External Links:
              </p>
              {movie?.externalLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 "
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner hover:bg-gray-600 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
