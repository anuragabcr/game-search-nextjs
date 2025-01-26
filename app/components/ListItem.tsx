"use client";
import { makeAPIRequest } from "@/config/apiConfig";
import useSWR from "swr";
import Loading from "./Loading";
import ErrorHandling from "./ErrorHandling";
import { useEffect } from "react";

const fetcher = (url: string) => makeAPIRequest(url);

export default function ListItem({
  selectedGenre,
  setGenreSelected,
}: {
  selectedGenre: string;
  setGenreSelected: (genre: string) => void;
}) {
  const { data, error, isLoading } = useSWR("/genres", fetcher);

  useEffect(() => {
    if (data && data.length > 0) {
      setGenreSelected(data[0]);
    }
  }, [data, setGenreSelected]);

  if (error) return <ErrorHandling />;
  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-between w-full p-4">
      <p className="p-2 font-bold from-orange-200 text-2xl">Genres</p>
      {data?.map((item: string, index: number) => (
        <div
          key={index}
          className={`flex flex-row items-center justify-between cursor-pointer rounded-sm w-full  ${
            selectedGenre === item ? "bg-blue-500" : "hover:bg-blue-200"
          }`}
          onClick={() => setGenreSelected(item)}
        >
          <p className="p-2 font-medium">{item}</p>
        </div>
      ))}
    </div>
  );
}
