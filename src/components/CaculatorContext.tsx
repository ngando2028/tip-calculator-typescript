import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "../constant/config";

interface ICalculatorContext {
	formValid: boolean;
	formValue: {};
	result: {};
	isDisabled: boolean;
	activeBtn: number;
	inputValid: {};
	inputBill: string;
	inputCustom: string;
	inputPerson: string;
	onChangedValue(e: any): void;
	// handlerReset;
	// handlerSubmit;
	onChangedTipValue(e: any): void;
	children: React.ReactNode;
}

export const CalculatorContext = createContext<ICalculatorContext>(
	{} as ICalculatorContext
);

export const CalculatorProvider = ({
	children,
}: ICalculatorContext): JSX.Element => {
	const [formValid, setFormValid] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const [inputBill, setInputBill] = useState<string>("");
	const [inputPerson, setInputPerson] = useState<string>("");
	const [inputCustom, setInputCustom] = useState<string>("");
	const [inputValid, setInputValid] = useState({
		bill: true,
		person: true,
		tip: true,
	});
	const [activeBtn, setActiveBtn] = useState(6);
	const [formValue, setFormValue] = useState({
		bill: 0,
		person: 0,
		tip: 0,
	});
	const [result, setResult] = useState({
		tip: 0,
		total: 0,
	});

	useEffect(() => {
		if (
			formValue.bill &&
			formValue.person &&
			(+formValue.tip >= 0 || isNaN(+formValue.tip))
		) {
			setFormValid(true);
		} else setFormValid(false);
	}, [formValue, formValue.bill, formValue.person, formValue.tip, formValid]);

	const handlerSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			setIsDisabled(true);
			let result = await fetch(
				`${API_URL}/calculate?bill=${formValue.bill}&people=${formValue.person}&tipPercent=${formValue.tip}`
			);

			let resultData = await result.json();
			setResult({
				tip: resultData.amount.toFixed(2),
				total: resultData.total.toFixed(2),
			});
			setIsDisabled(false);
		} catch (error: any) {
			alert(error.message);
			setIsDisabled(false);
		}
	};

	const handlerReset = () => {
		setFormValid(false);
		setResult({ tip: 0, total: 0 });
		setFormValue({ bill: 0, person: 0, tip: 0 });
		setInputValid({ bill: true, person: true, tip: true });
		setActiveBtn(6);
		setInputBill("");
		setInputCustom("");
		setInputPerson("");
	};

	const checkNumber = (e: React.FormEventHandler<HTMLInputElement>) => {
		console.log(e);
		// let { name, value } = e.target;
		// let re = name === "person" ? /^[0-9]*$/ : /^[0-9]*\.?[0-9]*$/;
		// if (!re.test(value)) {
		//   e.preventDefault();
		//   return false;
		// }
		// return true;
	};

	const checkInvalid = (name: string, value: number) => {
		if ((value.toString() === "" || value === 0) && name === "tip") {
			value = 0;
			setFormValue({ ...formValue, [name]: value });
			setInputValid({ ...inputValid, [name]: true });
		} else if (value < 0 || isNaN(value)) {
			setInputValid({ ...inputValid, [name]: false });
		} else {
			setFormValue({ ...formValue, [name]: value });
			setInputValid({ ...inputValid, [name]: true });
		}
	};

	const onChangedTipValue = (e: Event) => {
		console.log(e);
		// const { id } = e.target;
		// if (id === "custom") {
		//   setActiveBtn(6);
		//   onChangedValue(e);
		// } else if (+id < 5) {
		//   setActiveBtn(id);
		//   onChangedValue(e);
		// } else {
		//   onChangedValue(e);
		// }
	};

	const onChangedValue = (e: Event) => {
		console.log(e);
		// let { id, value } = e.target;
		// if (checkNumber(e)) {
		//   switch (id) {
		//     case "bill":
		//       setInputBill(value);
		//       checkInvalid(id, value);
		//       break;
		//     case "person":
		//       setInputPerson(value);
		//       checkInvalid(id, value);
		//       break;
		//     case "custom":
		//       setInputCustom(value);
		//       checkInvalid("tip", value);
		//       break;
		//     default:
		//       checkInvalid("tip", value);
		//       return;
		//   }
		// }
	};

	const value: ICalculatorContext = {
		formValid,
		formValue,
		result,
		isDisabled,
		activeBtn,
		inputValid,
		inputBill,
		inputCustom,
		inputPerson,
		onChangedValue,
		// handlerReset,
		// handlerSubmit,
		onChangedTipValue,
		children,
	};

	return (
		<CalculatorContext.Provider value={value}>
			{children}
		</CalculatorContext.Provider>
	);
};
