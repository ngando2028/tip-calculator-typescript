import { Fragment, useContext } from "react";
import { CalCulContext } from "./CalculContext";

const Button = (props) => {
	const { handlerSubmit, handlerReset, onChangedTipValue } =
		useContext(CalCulContext);

	const handlerClickEvent = (e) => {
		switch (props.id) {
			case "calculator":
				return handlerSubmit(e);
			case "reset":
				return handlerReset(e);
			default:
				return onChangedTipValue(e);
		}
	};

	return (
		<Fragment>
			<button
				className={props.classes}
				id={props.id}
				value={props.value}
				onClick={handlerClickEvent}
				name={props.name}
				type={props.type}
				disabled={props.disabled}
			>
				{props.text}
			</button>
		</Fragment>
	);
};

export default Button;
