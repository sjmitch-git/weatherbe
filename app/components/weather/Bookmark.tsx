"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addLocation, removeLocation } from "@/lib/locationsSlice";

interface BookmarkProps {
  location: string;
}

const Bookmark = ({ location }: BookmarkProps) => {
  const dispatch = useDispatch();
  const bookmarkedLocations = useSelector((state: RootState) => state.locations.locations);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(bookmarkedLocations.includes(location));
  }, [bookmarkedLocations, location]);

  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeLocation(location));
      const updatedLocations = bookmarkedLocations.filter((loc) => loc !== location);
      localStorage.setItem("locations", JSON.stringify(updatedLocations));
    } else {
      dispatch(addLocation(location));
      const updatedLocations = [...bookmarkedLocations, location];
      localStorage.setItem("locations", JSON.stringify(updatedLocations));
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`px-4 py-2 rounded ${
        isBookmarked ? "bg-red-500 text-white" : "bg-blue-500 text-white"
      }`}
    >
      {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
    </button>
  );
};

export default Bookmark;
