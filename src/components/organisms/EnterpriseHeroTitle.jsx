import React from 'react';
import Heading from '../atoms/Heading';

const EnterpriseHeroTitle = () => {
	return (
		<div className="relative mx-auto  h-full max-w-[560px] pt-10 md:pt-32 ">
			<Heading variant={'white'} className={'text-xl md:text-5xl'}>
				Enterprise...
			</Heading>
			<Heading variant={'white'} weight={'light'} className={'text-xl md:text-5xl'}>
				Perfect for customising your business chain.
			</Heading>
		</div>
	);
};

export default EnterpriseHeroTitle;
