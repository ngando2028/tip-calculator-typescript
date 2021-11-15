import { Fragment } from "react";

const ResultGroup = (props) => {
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
