import React from "react";
import Search from "./components/Search/Search";
import FetchWeather from "./FetchWeather";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading/Loading";
import VideoCity from "./components/VideoCity/VideoCity";
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";
import { useGlobalContext } from "./context";
import "./App.css";

function App() {
	const { loading, backgroundClass, night } = useGlobalContext();

	return (
		<>
			<div className={`${backgroundClass} ${night} `} id="youtube"></div>
			<main>
				<Search />
				{loading ? <Loading /> : <Weather />}
				<FetchWeather />
				<VideoCity />
				<ForecastWeather />
			</main>
		</>
	);
}

export default App;
