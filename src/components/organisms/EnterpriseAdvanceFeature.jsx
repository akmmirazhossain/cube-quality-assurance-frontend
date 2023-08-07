import React from 'react';
import Heading from '../atoms/Heading';

const EnterpriseAdvanceFeature = () => {
	return (
		<div className="relative h-full w-full pb-5 md:mt-5 md:px-20">
			<div className="md:w-2/3">
				<div className="max-w-[306px]">
					<Heading className={'text-xl text-white md:text-[26px] md:text-primary'}>
						Optimize your results by using the Enterprise advanced features
					</Heading>
				</div>
				<div className="textt-base w-full pt-5 font-extralight text-white md:pr-10 md:pt-10 md:text-2xl md:font-light md:text-secondary">
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
						quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
						consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
						consequat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EnterpriseAdvanceFeature;
