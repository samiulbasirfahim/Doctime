import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import useDarkMode from "./hooks/useDarkMode"
import ContactUs from "./Pages/ContactUs"
import NotFound from "./Pages/NotFound"

function App() {
	const { isDarkMode, handleDarkMode } = useDarkMode()
	return (
		<div className={isDarkMode && "dark"}>
			<div className="min-h-screen flex">
				<Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} ></Header>
				<Routes>
					<Route path={"/contact-us"} element={<ContactUs></ContactUs>}></Route>
					<Route path={"*"} element={<NotFound></NotFound>}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
