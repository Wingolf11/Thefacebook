import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

import "./App.css";
import { Authentication } from "./hooks/useAuth";

export default function App() {
	return (
		<>
			<Authentication>
				<BrowserRouter>
					<Root>
						<Routes>
							<Route index element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/about" element={<About />} />
							<Route path="/register" element={<Register />} />
							<Route path="/contactus" element={<ContactUs />} />
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</Root>
				</BrowserRouter>
			</Authentication>
		</>
	);
}
