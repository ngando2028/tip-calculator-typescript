import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";

const Calculator = () => {
	return (
		<Fragment>
			<div className="calculator">
				<CalculatorForm />
				<CalculatorResult />
			</div>
		</Fragment>
	);
};

export default Calculator;
