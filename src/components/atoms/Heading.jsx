import { cva } from 'class-variance-authority';
import React from 'react';

const headerDesign = cva('text-primary', {
	variants: {
		variant: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			white: 'text-white',
		},
		size: {
			lg: 'text-5xl',
			md: 'text-[32px]',
		},
		weight: {
			medium: 'font-medium',
			light: 'font-light',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'lg',
		weight: 'medium',
	},
});

const Heading = ({ variant, weight, size, className, children, ...props }) => {
	return (
		<h1 className={headerDesign({ variant, weight, size, className })} {...props}>
			{children}
		</h1>
	);
};

export default Heading;
