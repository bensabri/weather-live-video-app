import React from "react";
import { useGlobalContext } from "./../../context";
import { addSeconds } from "date-fns";
import "./Days.css";

const Days = ({ localTime2 }) => {
	const { data, isFetched } = useGlobalContext();

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const d = new Date();
	const date = d.getDate(); // Get date 1-31 day
	const month = months[d.getMonth()]; // get months 1-12
	const day = days[d.getDay()]; // get day from monday to sunday
	const year = d.getFullYear(); // get current year

	let daylast;

	daylast = addSeconds(0, data.sys.sunset - data.sys.sunrise)
		.toISOString()
		.slice(11, 16);

	return (
		<div className="date-container">
			<h2 className="date-class">{`${day} ${date} ${month} ${year} `}</h2>
			{isFetched ? (
				<div className="location">
					<h4>
						It's {localTime2} in {data.name} ,{data.sys.country}
					</h4>
					<p>The Day Lasts for {daylast} Minutes</p>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Days;
