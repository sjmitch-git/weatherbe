import { ForecastData } from "@/lib/types";

type Props = {
  params: Promise<{ id: string }>;
};

const fetchForecastData = async (id: string): Promise<ForecastData> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/forecast/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${id}`);
  }
  const data: ForecastData = await response.json();
  return data;
};

const ForecastlPage = async ({ params }: Props) => {
  const { id } = await params;

  let forecast: ForecastData | null = null;
  let error: string | null = null;

  try {
    forecast = await fetchForecastData(id);
    console.log("forecast", forecast);
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

  if (!forecast) {
    return <p className="text-error font-semibold">City not found</p>;
  }

  return (
    <article>
      <h1 className="text-4xl mb-8">{forecast.location.name}</h1>
      <h2 className="text-2xl mb-4">
        {forecast.location.region}, {forecast.location.country}
      </h2>
    </article>
  );
};

export default ForecastlPage;
