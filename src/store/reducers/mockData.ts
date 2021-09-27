import {
  IWeatherData,
  IExtendedForecastDataForCities
} from "../../utils/types";

export const mockWeatherData: IWeatherData[] = [
  {
    app_temp: 20.2,
    name: "London",
    pres: 1010.9,
    rh: 82,
    temp: 20,
    wind_spd: 2,
    weather: {
      code: 804,
      description: "Overcast clouds",
      icon: "c04d"
    }
  },
  {
    app_temp: 18.4,
    name: "Tokyo",
    pres: 1012.2,
    rh: 85,
    temp: 18.3,
    wind_spd: 2,
    weather: { code: 802, description: "Scattered clouds", icon: "c02n" }
  }
];

export const mockForecastData: IExtendedForecastDataForCities[] = [
  {
    name: "London",
    forecast: [
      {
        name: "London",
        datetime: "Sep 26th",
        max_temp: 21,
        low_temp: 15.9,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Sep 27th",
        max_temp: 18,
        low_temp: 11.2,
        weather: { code: 500, description: "Light rain" }
      },
      {
        name: "London",
        datetime: "Sep 28th",
        max_temp: 17.5,
        low_temp: 10.7,
        weather: { code: 500, description: "Light rain" }
      },
      {
        name: "London",
        datetime: "Sep 29th",
        max_temp: 15.6,
        low_temp: 9.4,
        weather: { code: 803, description: "Broken clouds" }
      },
      {
        name: "London",
        datetime: "Sep 30th",
        max_temp: 14,
        low_temp: 10.2,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 1st",
        max_temp: 17.4,
        low_temp: 12.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 2nd",
        max_temp: 15.2,
        low_temp: 9.1,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 3rd",
        max_temp: 15.9,
        low_temp: 11.1,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 4th",
        max_temp: 14.1,
        low_temp: 11.8,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 5th",
        max_temp: 15.1,
        low_temp: 9,
        weather: { code: 520, description: "Light shower rain" }
      },
      {
        name: "London",
        datetime: "Oct 6th",
        max_temp: 15.3,
        low_temp: 8.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 7th",
        max_temp: 11.4,
        low_temp: 10.1,
        weather: { code: 500, description: "Light rain" }
      },
      {
        name: "London",
        datetime: "Oct 8th",
        max_temp: 13.5,
        low_temp: 8.9,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 9th",
        max_temp: 14.8,
        low_temp: 8.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "London",
        datetime: "Oct 10th",
        max_temp: 14.7,
        low_temp: 9.7,
        weather: { code: 803, description: "Broken clouds" }
      },
      {
        name: "London",
        datetime: "Oct 11th",
        max_temp: 14.6,
        low_temp: 11,
        weather: { code: 803, description: "Broken clouds" }
      }
    ]
  },
  {
    name: "Tokyo",
    forecast: [
      {
        name: "Tokyo",
        datetime: "Sep 26th",
        max_temp: 21,
        low_temp: 15.9,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Sep 27th",
        max_temp: 18,
        low_temp: 11.2,
        weather: { code: 500, description: "Thunderstorm with heavy rain" }
      },
      {
        name: "Tokyo",
        datetime: "Sep 28th",
        max_temp: 17.5,
        low_temp: 10.7,
        weather: { code: 500, description: "Light rain" }
      },
      {
        name: "Tokyo",
        datetime: "Sep 29th",
        max_temp: 15.6,
        low_temp: 9.4,
        weather: { code: 803, description: "Broken clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Sep 30th",
        max_temp: 14,
        low_temp: 10.2,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 1st",
        max_temp: 17.4,
        low_temp: 12.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 2nd",
        max_temp: 15.2,
        low_temp: 9.1,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 3rd",
        max_temp: 15.9,
        low_temp: 11.1,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 4th",
        max_temp: 14.1,
        low_temp: 11.8,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 5th",
        max_temp: 15.1,
        low_temp: 9,
        weather: { code: 520, description: "Light shower rain" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 6th",
        max_temp: 15.3,
        low_temp: 8.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 7th",
        max_temp: 11.4,
        low_temp: 10.1,
        weather: { code: 500, description: "Light rain" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 8th",
        max_temp: 13.5,
        low_temp: 8.9,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 9th",
        max_temp: 14.8,
        low_temp: 8.7,
        weather: { code: 804, description: "Overcast clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 10th",
        max_temp: 14.7,
        low_temp: 9.7,
        weather: { code: 803, description: "Broken clouds" }
      },
      {
        name: "Tokyo",
        datetime: "Oct 11th",
        max_temp: 14.6,
        low_temp: 11,
        weather: { code: 803, description: "Broken clouds" }
      }
    ]
  }
];
