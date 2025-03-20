import type { Metadata } from "next";
import Dashboard from "@components/dashboard/Dashboard";

export default function IndexPage() {
  return <Dashboard />;
}

export const metadata: Metadata = {
  title: "Weather Be",
};
