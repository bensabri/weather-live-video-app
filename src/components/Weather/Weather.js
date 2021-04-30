import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import wind from "./../../images/wind-direction.png";
import MoreDetails from "../MoreDetails/MoreDetails";
import Days from "../Days/Days";
import { addHours } from "date-fns";
import "./../Weather/Weather.css";

const Weather = () => {
	const {
		data,
		isFetched,
		backgroundClass,
		setBackgroundClass,
		currentTemperature,
		currentWeather,
		currentWind,
		windDegres,
		latitude,
		showMore,
		setShowMore,
		night,
		setNight,
		open,
	} = useGlobalContext();

	let windDirection;
	let sunRise;
	let sunset;
	let timeZone;
	let hourDifference; // to store the hour difference
	let localTime;
	let localTime2;
	let weatherFlex;

	const date = new Date();

	if (isFetched) {
		weatherFlex = {
			transition: "0.4s ease",
			padding: "45px",
			borderRadius: "16px",
			boxShadow: "3px 6px rgba(0, 0, 0, 0.2)",
			margin: "0 30px 0 30px",
		};

		windDirection = {
			transform: `rotate(${windDegres}deg)`,
			width: "40px",
			transition: "transform 0.4s ease",
		};
		timeZone = Math.round(data.timezone);
		hourDifference = timeZone / 3600; // convert the second to hour

		sunRise = new Date((data.sys.sunrise + timeZone) * 1000) // get sunset from Api
			.toISOString()
			.slice(11, 16);

		sunset = new Date((data.sys.sunset + timeZone) * 1000) // get sunset from Api
			.toISOString()
			.slice(11, 16);

		localTime = addHours(date, hourDifference - 1).getHours(); // local time to the location weather
		localTime2 = addHours(date, hourDifference).toISOString().slice(11, 16); // Get local time to display //
	}

	useEffect(() => {
		if (localTime > sunset.slice(0, 2)) {
			setNight("night");
		} else if (localTime > sunRise.slice(0, 2)) {
			setNight("");
		} else {
			setNight("night");
		}
	});

	useEffect(() => {
		switch (isFetched && currentWeather) {
			case "clear sky":
				setBackgroundClass("app sunny");
				break;
			case "few clouds":
				setBackgroundClass("app sunny");
				break;
			case "scattered clouds":
				setBackgroundClass("app cloudy");
				break;
			case "overcast clouds":
				setBackgroundClass("app cloudy");
				break;
			case "light rain":
				setBackgroundClass("app rain");
				break;
			case "moderate rain":
				setBackgroundClass("app rain");
				break;
			default:
				setBackgroundClass("app cloudy");
				break;
		}
	});

	return (
		<>
			{isFetched && (
				<div>
					<div className={`weather-container-fade ${open}`}>
						<Days localTime2={localTime2} />
						<div
							id={night}
							style={weatherFlex}
							className={backgroundClass}
						>
							<div className="weather-container">
								<div className="weather">
									<div className="temp">
										{Math.round(currentTemperature)}°c
									</div>
									<div className="weather">
										{currentWeather}
									</div>
								</div>
								<div className="wind-container">
									<p className="wind">
										{Math.round(currentWind * 3.67)} km/h
									</p>
									<img
										src={wind}
										alt="wind"
										style={windDirection}
										className="windDirections"
									/>
									<p className="latitude">
										{latitude.toFixed(2)}° Latitude
									</p>
								</div>
								{showMore ? (
									<FaChevronUp
										className="ChevronDown"
										onClick={() => {
											setShowMore(!showMore);
										}}
									/>
								) : (
									<FaChevronDown
										className="ChevronDown"
										onClick={() => {
											setShowMore(!showMore);
										}}
									/>
								)}
							</div>
							<MoreDetails sunRise={sunRise} sunset={sunset} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Weather;
