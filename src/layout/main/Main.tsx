"use client";
import LoadingOverlay from "@/components/loading/LoadingOverlay";
import Table, { Column } from "@/components/table/Table";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { WeatherData, WeatherResponse } from "@/data/weather";
import Selection from "@/layout/city/Selection";
import { getDayName } from "@/utils/date";
import { renderDateTime, renderTempature } from "@/utils/render";

import Image from "next/image";
import { useCallback, useState } from "react";

export default function Main() {
  const [weathers, setWeathers] = useState<WeatherResponse | undefined>(
    undefined
  );
  const [notFound, setNotFound] = useState<boolean>(false);

  const [selectedWeather, setSelectedWeather] = useState<
    WeatherData | undefined
  >(undefined);

  const onSelectWeather = useCallback(
    (date: string) => {
      const selectWeather = weathers?.data.find((w) => w.datetime === date);
      setSelectedWeather(selectWeather);
    },
    [weathers]
  );

  const handleNotFound = useCallback((found: boolean) => {
    setNotFound(found);
  }, []);

  return (
    <LoadingProvider>
      <LoadingOverlay />
      <div className="flex lg:flex-row flex-col-reverse gap-10 justify-between">
        {weathers ? (
          <Table
            onSelect={onSelectWeather}
            title={`Weather Forecast for ${weathers.city_name}`}
            data={weathers.data}
            columns={columns}
          />
        ) : (
          <Image
            src={`/static/${notFound ? "not-found" : "splash-art"}.png`}
            height={454}
            width={640}
            alt="splash-art"
          />
        )}

        <Selection
          setImage={handleNotFound}
          selectedWeather={selectedWeather ?? weathers?.data[0]}
          setWeather={setWeathers}
        />
      </div>
    </LoadingProvider>
  );
}

const columns: Column[] = [
  {
    title: "Days",
    key: "datetime",
    render: (value: string | number) => getDayName(value, "EN"),
  },
  {
    title: "Dates",
    key: "datetime",
    render: renderDateTime,
  },
  {
    title: "Lowest Temp.",
    key: "min_temp",
    render: renderTempature,
  },
  {
    title: "Highest Temp.",
    key: "max_temp",
    render: renderTempature,
  },
];
