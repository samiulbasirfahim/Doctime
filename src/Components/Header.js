import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Header = ({ handleDarkMode, isDarkMode }) => {
	const [show, setShow] = useState(true)

	return (
		<div className="h-screen z-50 sticky top-0 left-0">
			<div className="w-64 absolute sm:relative bg-gray-300 dark:bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
				<div className="px-8">
					<div className="h-16 w-full flex items-center"></div>
					<ul className="mt-12">
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Home</span>
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/make-appointment"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">
									Make appointments
								</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								8
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/doctors"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Our doctors</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								5
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/invoices"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Invoices</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								5
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/dashboards"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Dashboard</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								25
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/contact-us"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Contact us</span>
							</div>
						</NavLink>
						<button
							onClick={handleDarkMode}
							className="flex w-full justify-center text-gray-700 hover:text-gray-500 cursor-pointer items-center dark:text-gray-100"
						>
							{!isDarkMode ? (
								<MdLightMode></MdLightMode>
							) : (
								<MdDarkMode></MdDarkMode>
							)}
							<div className="flex items-center">
								<span className="   ml-2">
									{!isDarkMode ? "Light Mode" : "Dark Mode"}
								</span>
							</div>
						</button>
					</ul>
					<div className="flex justify-center mt-48 mb-4 w-full">
						<div className="relative ">
							<div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-search"
									width={16}
									height={16}
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<circle cx={10} cy={10} r={7} />
									<line x1={21} y1={21} x2={15} y2={15} />
								</svg>
							</div>
							<input
								className=" bg-gray-400 dark:bg-gray-600  focus:outline-none rounded w-full   text-gray-500  pl-10 py-2"
								// className=" bg-gray-400 dark:bg-gray-600  focus:outline-none rounded w-full   text-gray-800 dark:text-gray-500 pl-10 py-2"
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className={
					show
						? "w-64 absolute sm:relative bg-gray-300 dark:bg-gray-800  shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-full"
						: "w-64 absolute sm:relative bg-gray-300 dark:bg-gray-800  shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-0"
				}
				id="mobile-nav"
			>
				<div
					className="h-10 w-10  bg-gray-800  absolute  right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
					id="mobile-toggler"
					onClick={() => setShow(!show)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-adjustments"
						width={20}
						height={20}
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#FFFFFF"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<circle cx={6} cy={10} r={2} />
						<line x1={6} y1={4} x2={6} y2={8} />
						<line x1={6} y1={12} x2={6} y2={20} />
						<circle cx={12} cy={16} r={2} />
						<line x1={12} y1={4} x2={12} y2={14} />
						<line x1={12} y1={18} x2={12} y2={20} />
						<circle cx={18} cy={7} r={2} />
						<line x1={18} y1={4} x2={18} y2={5} />
						<line x1={18} y1={9} x2={18} y2={20} />
					</svg>
				</div>
				<div className="px-8">
					<div className="h-16 w-full flex items-center">
						{/* 
			logo here
*/}
					</div>
					<ul className="mt-12">
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: {}
							}}
							to={"/"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Home</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								5
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/make-appointment"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">
									Make appointment
								</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								8
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/doctors"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Our doctors</span>
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/invoices"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Invoices</span>
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/dashboards"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Dashboard</span>
							</div>
							<div className="py-1 px-3 bg-gray-400 dark:bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
								25
							</div>
						</NavLink>
						<NavLink
							style={({ isActive }) => {
								return isActive
									? {
											borderBottom: "2px solid green",
											boxShadow: "1px 1px 1px 1px",
									  }
									: { color: "" }
							}}
							to={"/contact-us"}
							className="flex w-full justify-between text-gray-700 hover:text-gray-500 cursor-pointer items-center mb-6 dark:text-gray-100"
						>
							<div className="flex items-center">
								<span className="   ml-2">Contact us</span>
							</div>
						</NavLink>
						<button
							onClick={handleDarkMode}
							className="flex w-full justify-center text-gray-700 hover:text-gray-500 cursor-pointer items-center dark:text-gray-100"
						>
							{!isDarkMode ? (
								<MdLightMode></MdLightMode>
							) : (
								<MdDarkMode></MdDarkMode>
							)}
							<div className="flex items-center">
								<span className="   ml-2">
									{!isDarkMode ? "Light Mode" : "Dark Mode"}
								</span>
							</div>
						</button>
					</ul>
					<div className="flex justify-center mt-48 mb-4 w-full">
						<div className="relative ">
							<div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-search"
									width={16}
									height={16}
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<circle cx={10} cy={10} r={7} />
									<line x1={21} y1={21} x2={15} y2={15} />
								</svg>
							</div>
							<input
								className=" bg-gray-400 dark:bg-gray-600  focus:outline-none rounded w-full   text-gray-800 dark:text-gray-500 pl-10 py-2"
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
