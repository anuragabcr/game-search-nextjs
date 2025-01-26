"use client";
import Image from "next/image";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

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

export default function MovieCard({ movie }: { movie: MovieCardProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden cursor-pointer text-gray-900 dark:text-gray-100 dark:bg-gray-800"
        onClick={() => setIsOpen(true)}
      >
        <Image
          width={300}
          height={300}
          className="w-full h-64 object-cover"
          src={movie.primaryImage || "/movie.jpg"}
          alt={movie.primaryTitle}
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {movie.primaryTitle}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-100">
            {movie.description?.length > 100
              ? `${movie.description.substring(0, 100)}...`
              : movie.description}
          </p>
          <div className="mt-4">
            <p className="font-bold text-gray-800 dark:text-gray-100">
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
        </div>
      </div>
      <MovieDetails movie={movie} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
