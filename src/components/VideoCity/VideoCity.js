import React from "react";
import YouTube from "react-youtube";
import { useGlobalContext } from "./../../context";
import "./VideoCity.css";

const VideoCity = () => {
	const { city, data } = useGlobalContext();

	/*small, medium, large, hd720, hd1080, highres , onPlaybackQualityChange: "medium",*/
	const opts = {
		onPlaybackQualityChange: "medium",
		playerVars: {
			controls: 0,
			autoplay: 1,
			height: "390",
			width: "640",
			mute: 0,
		},
	};

	/* https://www.youtube.com/watch?v=-HAi_5IIAYg&list=LL&index=4


*/
	const cities = {
		Mecca: "SMNHZR1u6KQ",
		mecca: "SMNHZR1u6KQ",
		Medina: "zBkm_sWf1F0",
		medina: "zBkm_sWf1F0",
		Tokyo: "QOjmvL3e7Lc",
		tokyo: "QOjmvL3e7Lc",
		"New york": "Vj0XKu6AoOw",
		"new york": "Vj0XKu6AoOw",
		Miami: "cmkAbDUEoyA",
		miami: "cmkAbDUEoyA",
		"Las vegas": "1ZNCtDLUKHw",
		"las vegas": "1ZNCtDLUKHw",
		Seoul: "88j_-fAqN08",
		seoul: "88j_-fAqN08",
		"Ko samui": "NsSCVrbfKnE",
		"ko samui": "vZOOe5dNOY",
		zanzibar: "QB4j8aMPKo4",
		Tampa: "ogbkyRehtCo",
		tampa: "ogbkyRehtCo",
		"Los angeles": "wc4Vy1T6hcE",
		"los angeles": "wc4Vy1T6hcE",
		Anchorage: "Bj3kbnYPqmE",
		anchorage: "Bj3kbnYPqmE",
	};

	return (
		<>
			<div className="video-container">
				{cities[city] && (
					<p className="liveTitle">Watch {data.name} in live</p>
				)}

				{cities[city] && (
					<YouTube videoId={cities[city]} opts={opts} id="youtube" />
				)}
			</div>
		</>
	);
};

export default VideoCity;
