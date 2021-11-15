import React, { Fragment } from "react";

type ButtonProps = {
	classes: string;
	id: string;
	type: "button" | "submit";
	text: string;
	name?: string;
	value?: number;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<Fragment>
			<button
				className={props.classes}
				id={props.id}
				value={props.value}
				// onClick={handlerClickEvent}
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
