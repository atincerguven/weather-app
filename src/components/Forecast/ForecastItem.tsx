import React from "react";

import WeatherIcon from "./../WeatherIcon/WeatherIcon";
import { ForecastItemContainer } from "./styled";
import { IForecastItemProps } from "../../utils/types";

const ForecastItem: React.FC<IForecastItemProps> = props => {
  return (
    <ForecastItemContainer>
      <h6>{props.day}</h6>
      <WeatherIcon code={props.weatherCode} />
      <p>{props.main}</p>
      <span>
        {props.high}
        <sup>&deg;</sup>
        <small>/</small>
        {props.low}
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  );
};

export default ForecastItem;
