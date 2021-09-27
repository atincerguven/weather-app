import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as HumidityIcon } from "../../assets/humidity-icon.svg";
import { ReactComponent as PressureIcon } from "../../assets/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../../assets/wind-icon.svg";
import { AppStore } from "../../store/store";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  InfoRow,
  WeatherContainer
} from "./styled";
import { IWeatherData } from "../../utils/types";

const Weather: React.FC = () => {
  const { weatherList, isInitial, isError } = useSelector(
    (store: AppStore) => ({
      weatherList: store.weather.weatherData,
      isInitial: store.app.isInitial,
      isError: store.weather.isError
    })
  );

  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place");
    }
  }, [isError]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {weatherList.map((weather: IWeatherData, index: number) => (
        <WeatherContainer key={index}>
          <CurrentWeatherContainer>
            <CurrentWeather>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{weather.name}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <WeatherIcon code={weather.weather.code} big />
                <span>
                  {weather.temp}
                  <sup>&deg;</sup>
                </span>
              </div>
              <h6>{weather.weather.description}</h6>
            </CurrentWeather>

            <CurrentWeatherInfo>
              <FeelsLike>
                Feels like {weather.app_temp}
                <sup>&deg;</sup>
              </FeelsLike>
              <InfoRow>
                <div>
                  <HumidityIcon /> Humidity
                </div>
                <span>{weather.rh}%</span>
              </InfoRow>
              <InfoRow>
                <div>
                  <WindIcon /> Wind
                </div>
                <span>{weather.wind_spd} kph</span>
              </InfoRow>
              <InfoRow>
                <div>
                  <PressureIcon /> Pressure
                </div>
                <span>{weather.pres}hPa</span>
              </InfoRow>
            </CurrentWeatherInfo>
          </CurrentWeatherContainer>
        </WeatherContainer>
      ))}
    </div>
  );
};

export default Weather;
