import React from 'react';
import Heading from '../atoms/Heading';

const PlanHeader = () => {
	return (
		<div className="relative min-h-[280px]">
			<div className="absolute right-20 h-full w-[550px]">
				<div className="mx-auto">
					<div className="text-center text-secondary">
						<Heading variant={'secondary'} weight={'light'}>
							Choose a Plan That's
						</Heading>

						<Heading variant={'secondary'}>Right for your Business</Heading>
						<p className="my-4">*Monthly Subscription Per 3 or 6 Months</p>
					</div>
					<div className="text-center text-primary"></div>
				</div>
			</div>
		</div>
	);
};

export default PlanHeader;
