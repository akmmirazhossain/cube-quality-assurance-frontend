import { cn } from '@/constants/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import Heading from './Heading';

const circleStyle = cva(
	'relative lg:absolute h-[250px] w-[250px] md:h-[385px] md:w-[385px] rounded-full border-4 border-white',
	{
		variants: {
			variant: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
			},
			position: {
				topLeft: 'lg:-top-[240px] lg:-left-[210px]',
				topRight: 'lg:-top-[240px] lg:-right-[210px]',
				bottomLeft: 'lg:-bottom-[70px] lg:-left-[300px]',
				bottomRight: 'lg:-bottom-[70px] lg:-right-[300px]',
			},
		},
	},
);
const Circle = ({ variant, position, title1, title2, text }) => {
	return (
		<div className={cn(circleStyle({ variant, position }))}>
			<div className="relative grid h-full w-full place-items-center">
				<div className="relative text-center">
					<Heading variant={'white'} size={40} className={'text-lg'}>
						<span className="font-light">{title1}</span> <br />
						{title2}
					</Heading>
					<p className="p-3 text-sm text-white md:px-8 md:py-5 md:text-base">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Circle;
