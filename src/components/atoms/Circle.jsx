import { cn } from '@/constants/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import Heading from './Heading';

const circleStyle = cva(
	'relative md:absolute h-[250px] w-[250px] md:h-[385px] md:w-[385px] rounded-full border-4 border-white',
	{
		variants: {
			variant: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
			},
			position: {
				topLeft: 'md:-top-[240px] md:-left-[210px]',
				topRight: 'md:-top-[240px] md:-right-[210px]',
				bottomLeft: 'md:-bottom-[70px] md:-left-[300px]',
				bottomRight: 'md:-bottom-[70px] md:-right-[300px]',
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
