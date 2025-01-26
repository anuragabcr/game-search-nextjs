import useSWR from "swr";
import ErrorHandling from "./ErrorHandling";
import Loading from "./Loading";
import { makeAPIRequest } from "@/config/apiConfig";
import MovieCard from "./MovieCard";
import { useSearch } from "./SearchContext";

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

const fetcher = (url: string) => makeAPIRequest(url);

export default function Movies({ selectedGenre }: { selectedGenre: string }) {
  const { data, error, isLoading } = useSWR(
    `/search?genre=${selectedGenre}`,
    fetcher
  );
  const { searchText } = useSearch();

  if (error) return <ErrorHandling />;
  if (isLoading) return <Loading />;

  const filteredMovies = data?.results?.filter((movie: MovieCardProps) => {
    const search = searchText.toLowerCase();

    return (
      movie.primaryTitle?.toLowerCase().includes(search) ||
      movie.originalTitle?.toLowerCase().includes(search) ||
      movie.description?.toLowerCase().includes(search) ||
      movie.genres?.some((genre: string) =>
        genre.toLowerCase().includes(search)
      ) ||
      movie.spokenLanguages?.some((language: string) =>
        language.toLowerCase().includes(search)
      ) ||
      movie.productionCompanies?.some((company: { name: string }) =>
        company.name.toLowerCase().includes(search)
      )
    );
  });

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">
        {selectedGenre} Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredMovies?.map((movie: MovieCardProps) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
