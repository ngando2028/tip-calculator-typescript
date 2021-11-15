import { Fragment } from "react";
import "./assets/style/scss/main.scss";
import Calculator from "./components/Calulator";

const App: React.FC = () => {
	return (
		<Fragment>
			<h1 className="calculator__heading">
				Spli <br />
				tter
			</h1>

			<main className="container">
				<Calculator />
			</main>

			<div className="attribution">
				Challenge by
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by
				<a href="https://github.com/ngando2028/Training_Javascript_2021">
					Ngan Do
				</a>
				.
			</div>
		</Fragment>
	);
};
export default App;
