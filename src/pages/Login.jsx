import Card from "../components/Card";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
	const { user, signInUser } = useAuth();
	function signUser(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email")?.toString();
		const password = formData.get("password")?.toString();

		const signedUser = signInUser(email, password);

		console.log(signedUser);
	}

	return (
		<form onSubmit={signUser}>
			<input type="text" name="email" />
			<input type="password" name="password" />
			<button type="submit">Login</button>
		</form>
	);
}
