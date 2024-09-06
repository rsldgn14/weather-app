import dayjs from "dayjs";

export function getDayName(dateStr: string, locale: string) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

export function renderDateTime(dateStr: string): string {
  const date = dayjs(dateStr);

  return date.format("MMMM DD, YYYY");
}
