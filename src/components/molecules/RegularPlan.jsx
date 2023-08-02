import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const RegularPlan = () => {
	return (
		<div className="h-full">
			<div className="relative p-5">
				<div className="mx-auto w-2/3">
					<div className="relative w-full p-2 text-center">
						<Heading variant={'secondary'} size={'md'} weight={'medium'}>
							Regular
						</Heading>

						<span className="text-base font-light">for small business</span>
						<p className="text-lg font-medium">
							Web app with minimal feature of the following modules:
						</p>
					</div>
					<div className="ml-52 py-16">
						<ul className="list-disc">
							{AppModuleList.slice(0, 4).map(({ id, title }) => (
								<li key={id}>{title}</li>
							))}
						</ul>
					</div>
					<div className="my-8 text-center">
						<Button variant={'secondary'} size={'small'}>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegularPlan;
