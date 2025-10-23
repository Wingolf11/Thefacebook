import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";

import "./App.css";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Root>
					<Routes>
                                                <Route index element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/about" element={<About />} />
						<Route path="/register" element={<Register />} />
						<Route path="/contactus" element={<ContactUs />} />
					</Routes>
				</Root>
			</BrowserRouter>
		</>
	);
}
