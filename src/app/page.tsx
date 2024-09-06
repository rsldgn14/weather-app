import { getWeather, WeatherResponse } from "@/data/weather";
import Selection from "@/layout/city/Selection";
import Main from "@/layout/main/Main";
import { error } from "console";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="px-[163px] pt-10">
      <Main />
    </div>
  );
}
