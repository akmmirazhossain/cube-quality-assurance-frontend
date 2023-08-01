import React from 'react';

const PlanHeader = () => {
	return (
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
	);
};

export default PlanHeader;
