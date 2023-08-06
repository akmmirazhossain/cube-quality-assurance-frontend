import React from 'react';
//import Group from "../../public"

const RequestForm = () => {
	return (
		<div className="relative mx-auto flex h-full items-center justify-center border bg-solitude bg-[url('/images/Group.png')] bg-contain bg-center bg-no-repeat object-contain">
			<div className="h-full w-full p-10 md:w-[70%] md:p-20">
				<div className="px-3 pb-5 text-center text-primary">
					Simply complete the below form, and one of our experts will get back to you
				</div>

				<form>
					<div className="grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
						<div>
							<label htmlFor="field1" className="block text-sm font-medium text-primary">
								First Name*
							</label>
							<input
								type="text"
								id="field1"
								name="field1"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div>
							<label htmlFor="field2" className="block text-sm font-medium text-primary">
								Last Name*
							</label>
							<input
								type="text"
								id="field2"
								name="field2"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div>
							<label htmlFor="field3" className="block text-sm font-medium text-primary">
								Email Address*
							</label>
							<input
								type="text"
								id="field3"
								name="field3"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div>
							<label htmlFor="field4" className="block text-sm font-medium text-primary">
								Business Name*
							</label>
							<input
								type="text"
								id="field4"
								name="field4"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div>
							<label htmlFor="field5" className="block text-sm font-medium text-primary">
								Contact Number*
							</label>
							<input
								type="text"
								id="field5"
								name="field5"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div>
							<label htmlFor="field6" className="block text-sm font-medium text-primary">
								Nature of Industry
							</label>
							<select
								id="field6"
								name="field6"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							>
								<option value="">---</option>
								<option value="option2">Option 1</option>
								<option value="option3">Option 2</option>
							</select>
						</div>
					</div>
					{/* Textarea */}
					<div className="col-span-2">
						<label htmlFor="textarea" className="block text-sm font-medium text-primary">
							Description of your request*
						</label>
						<textarea
							id="textarea"
							name="textarea"
							rows={4}
							className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							defaultValue={''}
						/>
					</div>
					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="mt-4 w-full rounded-md bg-dark p-2 text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-80"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RequestForm;
