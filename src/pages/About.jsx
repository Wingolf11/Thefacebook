import Card from "../components/Card";
import Button from "../components/Button";

import "../styles/About.css";

export default function About() {
	return (
		<>
			<Card title="About Thefacebook">
				<p id="about">[About]</p>
				<Card title="The Project">
					<p className="plain-text">
						Thefacebook is an online directory that connects people through
						social networks at colleges and universities
                    </p>
				</Card>
				<Card title="The People">
                    <table className="the-people-list">
                        <thead>
                        <tr>
                            <th><a className="links-thepeople" href="">Mark Zukerberg</a></th>
                            <td>Founder, Master and Commander, Enemy of the State.</td>
                        </tr>
                        <tr>
                            <th><a className="links-thepeople" href="">Eduardo Saverin</a></th>
                            <td>Business Stuff, Corporate Stuff, Brazilian Affairs.</td>
                        </tr>
                        <tr>
                            <th><a className="links-thepeople" href="">Andrew McCollum</a></th>
                            <td>Graphic Art, General Rockstar.</td>
                        </tr>
                        <tr>
                            <th><a className="links-thepeople" href="">Contact Us</a></th>
                        </tr>
                        </thead>
                    </table>
                </Card>
				<Button></Button>
			</Card>
		</>
	);
}
