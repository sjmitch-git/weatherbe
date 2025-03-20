"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [city, setCity] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (city.trim()) {
      router.push(`/${city}`);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
