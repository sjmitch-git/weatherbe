"use client";

import dynamic from "next/dynamic";

const Search = dynamic(() => import("@components/weather/Search"), {
  ssr: false,
});

export default function Nav() {
  return (
    <div className="flex items-center">
      <Search />
    </div>
  );
}
