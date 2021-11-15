import { createContext, useEffect, useState } from "react";
import { API_URL } from "../constant/config";

export const CalCulContext = createContext();

function CalculProvider({ children }) {
	const [formValid, setFormValid] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [inputBill, setInputBill] = useState("");
	const [inputPerson, setInputPerson] = useState("");
	const [inputCustom, setInputCustom] = useState("");
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
			(formValue.tip >= 0 || isNaN(formValue.tip))
		) {
			setFormValid(true);
		} else setFormValid(false);
	}, [formValue, formValue.bill, formValue.person, formValue.tip, formValid]);

	const handlerSubmit = async (e) => {
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
		} catch (error) {
			alert(error.message);
			setIsDisabled(false);
		}
	};

	const handlerReset = () => {
		setFormValid(false);
		setResult({ tip: null, total: null });
		setFormValue({ bill: 0, person: 0, tip: 0, tipCustom: false });
		setInputValid({ bill: true, person: true, tip: true });
		setActiveBtn(6);
		setInputBill("");
		setInputCustom("");
		setInputPerson("");
	};

	const checkNumber = (e) => {
		let { name, value } = e.target;
		let re = name === "person" ? /^[0-9]*$/ : /^[0-9]*\.?[0-9]*$/;
		if (!re.test(value)) {
			e.preventDefault();
			return false;
		}
		return true;
	};

	const checkInvalid = (name, value) => {
		if ((value === "" || value === 0) && name === "tip") {
			value = 0;
			setFormValue({ ...formValue, [name]: value, tipCustom: true });
			setInputValid({ ...inputValid, [name]: true });
		} else if (parseFloat(value) < 0 || isNaN(parseFloat(value))) {
			setInputValid({ ...inputValid, [name]: false });
		} else {
			setFormValue({ ...formValue, [name]: value, tipCustom: false });
			setInputValid({ ...inputValid, [name]: true });
		}
	};

	const onChangedTipValue = (e) => {
		const { id } = e.target;
		if (id === "custom") {
			setActiveBtn(6);
			onChangedValue(e);
		} else if (+id < 5) {
			setActiveBtn(id);
			onChangedValue(e);
		} else {
			onChangedValue(e);
		}
	};

	const onChangedValue = (e) => {
		let { id, value } = e.target;
		if (checkNumber(e)) {
			switch (id) {
				case "bill":
					setInputBill(value);
					checkInvalid(id, value);
					break;
				case "person":
					setInputPerson(value);
					checkInvalid(id, value);
					break;
				case "custom":
					setInputCustom(value);
					checkInvalid("tip", value);
					break;
				default:
					checkInvalid("tip", value);
					return;
			}
		}
	};

	const value = {
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
		handlerReset,
		handlerSubmit,
		onChangedTipValue,
	};

	return (
		<CalCulContext.Provider value={value}>{children}</CalCulContext.Provider>
	);
}

export { CalculProvider };
