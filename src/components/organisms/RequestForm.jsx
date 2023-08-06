import React from 'react';
//import Group from "../../public"

const RequestForm = () => {
	return (
		<div
			className="relative mx-auto h-[1000px]  border bg-solitude bg-[url('/images/Group.png')] bg-contain bg-center bg-no-repeat object-contain"
			style={{ backgroundImage: `url('images/Group.png')` }}
		>
			<div className="flex flex-row justify-center">
				<div className="basis-1/2 ">
					<div className="-px-3 w-full pb-5 text-center text-[#077D83]">
						Simply complete the beLow formand one of our experts will get back to you
					</div>

					<div className="container mx-auto p-4">
						<form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{/* Row 1 */}
							<div>
								<label htmlFor="field1" className="block text-sm font-medium text-[#077D83]">
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
								<label htmlFor="field2" className="block text-sm font-medium text-[#077D83]">
									Last Name*
								</label>
								<input
									type="text"
									id="field2"
									name="field2"
									className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{/* Row 2 */}
							<div>
								<label htmlFor="field3" className="block text-sm font-medium text-[#077D83]">
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
								<label htmlFor="field4" className="block text-sm font-medium text-[#077D83]">
									Business Name*
								</label>
								<input
									type="text"
									id="field4"
									name="field4"
									className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{/* Row 3 */}
							<div>
								<label htmlFor="field5" className="block text-sm font-medium text-[#077D83]">
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
								<label htmlFor="field6" className="block text-sm font-medium text-[#077D83]">
									Nature of Industry
								</label>
								<select
									id="field6"
									name="field6"
									className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								>
									<option value="option1">---</option>
									<option value="option2">Option 1</option>
									<option value="option3">Option 2</option>
								</select>
							</div>
							{/* Textarea */}
							<div className="col-span-2">
								<label htmlFor="textarea" className="block text-sm font-medium  text-[#077D83]">
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
							<div className="col-span-2 mx-auto">
								<button
									type="submit"
									className="mt-4 w-80 rounded-md  bg-[#23252D]  p-2 text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestForm;
