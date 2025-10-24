import Button from "../components/Button";
import Card from "../components/Card";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/Login.css";

export default function Login() {
	const { user, signInUser } = useAuth();
	
	function signUser(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email")?.toString();
		const password = formData.get("password")?.toString();

		const signedUser = signInUser(email, password);

		console.log(signedUser);
/* 		if(signInUser) {
			Navigate('./Profile.jsx');
		} */
	}

	return (
		<Card title="Login">
			<h1>[Login]</h1>
			<form onSubmit={signUser}>
				<div className="input-form">
					<div className="email-input">
						<label htmlFor="">Email</label>
						<input type="text" name="email" />
					</div>
					<div className="password-input">
						<label htmlFor="">Password</label>
						<input type="password" name="password" />
					</div>
				</div>
				<div className="button-div">
					<Button title="Login"></Button>
					<Button title="Register"></Button>
				</div>
				<p>
					If you have forgotten your password, click <a href="">here</a> to
					reset it.
				</p>
			</form>
		</Card>
	);
}
