import { cn } from '@/constants/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React, { Children } from 'react';
const buttonVariant = cva('border-0 rounded-lg text-base text-white font-medium', {
	variants: {
		variant: {
			primary: 'bg-primary',
			secondary: 'bg-secondary',
		},
		size: {
			small: 'py-[11px] px-[21px]',
			medium: 'py-[12px] px-[40px]',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});
const Button = ({ className, children, href, variant, size, ...props }) => {
	if (href) {
		return (
			<Link href={href} className={buttonVariant({ variant, size, className })}>
				{children}
			</Link>
		);
	}
	return (
		<button type="button" className={buttonVariant({ variant, size, className })} {...props}>
			{children}
		</button>
	);
};

export { Button, buttonVariant };
