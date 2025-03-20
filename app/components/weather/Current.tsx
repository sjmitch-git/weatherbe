"use client";

import { useEffect, useState } from "react";

interface CurrentProps {
  readonly q: string;
}

const Current = ({ q }: CurrentProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/current/${q}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Current Weather</h2>
      {data ? (
        <div>
          <p>Location: {data.location?.name}</p>
          <p>Temperature: {data.current?.temp_c}°C</p>
          <p>Condition: {data.current?.condition?.text}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Current;
