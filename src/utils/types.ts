export interface IWeatherData {
  weather: {
    code: number;
    description: string;
    icon: string;
  };
  name: string;
  temp: number;
  app_temp: number;
  wind_spd: number;
  rh: number;
  pres: number;
}

export interface IExtendedForecastDataForCities {
  name: string;
  forecast: IExtendedForecastData[];
}

export interface IExtendedForecastData {
  name: string;
  datetime: string;
  max_temp: number;
  low_temp: number;
  weather: {
    code: number;
    description: string;
  };
}

export interface IForecastItemProps {
  day: string;
  weatherCode: number;
  high: number;
  low: number;
  main: string;
}

export interface IForecastProps {
  forecastList: IExtendedForecastDataForCities[];
}
