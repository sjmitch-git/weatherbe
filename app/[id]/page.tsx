import { WeatherData } from "@/lib/types";
import Current from "@components/weather/Current";
import Bookmark from "@components/weather/Bookmark";

type Props = {
  params: Promise<{ id: string }>;
};

const fetchForecastData = async (id: string): Promise<WeatherData> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forecast/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${id}`);
  }
  const data: WeatherData = await response.json();
  return data;
};

const ForecastlPage = async ({ params }: Props) => {
  const { id } = await params;

  let weather: WeatherData | null = null;
  let error: string | null = null;

  try {
    weather = await fetchForecastData(id);
    console.log("weather", weather);
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "An unknown error occurred";
    }
  }

  if (error) {
    return <p className="text-error font-semibold">{error}</p>;
  }

  if (!weather) {
    return <p className="text-error font-semibold">City not found</p>;
  }

  return (
    <article>
      <h1 className="text-4xl mb-8">{weather.location.name}</h1>
      <h2 className="text-2xl mb-4">
        {weather.location.region}, {weather.location.country}
      </h2>
      <div className="flex justify-between items-center mb-4">
        <Bookmark location={weather.location.name} />
      </div>
      <Current data={{ current: weather.current }} />
    </article>
  );
};

export default ForecastlPage;
