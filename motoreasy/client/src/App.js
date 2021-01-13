import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Tyre from "./Tyre";
import Search from "./Search";
import "./App.css";

const App = () => {
	const { loading, data, newData } = useFetch();
	const [page, setPage] = useState(0);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState([]);

	const newNum = [];
	const searchHandle = (e) => {
		e.preventDefault();
		newData.filter((num) => {
			const nothing = [];
			num.tyres[0].size.includes(search) ? newNum.push(num) : nothing.push(num);
			return newNum;
		});
		setFilter(newNum);
		setSearch("");
	};

	const submitHandler = (e) => {};

	const previousHandler = () => {
		setPage((previous) => {
			let prevPage = previous - 1;
			if (prevPage < 0) {
				prevPage = data.length - 1;
			}
			return prevPage;
		});
	};
	const nextHandler = () => {
		setPage((previous) => {
			let nextPage = previous + 1;
			if (nextPage > data.length - 1) {
				nextPage = 0;
			}
			return nextPage;
		});
	};
	let content = "";

	if (filter.length > 0) {
		content = filter.map((tyre) => {
			return <Tyre key={tyre._id} {...tyre} />;
		});
	} else if (data.length > 0) {
		content = data[page].map((tyre) => {
			return <Tyre key={tyre._id} {...tyre} />;
		});
	}

	/* {} */
	return (
		<div className="section-title">
			{loading ? (
				"Loading..."
			) : (
				<h1>
					motor<span>easy</span>
				</h1>
			)}
			<Search
				search={search}
				setSearch={setSearch}
				submitHandler={submitHandler}
				searchHandle={searchHandle}
			/>

			<section>
				<div className="container">{content}</div>
			</section>
			<div className="next-previous">
				<button onClick={previousHandler}>PREVIOUS</button>
				<button onClick={nextHandler}>NEXT</button>
			</div>
		</div>
	);
};

export default App;
