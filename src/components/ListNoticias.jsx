import React from "react";
import PropTypes from "prop-types";
import Noticia from "./Noticia";

const ListNoticias = ({noticias}) => {
	return (
		<div className="row">
			{noticias.map((noticia) => (
				<Noticia key={noticia.url} noticia={noticia} />
			))}
		</div>
	);
};

ListNoticias.prototype = {
	noticias: PropTypes.array.isRequired,
};

export default ListNoticias;
