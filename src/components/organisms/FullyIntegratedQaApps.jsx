import React from 'react';

const FullyIntegratedQaApps = () => {
	return (
		<div className="px-16 py-12 text-black">
			<div className="grid grid-cols-3 gap-4">
				<h1 className="col-span-2 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl">
					Fully Integrated QA apps
				</h1>
				<h2 className="relative top-[-10px] col-span-2 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
					to make your life easier
				</h2>
			</div>

			<div className="mt-8 grid  gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div className="">
					<h1 className="text-1xl md:text-1xl font-bold lg:text-2xl xl:text-2xl">Marketing</h1>
					<div className="">
						Formulate elaborate and advanced marketing campaigns that are centered around your
						prospects.
					</div>
				</div>

				<div className="">
					<h1 className="text-1xl md:text-1xl font-bold lg:text-2xl xl:text-2xl">Events</h1>
					<div className="">
						Create email campaigns to engage your customers or encourage leads to attend promotional
						events.
					</div>
				</div>

				<div className="">
					<h1 className="text-1xl md:text-1xl font-bold lg:text-2xl xl:text-2xl">Surverys</h1>
					<div className="">
						Discover high quality insights through surveys and get them completed through email
						campaigns.
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullyIntegratedQaApps;
