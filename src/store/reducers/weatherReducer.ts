import { createSlice } from "@reduxjs/toolkit";
import {
  IExtendedForecastDataForCities,
  IWeatherData
} from "../../utils/types";
import { fetchWeather, transformWeatherData } from "../fetchWeather";
import { mockWeatherData, mockForecastData } from "./mockData";
export interface IWeatherState {
  weatherData: IWeatherData[];
  extendedWeatherData: IExtendedForecastDataForCities[];
  isError: boolean;
}

const initialState: IWeatherState = {
  weatherData: mockWeatherData,
  // weatherData: [
  //   {
  //     name: "",
  //     temp: 0,
  //     app_temp: 0,
  //     wind_spd: 0,
  //     rh: 0,
  //     pres: 0,
  //     weather: {
  //       code: 0,
  //       description: "",
  //       icon: ""
  //     }
  //   }
  // ],
  extendedWeatherData: mockForecastData,
  isError: false
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = transformWeatherData(action.payload);
        state.weatherData = res.weathers;
        state.extendedWeatherData = res.forecastForCities;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isError = true;
      });
  }
});

export default weatherSlice.reducer;
