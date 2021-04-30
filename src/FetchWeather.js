import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";

const FetchWeather = () => {
	const {
		setData,
		setCurrentWeather,
		setCurrentTemperature,
		setCurrentWind,
		setFeelsLike,
		setWindDegres,
		setLatitude,
		setLongitude,
		query,
		setIsFetched,
		setLoading,
		setDailyWeather,
	} = useGlobalContext();

	const KEY = "5f1c532c3d8086f3c3e5ddc350fab34a";
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${KEY}`;

	useEffect(() => {
		fetchData();
	}, [query]);

	const fetchData = () => {
		axios
			.get(URL)
			.then((response) => {
				setLoading(true);
				setData(response.data);
				setCurrentWeather(response.data.weather[0].description);
				setCurrentTemperature(response.data.main.temp);
				setCurrentWind(response.data.wind.speed);
				setFeelsLike(response.data.main.feels_like);
				setWindDegres(response.data.wind.deg);
				setLatitude(response.data.coord.lat);
				setLongitude(response.data.coord.lon);
				setIsFetched(true);
				console.log("fetch data");
				setLoading(false);
				setDailyWeather([]);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	return <></>;
};

export default FetchWeather;
