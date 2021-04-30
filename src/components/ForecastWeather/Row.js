import React from "react";
import "./Row.css";
import { useGlobalContext } from "./../../context";
import { format } from "date-fns";
import wind from "./../../images/wind-direction.png";
import RowDetail from "./RowDetail";

const Row = () => {
	const { dailyWeather } = useGlobalContext();

	return (
		<>
			<div className="row-container">
				{dailyWeather.map((weather) => (
					<div className="row" key={weather.dt}>
						<p className="date-row">
							{format(weather.dt * 1000, "E dd/MM")}
						</p>
						{weather.weather.map((w, i) => (
							<div className="description-row" key={i}>
								<img
									src={
										require(`./../../images/icon/${w.icon}.png`)
											.default
									}
									alt="icon"
									width={85}
									height={85}
								/>
								<ul>
									<li>{w.description}</li>
								</ul>
							</div>
						))}
						<div className="temp-container-row">
							<p>Max {Math.round(weather.temp.max)}°c</p>
							<p>Min {Math.round(weather.temp.min)}°c</p>
						</div>
						<div className="wind-container-row">
							<p>
								Wind: {Math.round(weather.wind_speed * 3.67)}{" "}
								km/h
							</p>
							<img
								src={wind}
								alt="wind"
								style={{
									transform: `rotate(${weather.wind_deg}deg)`,
									width: "20px",
									transition: "transform 0.4s ease",
								}}
							/>
						</div>
						<RowDetail weather={weather} />
					</div>
				))}
			</div>
		</>
	);
};

export default Row;
