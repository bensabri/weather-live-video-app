import React, { useState } from "react";
import "./../ForecastWeather/Row.css";
import { useGlobalContext } from "./../../context";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RowDetail = ({ weather }) => {
	const { data } = useGlobalContext();
	const [showMore, setShowMore] = useState(false);

	let sunRise;
	let sunset;
	let timeZone;

	timeZone = Math.round(data.timezone);

	sunRise = new Date((weather.sunrise + timeZone) * 1000) // get sunset from Api
		.toISOString()
		.slice(11, 16);

	sunset = new Date((weather.sunset + timeZone) * 1000) // get sunset from Api
		.toISOString()
		.slice(11, 16);

	return (
		<>
			<button className="showmore" onClick={() => setShowMore(!showMore)}>
				<FaChevronUp />
			</button>
			<div className={`more-rowDetail ${showMore ? "open" : ""}`}>
				<p>Rain: {weather.rain || 0}</p>
				<p>Humidity: {weather.humidity}</p>
				<p>Index UV: {weather.uvi.toFixed(1)}</p>
				<p>Pressure: {weather.pressure} </p>
				<p>Sunrise: {sunRise}</p>
				<p>Sunset: {sunset}</p>
				<FaChevronDown
					onClick={() => setShowMore(!showMore)}
					style={{
						position: "absolute",
						right: "10px",
						bottom: "10px",
						cursor: "pointer",
					}}
				/>
			</div>
		</>
	);
};

export default RowDetail;
