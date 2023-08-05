import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const EnterprisePlan = () => {
	return (
		// <div className="h-full overflow-hidden">
		// 	<div className="module-skew bg-primary">
		// 		<div className="relative p-5">
		// 			<div className=" module-skew-inner -ml-10 text-white">
		// 				<div className="relative w-full p-2 text-center">
		// 					<Heading variant={'white'} size={'md'} weight={'medium'}>
		// 						Enterprise
		// 					</Heading>
		// 					<span className="text-base font-light">for small business chain</span>
		// 					<p className="px-14 text-lg font-medium">
		// 						with custom branding and on-demand support for the following modules:
		// 					</p>
		// 				</div>
		// 				<div className=" ml-52 pt-8">
		// 					<ul className="list-disc">
		// 						{AppModuleList.map(({ id, title }) => (
		// 							<li key={id}>{title}</li>
		// 						))}
		// 					</ul>
		// 				</div>
		// 				<div className="my-8 text-center">
		// 					<Button variant={'secondary'} size={'small'}>
		// 						Get Started
		// 					</Button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className="h-full overflow-hidden">
			<div className="md:module-skew bg-primary">
				<div className="relative p-5">
					<div className="md:module-skew-inner text-white">
						<div className="relative w-full p-2 text-center">
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
