"use client";

import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@components/dashboard/Dashboard"), {
  ssr: false,
});

const Common = () => {
  return (
    <div className="space-y-12">
      <hr />
      <Dashboard />
    </div>
  );
};

export default Common;
