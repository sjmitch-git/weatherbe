"use client";

import { FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { addLocation, removeLocation } from "@store/locationsSlice";

interface BookmarkButtonProps {
  location: string;
}

const BookmarkButton = ({ location }: BookmarkButtonProps) => {
  const dispatch = useDispatch();
  const bookmarkedLocations = useSelector((state: RootState) => state.locations.locations);
  const isBookmarked = bookmarkedLocations.includes(location);

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
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`flex items-center text-xl space-x-2 mt-2 ${
        isBookmarked ? "text-warning hover:text-warning-dark" : "text-info hover:text-info-dark"
      }`}
    >
      <span>{isBookmarked ? "Remove" : "Save"}</span>
      <FaBookmark />
    </button>
  );
};

export default BookmarkButton;
