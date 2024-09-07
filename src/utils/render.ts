import { UNIT } from "@/data/api";
import dayjs from "dayjs";

export function renderDateTime(d: string | number): string {
  const date = dayjs(d);

  return date.format("MMMM DD, YYYY");
}

export function renderTempature(tempature: string | number): string {
  if (typeof tempature === "number") {
    return `${tempature.toFixed()} ${UNIT?.Symbols.Tempature}`;
  }

  return "";
}
