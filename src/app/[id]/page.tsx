import { Metadata } from "next";
import { WeatherData } from "@/lib/types";
import Current from "@components/weather/Current";
import Forecast from "@components/weather/Forecast";
import BookmarkButton from "@components/weather/BookmarkButton";

type Props = {
  params: Promise<{ id: string }>;
};

const fetchForecastData = async (id: string): Promise<WeatherData | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forecast/${id}`);
    if (!response.ok) {
      return null;
    }
    const data: WeatherData = await response.json();
    return data;
  } catch {
    return null;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const weather = await fetchForecastData(id);

  if (!weather) {
    return {
      title: "Error",
    };
  }

  return {
    title: `${weather.location.name}, ${weather.location.country} - current weather`,
    description: `Get the latest weather forecast for ${weather.location.name}`,
    metadataBase: process.env.NEXT_PUBLIC_API_URL
      ? new URL(process.env.NEXT_PUBLIC_API_URL)
      : undefined,
    openGraph: {
      title: `${weather.location.name}, ${weather.location.region} - Weather Forecast`,
      description: `Get the latest weather forecast for ${weather.location.name}, ${weather.location.region}, including current conditions and a 5-day forecast.`,
      url: `https://weatherbe.vercel.app/${id}`,
      siteName: "Weather Be",
      images: [
        {
          url: weather.current.condition.icon,
          width: 40,
          height: 40,
          alt: `${weather.location.name} Weather`,
        },
      ],
      type: "website",
    },
  };
}

const ForecastlPage = async ({ params }: Props) => {
  const { id } = await params;

  const weather = await fetchForecastData(id);

  if (!weather) {
    return (
      <article>
        <p className="text-error font-semibold">
          City not found. Please check the search query and try again.
        </p>
      </article>
    );
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
          <BookmarkButton location={`${weather.location.name},${weather.location.region}`} />
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
