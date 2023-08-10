import React from 'react';
import { Logo } from '../../../public/images';
import Link from 'next/link';
import Image from 'next/image';
import { isRTL } from '@/constants/utils';

const LogoPrimary = () => {
	return (
		<div className="relative flex-auto md:w-[557px] ">
			<div
				className={`relative h-[470px] ${
					isRTL() ? "bg-[url('/images/logoBackRTL.png')]" : "bg-[url('/images/logoBack.png')]"
				} object-contai bg-contain bg-no-repeat`}
			>
				<div
					className={`relative ${
						isRTL() ? 'right-[33%]' : 'left-[33%]'
					} top-[32%] h-[110px] w-[171px]`}
				>
					<Link href={'/'}>
						<Image src={Logo} className="h-full w-full" alt="Quality Assurance" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LogoPrimary;
