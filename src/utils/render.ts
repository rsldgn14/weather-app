import dayjs from "dayjs";

export function renderDateTime(dateStr: string): string {
    const date = dayjs(dateStr);
  
    return date.format("MMMM DD, YYYY");
  }
  

export function renderTempature(tempature:number):string {
    return `${tempature.toFixed()} °C`
    
}