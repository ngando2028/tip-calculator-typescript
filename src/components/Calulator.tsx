import { Fragment } from "react";
import CalculatorResult from "./CaculatorResult";
import CalculatorForm from "./CalculatorForm";

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
