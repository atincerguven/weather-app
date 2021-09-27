import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../store/store";
import Forecast from "../components/Forecast/Forecast";
import { SearchContainer, SearchInput, SearchButton } from "./styled";
import { IExtendedForecastDataForCities } from "../utils/types";

const ForecastPage: React.FC = () => {
  const { forecastedDataforCities, isInitial } = useSelector(
    (state: AppStore) => ({
      loading: state.app.isLoading,
      isInitial: state.app.isInitial,
      forecastedDataforCities: state.weather.extendedWeatherData
    })
  );

  const [filteredForecastList, setFilteredForecastList] = useState(
    forecastedDataforCities
  );
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  const filterForecastList = () => {
    const newList: IExtendedForecastDataForCities[] = [];
    forecastedDataforCities.forEach(
      (element: IExtendedForecastDataForCities) => {
        const filteredForecast = element.forecast.filter(day => {
          let result = minTemp ? day.low_temp >= parseFloat(minTemp) : true;
          result =
            result && (maxTemp ? day.max_temp <= parseFloat(maxTemp) : true);
          return result;
        });

        if (filteredForecast.length > 0) {
          newList.push({ name: element.name, forecast: filteredForecast });
        }
      }
    );
    setFilteredForecastList(newList);
  };
  const handleClick = () => {
    filterForecastList();
  };
  return (
    <>
      <SearchContainer>
        <SearchInput
          value={minTemp}
          placeholder="Min temp"
          onChange={e => setMinTemp(e.target.value)}
          type="number"
        />
        <SearchInput
          value={maxTemp}
          placeholder="Max temp"
          onChange={e => setMaxTemp(e.target.value)}
          type="number"
        />
        <SearchButton onClick={() => handleClick()}>Search</SearchButton>
      </SearchContainer>

      <Forecast forecastList={filteredForecastList} />
    </>
  );
};

export default ForecastPage;
