import { FooterAboutUsNavLinklist } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';
import FooterItemLink from '../atoms/FooterItemLink';

export const FooterAboutUs = () => {
	return (
		<div className="text-white">
			<h1 className="text-[24px] ">About Us</h1>
			<div className="my-3">
				<ul className="grid gap-2">
					{FooterAboutUsNavLinklist.map(({ id, title, href }) => (
						<FooterItemLink id={id} href={href} title={title} />
					))}
				</ul>
			</div>
		</div>
	);
};
