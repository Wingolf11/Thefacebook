import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Root.css";

export default function Root({ children }) {
	return (
		<>
			<div id="wrapper">
				<Header></Header>
				<main>
					<aside>
						<Card form={true}></Card>
					</aside>
					<div id="card-display">
						{children}
						<Footer></Footer>
					</div>
				</main>
			</div>
		</>
	);
}
