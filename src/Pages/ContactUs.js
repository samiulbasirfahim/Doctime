import React from "react"

function ContactUs() {
	return (
		<div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full">
			<div className="w-full flex items-center justify-center my-12">
                <h1 className="text-4xl font-bold">Doctime</h1>
				<form className="absolute top-40 bg-white dark:bg-gray-800 shadow rounded py-12 lg:px-28 px-8">
					<p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
						Let's chat and get a quote!
					</p>
					<div className="md:flex items-center mt-12">
						<div className="md:w-72 flex flex-col">
							<label className="text-base font-semibold leading-none dark:text-white text-gray-800">
								Name
							</label>
							<input
								name="name"
								tabIndex={0}
								arial-label="Please input name"
								type="text"
								className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 dark:bg-gray-600 border rounded border-gray-200 placeholder-gray-100"
								placeholder="Please input  name"
							/>
						</div>
						<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
							<label className="text-base font-semibold leading-none dark:text-white text-gray-800">
								Email Address
							</label>
							<input
								name="email"
								tabIndex={0}
								arial-label="Please input email address"
								type="email"
								className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 dark:bg-gray-600 border rounded border-gray-200 placeholder-gray-100"
								placeholder="Please input email address"
							/>
						</div>
					</div>
					<div className="md:flex items-center mt-8">
						<div className="md:w-72 flex flex-col">
							<label className="text-base font-semibold leading-none dark:text-white text-gray-800">
								Phone
							</label>
							<input
								name="phone"
								tabIndex={0}
								arial-label="Please input company name"
								type="phone"
								className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 dark:bg-gray-600 border rounded border-gray-200 placeholder-gray-100 "
								placeholder="Please input phone number"
							/>
						</div>
						<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
							<label className="text-base font-semibold leading-none dark:text-white text-gray-800">
								Subject
							</label>
							<input
								name="disease"
								tabIndex={0}
								arial-label="Please input country name"
								type="text"
								className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 dark:bg-gray-600 border rounded border-gray-200 placeholder-gray-100"
								placeholder="Please input a subject"
							/>
						</div>
					</div>
					<div>
						<div className="w-full flex flex-col mt-8">
							<label className="text-base font-semibold leading-none dark:text-white text-gray-800">
								Message
							</label>
							<textarea
								name="message"
								tabIndex={0}
								aria-label="leave a message"
								// eslint-disable-next-line jsx-a11y/aria-role
								role="textbook"
								type="name"
								className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 dark:bg-gray-600 border rounded border-gray-200 placeholder-gray-100 resize-none"
								defaultValue={""}
							/>
						</div>
					</div>
					<p className="text-xs leading-3 text-gray-600 mt-4">
						By clicking submit you agree to our terms of service,
						privacy policy and how we use data as stated
					</p>
					<div className="flex items-center justify-center w-full">
						<button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
