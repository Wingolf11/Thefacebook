import Card from "../components/Card";
import Button from "../components/Button";

import "../styles/About.css";

export default function About() {
	return (
		<>
			<Card title="About Thefacebook">
				<p id="about">[About]</p>
				<Card title="The Project">
					<p>
						Thefacebook is an online directory that connects people through
						social networks at colleges and universities
					</p>
				</Card>
				<Card title="The People"></Card>
				<Button></Button>
			</Card>
		</>
	);
}
