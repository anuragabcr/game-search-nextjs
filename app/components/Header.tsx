"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearch } from "./SearchContext";

export default function Header() {
  const { searchText, setSearchText } = useSearch();
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex flex-row items-center justify-between w-full p-5 dark:bg-gray-900">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="flex-grow mx-4 relative">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.7-5.25a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-900 dark:text-gray-100">Light</span>
        <label htmlFor="theme-toggle" className="relative cursor-pointer">
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only peer"
            onChange={() => setTheme(!theme)}
          />
          <div
            className={`w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer-focus:ring-2 peer-focus:ring-gray-400 ${
              theme && "bg-gray-600"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md dark:bg-gray-800 transform transition-transform ${
                theme && "translate-x-6 "
              } `}
            ></div>
          </div>
        </label>
        <span className="text-gray-900 dark:text-gray-100">Dark</span>
      </div>
    </div>
  );
}
