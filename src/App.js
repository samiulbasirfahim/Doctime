import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import useDarkMode from "./hooks/useDarkMode"
import ContactUs from "./Pages/ContactUs"
import Doctors from "./Pages/Doctors"
import NotFound from "./Pages/NotFound"
import Testimonial from "./Pages/Testimonial"

function App() {
	const { isDarkMode, handleDarkMode } = useDarkMode()
	return (
		<div className={isDarkMode && "dark"}>
			<div className="min-h-screen flex bg-white dark:bg-gray-800">
				<Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} ></Header>
				<Routes>
					<Route path={"/doctors"} element={<Doctors></Doctors>}></Route>
					<Route path={"/testimonials"} element={<Testimonial></Testimonial>}></Route>
					<Route path={"/contact-us"} element={<ContactUs></ContactUs>}></Route>
					<Route path={"*"} element={<NotFound></NotFound>}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
