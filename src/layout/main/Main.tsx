"use client";
import Table, { Column } from "@/components/table/Table";
import { WeatherData, WeatherResponse } from "@/data/weather";
import Selection from "@/layout/city/Selection";
import { getDayName, renderDateTime } from "@/utils/date";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Main() {
  const [weathers, setWeathers] = useState<WeatherResponse | undefined>(
    undefined
  );
  const [selectedWeather, setSelectedWeather] = useState<
    WeatherData | undefined
  >(undefined);

  const onSelectWeather = useCallback((date: string) => {
    const selectWeather = weathers?.data.find((w) => w.datetime === date);
    setSelectedWeather(selectWeather);
  }, [weathers]);

  return (
    <div className="flex  flex-row  justify-between">
      {weathers ? (
        <Table
          onSelect={onSelectWeather}
          title={`Weather Forecast for ${weathers.city_name}`}
          data={weathers.data}
          columns={columns}
        />
      ) : (
        <Image
          src={"/static/splash-art.png"}
          height={454}
          width={640}
          alt="splash-art"
        />
      )}

      <Selection selectedWeather={ selectedWeather ?? weathers?.data[0]} setWeather={setWeathers} />
    </div>
  );
}

const columns: Column[] = [
  {
    title: "Days",
    key: "datetime",
    render: (value: string) => getDayName(value, "EN"),
  },
  {
    title: "Dates",
    key: "datetime",
    render: renderDateTime,
  },
  {
    title: "Lowest Temp.",
    key: "min_temp",
  },
  {
    title: "Highest Temp.",
    key: "max_temp",
  },
];
