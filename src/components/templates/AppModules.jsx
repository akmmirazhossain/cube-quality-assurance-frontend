import React from 'react';
import { AppModuleHeaderItem, AppModuleListItem } from '../organisms';

const AppModules = () => {
	return (
		<div className="relative p-10">
			{/* AppsModule Heading */}
			<AppModuleHeaderItem />
			{/* Apps Module List */}
			<AppModuleListItem />

			<div className="relative min-h-[280px]">
				<div className="absolute right-20 h-full w-[550px]">
					<div className="mx-auto">
						<div className="text-center text-secondary">
							<h1 className="text-5xl font-thin">Choose a Plan That's</h1>
							<h1 className="text-5xl font-medium">Right for your Business</h1>
							<p className="my-4">*Monthly Subscription Per 3 or 6 Months</p>
						</div>
						<div className="text-center text-primary"></div>
					</div>
				</div>
			</div>

			<div className="relative h-56">
				<div className="grid grid-flow-row grid-cols-2">
					<div>Item one</div>
					<div className="h-full">
						<div className=" skew-[45deg] h-full w-1/2 bg-primary"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppModules;
