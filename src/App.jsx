import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListNoticias from "./components/ListNoticias";

function App() {
	//State
	const [category, updateCategory] = useState("");
	const [noticias, updateNoticias] = useState([]);

	useEffect(() => {
		const consultApi = async () => {
			const apiKey = "39813d49677f4027b846764be67bd506";
			const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${apiKey}`;

			try {
				const result = await axios.get(url);
				updateNoticias(result.data.articles);
			} catch (error) {
				console.log(error);
			}
		};

		consultApi();
	}, [category]);

	return (
		<Fragment>
			<Header titulo="Buscador de Noticias" />

			<div className="container white">
				<Formulario updateCategory={updateCategory} />
				<ListNoticias noticias={noticias} />
			</div>
		</Fragment>
	);
}

export default App;
