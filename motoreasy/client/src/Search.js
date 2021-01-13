import React from "react";

const Search = ({ search, setSearch, searchHandle }) => {
	//console.log(search);
	return (
		<form>
			<input
				type="text"
				placeholder="search tyres by size or name"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={searchHandle}>SEARCH</button>
		</form>
	);
};

export default Search;
