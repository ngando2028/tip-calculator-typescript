import React, { Fragment, useContext } from "react";
import { CalculatorContext, ICalculatorContext } from "./CaculatorContext";

type InputProps = {
	type: string;
	name: string;
	id: string;
	placeholder: string;
	value?: string;
};

const Input: React.FC<InputProps> = (props) => {
	const { onChangedTipValue, inputValid } = useContext(
		CalculatorContext
	) as ICalculatorContext;

	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				data-index={props.id}
				className={`calculator__control--input calculator__control--${
					props.id
				}${!inputValid ? "input-invalid" : ""}`}
				placeholder={props.placeholder}
				onChange={onChangedTipValue}
				// onClick={onChangedTipValue}
				value={props.value}
			/>
		</Fragment>
	);
};

export default Input;
