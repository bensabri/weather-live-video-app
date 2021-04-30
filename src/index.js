import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
	document.getElementById("root")
);

reportWebVitals();
