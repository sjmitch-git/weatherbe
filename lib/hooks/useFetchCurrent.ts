import { useState, useEffect } from "react";
import { CurrentWeatherData } from "@lib/types";

interface UseFetchCurrentResult {
  data: CurrentWeatherData | null;
  loading: boolean;
  error: string | null;
}

const useFetchCurrent = (id: string): UseFetchCurrentResult => {
  const [data, setData] = useState<CurrentWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/current/${id}`);
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

    if (id) {
      fetchData();
    }
  }, [id]);

  return { data, loading, error };
};

export default useFetchCurrent;
