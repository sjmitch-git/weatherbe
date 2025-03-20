"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Dashboard = () => {
  const locations = useSelector((state: RootState) => state.locations.locations);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {locations.length === 0 ? (
        <p className="text-gray-500">No bookmarked locations yet.</p>
      ) : (
        <ul className="space-y-2">
          {locations.map((location, index) => (
            <li key={index} className="p-2 border rounded shadow">
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
