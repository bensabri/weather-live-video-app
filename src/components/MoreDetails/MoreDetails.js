import React from "react";
import { useGlobalContext } from "./../../context";
import { addHours } from "date-fns";
import "./../MoreDetails/MoreDetails.css";

const MoreDetails = ({ sunRise, sunset }) => {
	const {
		feelsLike,
		data,
		latitude,
		longitude,
		showMore,
	} = useGlobalContext();

	let localTimeSunPos;
	let SunCalc = require("suncalc");
	const date = new Date();
	localTimeSunPos = addHours(date, 0);

	let sunrisePos = SunCalc.getPosition(localTimeSunPos, latitude, longitude);
	let sunAltitude = (sunrisePos.altitude * 180) / Math.PI;
	//let sunriseAzimuth = (sunrisePos.azimuth * 180) / Math.PI;

	return (
		<>
			<div className="moredetail-container">
				<div className={`moredetails ${showMore ? "open" : ""}`}>
					<ul>
						<li>humidity</li>
						<li>{data.main.humidity}%</li>
					</ul>
					<ul>
						<li>visibility</li>
						<li>{data.visibility}</li>
					</ul>
					<ul>
						<li>Feels Like</li>
						<li>{Math.round(feelsLike)}°c</li>
					</ul>
					<ul>
						<li>Sun altitude</li>
						<li>{sunAltitude.toFixed(2)} °</li>
					</ul>
					<ul>
						<li>Sunrise</li>
						<li>{sunRise} </li>
					</ul>
					<ul>
						<li>Sunset</li>
						<li>{sunset} </li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MoreDetails;
