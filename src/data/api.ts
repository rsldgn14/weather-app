export const API_KEY: string | undefined = process.env["API_KEY"];

export const BASE_URL: string = "https://api.weatherbit.io/v2.0/forecast/daily";

//In future we can change days of predictions selection
export const DAYS: number = 7;

//In future we can change country selection
export const COUNTRY: string = "TR";

export interface Symbols {
  Tempature: string;
  Speed: string;
  length: string;
}

export enum UNITS {
  Metric = 1,
  Scientific,
  Fahrenheit,
}

export interface UNIT {
  ID: UNITS;
  Name: string;
  Symbols: Symbols;
}

export const UNIT_ARRAY: UNIT[] = [
  {
    ID: UNITS.Metric,
    Name: "M",
    Symbols: {
      Tempature: "°C",
      Speed: "m/s",
      length: "mm",
    },
  },
  {
    ID: UNITS.Scientific,
    Name: "S",
    Symbols: {
      Tempature: "Kelvin",
      Speed: "m/s",
      length: "mm",
    },
  },
  {
    ID: UNITS.Fahrenheit,
    Name: "F",
    Symbols: {
      Tempature: "°F",
      Speed: "mph",
      length: "in",
    },
  },
];

// In Future we can implement for metric selection and select any metric we must clean cache
export const UNIT: UNIT | undefined = UNIT_ARRAY.find(
  (u) => u.ID === UNITS.Metric
)
