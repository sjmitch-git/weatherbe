export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      date_epoch: number;
      day: {
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }>;
  };
}

export interface CurrentData {
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export interface CurrentWeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}

export interface ForecastData {
  forecastday: Array<{
    date: string;
    date_epoch: number;
    day: {
      avgtemp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }>;
}
