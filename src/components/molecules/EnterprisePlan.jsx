import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';
import { isRTL } from '@/constants/utils';

const EnterprisePlan = () => {
	return (
		<div className="h-full">
			<div className={`${isRTL() ? 'md:rtl-module-skew' : 'md:module-skew'} bg-primary`}>
				<div className="relative">
					<div
						className={`${
							isRTL() ? 'md:rtl-module-skew-inner' : 'md:module-skew-inner'
						} relative p-5 px-10 text-white md:-left-32 md:px-0`}
					>
						<div className="relative w-full text-center">
							<Heading variant={'white'} size={'md'} weight={'medium'}>
								Enterprise
							</Heading>
							<span className="text-base font-light">for small business chain</span>
							<p className="mt-2 px-4 text-base font-normal md:px-14 md:text-lg md:font-medium">
								with custom branding and on-demand support for the following modules:
							</p>
						</div>
						<div className="ml-0 pt-4 md:ml-52 md:pt-8">
							<ul className="list-disc px-8 md:px-0">
								{AppModuleList.map(({ id, title }) => (
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
		</div>
	);
};

export default EnterprisePlan;
