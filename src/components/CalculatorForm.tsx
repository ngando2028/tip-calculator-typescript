import { Fragment } from "react";
import Button from "./Button";
import Input from "./Input";

const CalculatorForm = () => {
	const tipArr = [5, 10, 15, 25, 50];

	const submit = (e: React.SyntheticEvent) => {
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
						className={"valid"}
						// className={!inputValid.bill ? "invalid" : "valid"}
						id="invalid-bill"
					>
						Don't letter and smaller than 1
					</span>
					<Input
						type="text"
						name="bill"
						id="bill"
						placeholder="0"
						value={"1"}
					/>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="select">
						Select Tip %
					</label>

					<div className="calculator__control--select">
						{tipArr.map((tip, index) => (
							<Button
								id={index.toString()}
								classes={`btn tip--btn`}
								// ${
								// 	index === +activeBtn ? "active" : ""
								// }
								value={tip}
								text={`${tip}%`}
								name="tip"
								key={index}
								type="button"
							/>
						))}

						<Input
							type="text"
							name="tip"
							id="custom"
							placeholder="Custom"
							value={"2"}
						/>
					</div>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="person">
						Number of people
					</label>
					<span
						className={"valid"}
						// className={!inputValid.person ? "invalid" : "valid"}
						id="invalid-person"
					>
						Don't letter and smaller than 1
					</span>

					<Input
						type="text"
						name="person"
						id="person"
						placeholder="0"
						value={"3"}
					/>
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
