import React, { useContext } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";
import Button from "./Button";
import { CalCulContext } from "./CalculContext";
import ResultGroup from "./ResultGroup";

const CalculatorResult = () => {
	const { result, isDisabled, formValid } = useContext(CalCulContext);

	return (
		<Fragment>
			<div className="calculator__result">
				<div className="calculator__result-container">
					<ResultGroup
						text="Tip amount"
						type="tip"
						value={result.tip ? result.tip : "0.00"}
					/>
					<ResultGroup
						text="Total"
						type="total"
						value={result.total ? result.total : "0.00"}
					/>
				</div>
				<div className="calculator__result-control">
					<Button
						classes="btn btn--calculator"
						text="Calculator"
						id="calculator"
						type="submit"
						disabled={!formValid || isDisabled}
					/>
					<Button
						classes="btn btn--reset"
						text="Reset"
						id="reset"
						disabled={isDisabled}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default CalculatorResult;
