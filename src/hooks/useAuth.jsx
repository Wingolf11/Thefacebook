//import

//create constext

//make auth comp

import { createContext, useContext, useState } from "react";
import { getUserEmail } from "../components/utils/authentication";

const AuthenticationContext = createContext();

export function Authentication({ children }) {
	const [user, setUser] = useState(null);

	function signInUser(email, password) {
		const user = getUserEmail(email);

		/* 		if (!user || user.password !== password)
			throw new Error("Wrong credentials"); */

		setUser(user);

		return user;
	}

	return (
		<AuthenticationContext.Provider
			value={{
				user,
				signInUser,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthenticationContext);

	if (context === undefined) {
		throw new Error("Missing context <Authentication>");
	}
	return context;
}
