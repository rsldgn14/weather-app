import { WeatherData } from "@/data/weather";
import { renderDateTime, renderTempature } from "@/utils/render";

import Image from "next/image";

interface Props {
  weather: WeatherData;
  cityName: string;
}

export default function SelectedWeather(props: Props) {
  const { weather, cityName } = props;

  return (
    <div className="shadow-defaultShadow border-[1px] rounded-xl border-[#DBDFE9]  p-10 flex flex-col gap-10 items-center">
      <h1 className="font-bold text-[56px] text-primary ">
        {renderTempature(weather.temp)}
      </h1>

      <div className="flex flex-col gap-[10px] items-center">
        <h2 className="font-bold text-[32px]">{cityName}</h2>
        <p className="text-[16px] font-normal">
          {" "}
          {renderDateTime(weather.datetime)}
        </p>
      </div>
      <div className="flex gap-[10px] text-primary items-center text-sm">
        <Image
          src={`/static/weather-icons/${weather.weather.icon}.png`}
          height={32}
          width={32}
          alt="weather"
        />
        <p>{weather.weather.description}</p>
      </div>
    </div>
  );
}
