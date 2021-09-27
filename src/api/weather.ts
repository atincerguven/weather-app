const baseUrl = "https://weatherbit-v1-mashape.p.rapidapi.com";

export const fetchWeatherData = async (
  city: string | { lat: number; lon: number }
) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === "object") {
    url = `${baseUrl}/current?lat=${city.lat}&lon=${city.lon}`;
  }

  return await (
    await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_WEATHERBIT_API_KEY}`
      }
    })
  ).json();
};

export const fetchExtendedForecastData = async (city: {
  lat: number;
  lon: number;
}) => {
  const url = `${baseUrl}/forecast/daily?lat=${city.lat}&lon=${city.lon}`;

  return await (
    await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_WEATHERBIT_API_KEY}`
      }
    })
  ).json();
};
