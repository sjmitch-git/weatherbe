import { Metadata } from "next";
import { WeatherData } from "@/lib/types";
import Current from "@components/weather/Current";
import Forecast from "@components/weather/Forecast";
import BookmarkButton from "@components/weather/BookmarkButton";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const weather = await fetchForecastData(id);

  return {
    title: `${weather.location.name}, ${weather.location.country} - current weather`,
    description: `Get the latest weather forecast for ${weather.location.name}`,
  };
}

const ForecastlPage = async ({ params }: Props) => {
  const { id } = await params;

  let weather: WeatherData | null = null;
  let error: string | null = null;

  try {
    weather = await fetchForecastData(id);
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
      <div className="mb-8 relative">
        <div className="flex flex-col">
          <h1 className="text-4xl mb-8 font-semibold">{weather.location.name}</h1>
          <h2 className="text-2xl mb-4">
            {weather.location.region}, {weather.location.country}
          </h2>
        </div>
        <div className="absolute right-0 top-0">
          <BookmarkButton location={weather.location.name} />
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
          <Current data={{ current: weather.current }} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">5-day Forecast</h2>
          <Forecast data={{ forecastday: weather.forecast.forecastday }} />
        </div>
      </div>
    </article>
  );
};

export default ForecastlPage;
