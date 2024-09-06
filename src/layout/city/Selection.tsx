"use client";

import Input from "@/components/input/Input";
import PlaceHolder from "@/components/InfoArea/Placeholder";
import { getWeather, WeatherData, WeatherResponse } from "@/data/weather";
import useDebounce from "@/hooks/useDebounce";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import SelectedWeather from "@/components/InfoArea/SelectedWeather";

interface Props {
  setWeather: Dispatch<SetStateAction<WeatherResponse | undefined>>;
  selectedWeather?: WeatherData;
}

export default function Selection(props: Props) {
  const { setWeather, selectedWeather } = props;
  const [city, setCity] = useState<string>("");
  const dCity = useDebounce(city, 1000);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);

  const handleCity = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }, []);

  useEffect(() => {
    if (dCity) {
      getWeather(dCity).then((resp) => {
        if (resp.error) {
          console.error(resp.error);
          setShowNotFound(true);
          setWeather(undefined);
          return;
        }
        setWeather(resp.body ?? undefined);
        setShowNotFound(false);
      });
    }
  }, [dCity]);

  return (
    //TO-DO gap yemiyor
    <div style={{ gap: "24px" }} className="flex flex-col">
      <Input
        value={city}
        placeholder="Search a City"
        name="city"
        onChange={handleCity}
      />

      {!showNotFound && city && selectedWeather ? (
        <SelectedWeather weather={selectedWeather} cityName={city} />
      ) : !showNotFound ? (
        <PlaceHolder
          title="Select a City"
          description="Search and select a city to see results. Try typing the first letters of the city you want."
        />
      ) : (
        <PlaceHolder
          title="City Not Found"
          description="City not Found"
        />
      )}
    </div>
  );
}
