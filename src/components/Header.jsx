import React from "react";
import PropTypes from "prop-types";

const Header = ({titulo}) => (
	<nav className="nav-wrapper light-blue darken-3">
		<a href="#!" className="brand-logo center">
			{titulo}
		</a>
	</nav>
);

Header.prototype = {
	titulo: PropTypes.array.isRequired,
};

export default Header;
