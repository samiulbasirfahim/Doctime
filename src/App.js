import Header from "./Components/Header"
import useDarkMode from "./hooks/useDarkMode"

function App() {
	const { isDarkMode, handleDarkMode } = useDarkMode()
	return (
		<div className={isDarkMode && "dark"}>
			<div className="min-h-screen">
        <Header></Header>
      </div>
		</div>
	)
}

export default App
