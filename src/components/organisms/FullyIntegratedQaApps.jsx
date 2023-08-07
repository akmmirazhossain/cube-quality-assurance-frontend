import React from 'react';

const FullyIntegratedQaApps = () => {
	return (
		<div className="px-10 py-6 text-secondary sm:px-6 md:px-8 md:py-12 lg:px-16">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<h1 className="col-span-2 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl">
					Fully Integrated QA apps
				</h1>
				<h2 className="col-span-2 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
					to make your life easier
				</h2>
			</div>

			<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div className="md:col-span-1">
					<h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-2xl">Marketing</h1>
					<div className="text-sm md:text-base">
						Formulate elaborate and advanced marketing campaigns that are centered around your
						prospects.
					</div>
				</div>

				<div className="md:col-span-1">
					<h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-2xl">Events</h1>
					<div className="text-sm md:text-base">
						Create email campaigns to engage your customers or encourage leads to attend promotional
						events.
					</div>
				</div>

				<div className="md:col-span-1">
					<h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-2xl">Surveys</h1>
					<div className="text-sm md:text-base">
						Discover high-quality insights through surveys and get them completed through email
						campaigns.
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullyIntegratedQaApps;
