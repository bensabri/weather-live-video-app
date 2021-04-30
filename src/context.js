import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [data, setData] = useState({});
	const [currentWeather, setCurrentWeather] = useState({});
	const [currentTemperature, setCurrentTemperature] = useState({});
	const [currentWind, setCurrentWind] = useState({});
	const [windDegres, setWindDegres] = useState({});
	const [latitude, setLatitude] = useState({});
	const [longitude, setLongitude] = useState({});
	const [feelsLike, setFeelsLike] = useState({});
	const [isFetched, setIsFetched] = useState(false);
	const [query, setQuery] = useState("houmt souk");
	const [search, setSearch] = useState("");
	const [backgroundClass, setBackgroundClass] = useState("");
	const [loading, setLoading] = useState(true);
	const [showMore, setShowMore] = useState(false);
	const [night, setNight] = useState("");
	const [city, setCity] = useState("");
	const [dailyWeather, setDailyWeather] = useState([]);
	const [open, setOpen] = useState();

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				currentWeather,
				setCurrentWeather,
				currentTemperature,
				setCurrentTemperature,
				currentWind,
				setCurrentWind,
				feelsLike,
				setFeelsLike,
				windDegres,
				setWindDegres,
				latitude,
				setLatitude,
				longitude,
				setLongitude,
				isFetched,
				setIsFetched,
				query,
				setQuery,
				search,
				setSearch,
				backgroundClass,
				setBackgroundClass,
				loading,
				setLoading,
				showMore,
				setShowMore,
				night,
				setNight,
				city,
				setCity,
				dailyWeather,
				setDailyWeather,
				open,
				setOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
