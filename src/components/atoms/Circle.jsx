import { cn } from '@/constants/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import Heading from './Heading';

const circleStyle = cva('absolute h-[385px] w-[385px] rounded-full border-4 border-white', {
	variants: {
		variant: {
			primary: 'bg-primary',
			secondary: 'bg-secondary',
		},
		position: {
			topLeft: '-top-[240px] md:-left-[210px]',
			topRight: '-top-[240px] -right-[210px]',
			bottomLeft: '-bottom-[70px] -left-[300px]',
			bottomRight: '-bottom-[70px] -right-[300px]',
		},
	},
});
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
