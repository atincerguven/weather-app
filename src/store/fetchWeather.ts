import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IExtendedForecastData,
  IExtendedForecastDataForCities,
  IWeatherData
} from "../utils/types";
import { fetchExtendedForecastData, fetchWeatherData } from "../api/weather";
import { setIsInitial, setIsLoading } from "./reducers/appReducer";
import { cities } from "../utils/consts";
import moment from "moment";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (
    city: string | { lat: number; lng: number } | undefined,
    { dispatch, rejectWithValue, fulfillWithValue }
  ) => {
    dispatch(setIsLoading(true));

    try {
      const callbacks1: Array<Promise<any>> = [];
      const callbacks2: Array<Promise<any>> = [];
      cities.forEach(city => {
        callbacks1.push(fetchWeatherData(city));
        callbacks2.push(fetchExtendedForecastData(city));
      });

      let res = await Promise.all(callbacks1);

      const res2 = await Promise.all(callbacks2);

      res = [...res, ...res2];

      console.log("WeatherBit response", res);

      dispatch(setIsLoading(false));
      return res;
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);

export const transformWeatherData = (
  res: any
): {
  weathers: IWeatherData[];
  forecastForCities: IExtendedForecastDataForCities[];
} => {
  const weathers = [];
  let forecast: IExtendedForecastData[] = [];
  const forecastForCities: IExtendedForecastDataForCities[] = [];
  let i = 0;

  while (i < cities.length) {
    const data = res[i].data[0];
    const weather = {} as IWeatherData;
    weather.weather = {
      code: data.weather.code,
      description: data.weather.description,
      icon: data.weather.icon
    };

    weather.name = data.city_name;
    weather.temp = data.temp;
    weather.app_temp = data.app_temp;
    weather.pres = data.pres;
    weather.rh = data.rh;
    weather.wind_spd = data.wind_spd;
    weathers.push(weather);
    i++;
  }

  let forecastCityCount = cities.length;
  while (forecastCityCount < 2 * cities.length) {
    forecast = [];
    res[forecastCityCount].data.forEach((daily: any, index: number) => {
      forecast.push({
        name: daily.city_name,
        datetime: moment(daily.datetime).format("MMM Do"),
        max_temp: daily.max_temp,
        low_temp: daily.low_temp,
        weather: {
          code: daily.weather.code,
          description: daily.weather.description
        }
      });
    });
    forecastForCities.push({
      name: res[forecastCityCount].city_name,
      forecast: forecast
    });
    forecastCityCount++;
  }

  return {
    weathers,
    forecastForCities
  };
};
