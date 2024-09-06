import { WeatherData } from "@/data/weather"
import { renderDateTime } from "@/utils/date";

interface Props {
    weather:WeatherData;
    cityName:string;

}



export default function SelectedWeather(props:Props) {
    const {weather} = props;

    return <div> 
         <h1>{weather.temp}</h1>
         <h2></h2>
         <p>{renderDateTime(weather.datetime)}</p>
         <p>{weather.weather.description}</p>
          </div>


}