import React from "react";
import spinner from "./../../images/spinner.gif";
import "./../Loading/Loading.css";

const Loading = () => {
	return (
		<div className="spinner">
			<img src={spinner} alt="spinner" />
		</div>
	);
};

export default Loading;
