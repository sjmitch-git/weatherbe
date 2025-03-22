import { ForecastData } from "@lib/types";

interface ForecastProps {
  data: ForecastData;
}

const Forecast = ({ data }: ForecastProps) => {
  const { forecastday } = data;

  return (
    <div className="grid grid-cols-5 gap-2">
      {forecastday.map((day, index) => {
        const dayOfWeek = new Date(day.date_epoch * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        });

        return (
          <div
            key={day.date_epoch}
            className="border rounded shadow-md flex flex-col justify-center p-2"
          >
            <p className="font-semibold text-lg text-center">{dayOfWeek}</p>
            <figure className="flex justify-center">
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                width={64}
                height={64}
              />
            </figure>
            <p className="font-semibold text-lg text-center">{day.day.avgtemp_c}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
