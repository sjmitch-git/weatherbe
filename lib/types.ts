export interface ForecastData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  forecast?: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
        };
      };
    }>;
  };
}
