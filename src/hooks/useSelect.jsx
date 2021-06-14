import React, {useState} from "react";
import PropTypes from "prop-types";

const useSelect = (stateInitial, options) => {
	//State to states custom
	const [state, updateState] = useState(stateInitial);

	const SelectNoticias = () => (
		<select
			className="browser-default"
			onChange={(e) => updateState(e.target.value)}
			value={state}
		>
			{options.map((op) => (
				<option value={op.value} key={op.value}>
					{op.label}
				</option>
			))}
		</select>
	);

	return [state, SelectNoticias];
};

useSelect.prototype = {
	stateInitial: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
};

export default useSelect;
