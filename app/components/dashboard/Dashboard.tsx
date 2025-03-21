"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import DashboardItem from "@components/dashboard/DashboardItem";

const Dashboard = () => {
  const locations = useSelector((state: RootState) => state.locations.locations as string[]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {locations.length === 0 ? (
        <p className="text-info font-semibold">No bookmarked locations yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {locations.map((location, index) => (
            <li key={location}>
              <DashboardItem id={location} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
