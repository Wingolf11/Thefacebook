import db from "../../db.json";

export function getUserEmail(email) {
	return db.users.find((user) => user.email === email);
}
