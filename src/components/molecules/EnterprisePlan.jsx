import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const EnterprisePlan = () => {
	return (
		<div className="h-full overflow-hidden">
			<div className="module-skew bg-primary">
				<div className="relative p-5">
					<div className=" module-skew-inner -ml-10 text-white">
						<div className="relative w-full p-2 text-center">
							<Heading variant={'white'} size={'md'} weight={'medium'}>
								Enterprise
							</Heading>
							<span className="text-base font-light">for small business chain</span>
							<p className="px-14 text-lg font-medium">
								with custom branding and on-demand support for the following modules:
							</p>
						</div>
						<div className=" ml-52 pt-8">
							<ul className="list-disc">
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
