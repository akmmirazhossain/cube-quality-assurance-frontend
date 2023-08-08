import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calender = () => {
	return (
		<>
			<div className="bg-secondary p-2 text-white">
				<div className=" mx-auto grid w-full grid-flow-col grid-rows-2 p-2 md:w-[60%] md:pt-6">
					<div className=" text-[36px] font-light">Schedule an appointment with our experts</div>
					<div className=" font-light">
						<p className="font-medium ">Please select a category</p>
						<select
							id="field6"
							name="field6"
							className="via-white-100 mt-1 block w-full border-gray-300 bg-gradient-to-br from-gray-100 to-gray-100 p-1 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-full sm:text-sm md:w-[35%]"
						>
							<option value="">--Recruitment</option>
						</select>
					</div>
				</div>
			</div>
			<div className=" overflow-hidden pt-10">
				<InlineWidget
					url="https://calendly.com/akmmh/30min?month=2023-08"
					className="overflow-hidden"
				/>
			</div>
		</>
	);
};

export default Calender;
