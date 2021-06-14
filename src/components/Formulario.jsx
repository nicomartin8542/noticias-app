import React from "react";
import PropTypes from "prop-types";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({updateCategory}) => {
	const OPCIONES = [
		{value: "general", label: "General"},
		{value: "business", label: "Business"},
		{value: "entertainment", label: "Entertainment"},
		{value: "health", label: "Health"},
		{value: "science", label: "Science"},
		{value: "sports", label: "Sports"},
		{value: "technology", label: "Technology"},
	];

	const [category, SelectNoticias] = useSelect("general", OPCIONES);

	const searchNoticias = (e) => {
		e.preventDefault();

		updateCategory(category);
	};

	return (
		<div className={`${styles.buscador}row`}>
			<div className="col s12 m8 offset s2">
				<form onSubmit={searchNoticias}>
					<h2 className={styles.heading}>Encuentra Noticias por categoria</h2>

					<SelectNoticias />

					<div className="input-field col s12">
						<input
							type="submit"
							className={` ${styles["btn-block"]} btn-large amber darken-2`}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

Formulario.prototype = {
	updateCategory: PropTypes.func.isRequired,
};

export default Formulario;
