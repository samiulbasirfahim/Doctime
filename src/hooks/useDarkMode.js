import { useEffect, useState } from "react"

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState()
	useEffect(() => {
		const darkMode = JSON.parse(localStorage.getItem("darkMode"))
		setIsDarkMode(darkMode)
	}, [])
	const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem("darkMode",!isDarkMode)
    }
	return {isDarkMode, handleDarkMode}
}

export default useDarkMode
