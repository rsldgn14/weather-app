export function getDayName(dateStr: string | number, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}
