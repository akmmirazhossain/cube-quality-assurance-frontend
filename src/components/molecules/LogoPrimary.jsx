import React from 'react';
import { Logo } from '../../../public/images';
import Link from 'next/link';
import Image from 'next/image';
import { isRTL } from '@/constants/utils';

const LogoPrimary = () => {
	return (
		<div className="relative flex-auto md:w-[290px]  lg:w-[420px] xl:w-[557px] ">
			<div
				className={`relative h-[470px] ${
					isRTL() ? "bg-[url('/images/logoBackRTL.png')]" : "bg-[url('/images/logoBack.png')]"
				} object-contai bg-contain bg-no-repeat`}
			>
				<div
					className={`relative ${
						isRTL() ? 'right-[33%]' : 'md:left-[38%] lg:left-[36%]'
					} md:top-[22%] md:w-[171px]  lg:top-[36%]`}
				>
					<Link href={'/'}>
						<Image src={Logo} className="md:w-[90px] lg:h-full lg:w-full" alt="Quality Assurance" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LogoPrimary;
