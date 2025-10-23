import { NavLink } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
	return (
		<header>
			<img src="../../img/headerPhoto.png" alt="" />
			<div id="div1">
				<img src="../../img/headerLogo.png" alt="" />
				<div id="div1-1">
					<NavLink to="/login">login</NavLink>
					<NavLink to="/register">register</NavLink>
					<NavLink to="/about">about</NavLink>
				</div>
			</div>
		</header>
	);
}
