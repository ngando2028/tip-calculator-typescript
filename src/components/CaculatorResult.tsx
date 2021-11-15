import { Fragment } from "react";
import Button from "./Button";
import ResultGroup from "./ResultGroup";

const CalculatorResult = () => {
	return (
		<Fragment>
			<div className="calculator__result">
				<div className="calculator__result-container">
					<ResultGroup text="Tip amount" type="tip" value={"0.00"} />
					<ResultGroup text="Total" type="total" value={"0.00"} />
				</div>
				<div className="calculator__result-control">
					<Button
						classes="btn btn--calculator"
						text="Calculator"
						id="calculator"
						type="submit"
						disabled={false}
					/>
					<Button
						classes="btn btn--reset"
						text="Reset"
						id="reset"
						type="button"
						disabled={false}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default CalculatorResult;
