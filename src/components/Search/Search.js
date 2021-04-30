import React from "react";
import { useGlobalContext } from "./../../context";
import "./../Search/Search.css";

const Search = () => {
	const {
		setQuery,
		search,
		setSearch,
		setCity,
		setOpen,
	} = useGlobalContext();

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setCity(search);
		setSearch("");
		setOpen("open");
		document.querySelector("input").blur();
	};

	return (
		<div className="search-container">
			<form onSubmit={getSearch}>
				<input
					type="text"
					className="search-bar"
					placeholder="Search"
					onChange={updateSearch}
					value={search}
				/>
				<button className="search-btn" type="submit"></button>
			</form>
			<p className="press-top">
				To play the video on
				<br /> mobile press on top
			</p>
		</div>
	);
};

export default Search;
