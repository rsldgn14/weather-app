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
  useContext,
  useEffect,
  useState,
} from "react";
import SelectedWeather from "@/components/InfoArea/SelectedWeather";
import { LoadingContext } from "@/contexts/LoadingContext";

interface Props {
  setImage: (notFound: boolean) => void;
  setWeather: Dispatch<SetStateAction<WeatherResponse | undefined>>;
  selectedWeather?: WeatherData;
}

export default function Selection(props: Props) {
  const { setWeather, selectedWeather, setImage } = props;
  const [city, setCity] = useState<string>("");
  const dCity = useDebounce(city, 500);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [responceCity, setResponceCity] = useState<string | undefined>();

  const loadingCtx = useContext(LoadingContext);

  const handleCity = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setWeather(undefined);
      setShowNotFound(false);
      setImage(false);
    }
    setCity(e.target.value);
  }, []);

  useEffect(() => {
    if (dCity && dCity !== "") {
      loadingCtx?.setLoading(true);
      getWeather(dCity).then((resp) => {
        loadingCtx?.setLoading(false);
        if (resp.error) {
          setShowNotFound(true);
          setWeather(undefined);
          setResponceCity(undefined);
          setImage(true);
          return;
        }
        setWeather(resp.body ?? undefined);
        setResponceCity(resp.body?.city_name);
        setShowNotFound(false);
        setImage(false);
      });
    }
  }, [dCity]);

  return (
    <div style={{ gap: "24px" }} className="flex flex-col lg:max-w-[360px] ">
      <Input
        value={city}
        placeholder="Search a City"
        name="city"
        onChange={handleCity}
      />

      {!showNotFound && city && selectedWeather ? (
        <SelectedWeather
          weather={selectedWeather}
          cityName={responceCity ?? ""}
        />
      ) : !showNotFound ? (
        <PlaceHolder
          title="Select a City"
          description="Search and select a city to see results. Try typing the first letters of the city you want."
        />
      ) : (
        <PlaceHolder
          title="Does not Exist"
          description="Type a valid city name to get weekly forecast data."
        />
      )}
    </div>
  );
}
