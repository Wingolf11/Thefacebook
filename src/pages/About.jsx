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
                    <div className="the-people-list">
                        <table>
                            <tr>
                                <th><a href="">Mark Zukerberg</a></th>
                                <td>Founder, Master and Commander, Enemy of the State.</td>
                            </tr>
                            <tr>
                                <th><a href="">Eduardo Saverin</a></th>
                                <td>Business Stuff, Corporate Stuff, Brazilian Affairs.</td>
                            </tr>
                            <tr>
                                <th><a href="">Andrew McCollum</a></th>
                                <td>Graphic Art, General Rockstar.</td>
                            </tr>
                        </table>
                    </div>
                </Card>
				<Button></Button>
			</Card>
		</>
	);
}
