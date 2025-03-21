"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [city, setCity] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (city.trim()) {
      router.push(`/${city}`);
    }
  };

  return (
    <div className="flex items-center space-x-0 bg-primary">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border border-primary w-36 rounded-none px-2 py-1 focus-visible:outline-none focus:border-accent"
      />
      <button
        onClick={handleSearch}
        className="bg-primary flex flex-grow items-center gap-2 rounded-none text-white px-4 py-2 md:py-1 hover:bg-primary-dark"
      >
        <FaSearch /> <span className="max-sm:hidden">Search</span>
      </button>
    </div>
  );
};

export default Search;
