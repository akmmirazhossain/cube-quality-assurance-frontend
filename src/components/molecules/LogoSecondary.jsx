import React from 'react';
import { LogoSecondaryIcon } from '../../../public/images';
import Link from 'next/link';
import Image from 'next/image';

const LogoSecondary = () => {
	return (
		<div className="grid py-2 align-middle">
			<Link href={'/'}>
				<Image src={LogoSecondaryIcon} className="w-24" alt="Quality Assurance" />
			</Link>
		</div>
	);
};

export default LogoSecondary;
