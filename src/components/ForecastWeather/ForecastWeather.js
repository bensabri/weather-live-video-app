import React from "react";
import "./ForecastWeather.css";
import Row from "./Row";
import axios from "axios";
import { useGlobalContext } from "./../../context";

const ForecastWeather = () => {
	const {
		setDailyWeather,
		longitude,
		latitude,
		data,
		open,
	} = useGlobalContext();

	const KEY = "5f1c532c3d8086f3c3e5ddc350fab34a";
	const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={current,minutely,hourly,alerts}&units=metric&appid=${KEY}`;

	const fetchDaily = () => {
		axios.get(URL).then((response) => {
			setDailyWeather(response.data.daily);
		});
	};

	return (
		<>
			<div className={`dailyweather-title ${open}`}>
				<h1 className="get-weather" onClick={fetchDaily}>
					Get daily weather in {data.name} for 7 Days
				</h1>
			</div>
			<div className="container-forcast">
				<Row />
			</div>
		</>
	);
};

export default ForecastWeather;
