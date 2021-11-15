import React, { Fragment } from "react";

type ResulGroupProps = {
	text: string;
	value: string;
	type: string;
};

const ResultGroup: React.FC<ResulGroupProps> = (props) => {
	return (
		<Fragment>
			<div className="calculator__result-group">
				<label className="calculator__result--label">
					{props.text} <span>/person</span>
				</label>

				<p className={`calculator__result--${props.type}`}>
					<span>${props.value}</span>
				</p>
			</div>
		</Fragment>
	);
};

export default ResultGroup;
