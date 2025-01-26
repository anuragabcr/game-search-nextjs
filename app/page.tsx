"use client";
import { useState } from "react";
import ListItem from "./components/ListItem";
import Movies from "./components/Movies";

export default function Home() {
  const [selectedGenre, setGenreSelected] = useState("");
  return (
    <main className="flex text-gray-900 dark:text-gray-100 dark:bg-gray-900 p-5">
      <div className="w-[15vw]">
        <ListItem
          selectedGenre={selectedGenre}
          setGenreSelected={setGenreSelected}
        />
      </div>
      <div className="w-[85vw]">
        <Movies selectedGenre={selectedGenre} />
      </div>
    </main>
  );
}
