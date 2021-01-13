import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "http://localhost:3000/tyre";

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [newData, setNewData] = useState([]);

	const getProducts = async () => {
		const response = await fetch(url);
		const data = await response.json();

		setNewData(data);
		const paginated = paginate(data);
		setData(paginated);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, []);
	return { loading, data, newData };
};
