/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Fragment } from "react";
import { CalCulContext } from "./CalculContext";

const Input = (props) => {
	const { onChangedTipValue, inputValid } = useContext(CalCulContext);

	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				data-index={props.id}
				className={`calculator__control--input calculator__control--${
					props.id
				} ${!inputValid[props.name] ? "input-invalid" : ""}`}
				placeholder={props.placeholder}
				onChange={onChangedTipValue}
				onClick={onChangedTipValue}
				value={props.value}
			/>
		</Fragment>
	);
};

export default Input;
