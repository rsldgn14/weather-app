import { API_KEY, BASE_URL, COUNTRY, DAYS, UNIT } from "./api";
import { request } from "./requestHelper";

export interface WeatherData {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  datetime: string;
  temp: number;
  high_temp: number;
  low_temp: number;
  weather: Weather;
  wind_cdir: string;
}

export interface WeatherResponse {
  city_name: string;
  data: WeatherData[];
}

export interface Weather {
  description: string;
  icon: string;
}



export async function getWeather(cityName: string) {
  return await request<WeatherResponse>(
    `${BASE_URL}?city=${cityName}&country=${COUNTRY}&key=${API_KEY}&days=${DAYS}&units=${UNIT?.Name}`
  );
}
