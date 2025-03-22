import { CurrentData } from "@lib/types";

const Current = ({ data }: { data: CurrentData }) => {
  const { temp_c, humidity, wind_kph, condition } = data.current;

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="flex items-center justify-between space-x-2 md:space-x-8">
        <div className="flex max-sm:flex-col items-center">
          <img src={condition.icon} alt={condition.text} className="w-12 md:w-24 h-12 md:h-24" />
          <p className="text-2xl">{condition.text}</p>
        </div>

        <div>
          <p className="text-base md:text-lg text-right">Temp.</p>
          <p className="text-lg md:text-2xl font-bold">{temp_c}°C</p>
        </div>
        <div>
          <p className="text-base md:text-lg">Humidity</p>
          <p className="text-lg md:text-2xl font-bold text-right">{humidity}%</p>
        </div>
        <div>
          <p className="text-base md:text-lg">Wind Speed</p>
          <p className="text-lg md:text-2xl font-bold text-right">{wind_kph} kph</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
