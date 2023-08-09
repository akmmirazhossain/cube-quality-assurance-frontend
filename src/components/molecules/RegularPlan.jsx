import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';
import { isRTL } from '@/constants/utils';

const RegularPlan = () => {
	return (
		<div
			className={`${
				isRTL() ? 'md:rtl-regular-skew' : 'md:regular-skew h-full'
			} bg-secondary text-white`}
		>
			<div className={`${isRTL() ? 'md:rtl-module-skew-inner' : 'md:module-skew-inner'} relative`}>
				<div className="mx-auto w-2/3">
					<div className="relative w-full p-2 text-center">
						<Heading tag="p" variant={'white'} size={'md'} weight={'medium'}>
							Regular
						</Heading>
						<span className="text-base font-light">for small business</span>
						<p className="text-lg font-medium">
							Web app with minimal feature of the following modules:
						</p>
					</div>
					<div className={`ml-0 py-8 ${isRTL() ? 'md:mr-52' : 'md:ml-52'} md:py-16`}>
						<ul className="list-disc">
							{AppModuleList.slice(0, 4).map(({ id, title }) => (
								<li key={id}>{title}</li>
							))}
						</ul>
					</div>
					<div className="my-8 text-center">
						<Button variant={'primary'} size={'small'}>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegularPlan;
