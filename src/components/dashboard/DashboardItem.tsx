"use client";

import Link from "next/link";
import useFetchCurrent from "@/lib/hooks/useFetchCurrent";
import BookmarkButton from "@components/weather/BookmarkButton";
import Spinner from "@components/ui/Spinner";

const DashboardItem = ({ id }: { id: string }) => {
  const { data, loading, error } = useFetchCurrent(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-error">Error: {error}</p>;
  }

  if (!data) {
    return <p className="text-error">No data available.</p>;
  }

  return (
    <div className="p-2 md:p-4 border rounded shadow-md hover:shadow-lg">
      <Link href={`./${id}`}>
        <h2 className="text-xl font-semibold mb-4">{data.location.name}</h2>
        <div className="flex items-center space-x-2">
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
            className="w-12 md:w-24 h-12 md:h-24"
          />
          <div>
            <p className="text-lg">{data.current.condition.text}</p>
            <p className="text-2xl font-bold">{data.current.temp_c}°C</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Humidity: {data.current.humidity}%</p>
          <p>Wind: {data.current.wind_kph} kph</p>
        </div>
      </Link>
      <div className="flex justify-center">
        <BookmarkButton location={id} />
      </div>
    </div>
  );
};

export default DashboardItem;
