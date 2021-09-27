import React from "react";
import ForecastItem from "./ForecastItem";
import { ForecastContainer, ForecastItems, SectionTitle } from "./styled";
import {
  IExtendedForecastDataForCities,
  IForecastProps
} from "../../utils/types";

const Forecast: React.FC<IForecastProps> = props => {
  return (
    <>
      {props.forecastList.map(
        (forecastForCity: IExtendedForecastDataForCities, index: number) => (
          <ForecastContainer key={index}>
            <SectionTitle>{forecastForCity.name}: 16 Day Forecast</SectionTitle>
            <ForecastItems>
              {forecastForCity.forecast.map((item, i) => {
                return (
                  <ForecastItem
                    key={i}
                    day={item.datetime}
                    high={item.max_temp}
                    low={item.low_temp}
                    weatherCode={item.weather.code}
                    main={item.weather.description}
                  />
                );
              })}
            </ForecastItems>
          </ForecastContainer>
        )
      )}
    </>
  );
};

export default Forecast;
