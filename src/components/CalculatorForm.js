/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";
import { CalCulContext } from "./CalculContext";

const CalculatorForm = () => {
	const { activeBtn, inputValid, inputBill, inputPerson, inputCustom } =
		useContext(CalCulContext);
	const tipArr = [5, 10, 15, 25, 50];

	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<Fragment>
			<form className="calculator__form" onSubmit={submit}>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="bill">
						Bill
					</label>
					<span
						className={!inputValid.bill ? "invalid" : "valid"}
						id="invalid-bill"
					>
						Don't letter and smaller than 1
					</span>
					<Input
						type="text"
						name="bill"
						id="bill"
						placeholder="0"
						value={inputBill}
					/>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="select">
						Select Tip %
					</label>

					<div className="calculator__control--select">
						{tipArr.map((tip, index) => (
							<Button
								id={index}
								classes={`btn tip--btn  ${
									index === +activeBtn ? "active" : ""
								}`}
								value={tip}
								text={`${tip}%`}
								name="tip"
								key={index}
							/>
						))}

						<Input
							type="text"
							name="tip"
							id="custom"
							placeholder="Custom"
							value={inputCustom}
						/>
					</div>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="person">
						Number of people
					</label>
					<span
						className={!inputValid.person ? "invalid" : "valid"}
						id="invalid-person"
					>
						Don't letter and smaller than 1
					</span>

					<Input
						type="text"
						name="person"
						id="person"
						placeholder="0"
						value={inputPerson}
					/>
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
