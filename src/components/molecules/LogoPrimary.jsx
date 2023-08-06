import React from 'react';
import { Logo } from '../../../public/images';
import Link from 'next/link';
import Image from 'next/image';

const LogoPrimary = () => {
	return (
		<div className="relative w-[557px] flex-auto ">
			<div className="relative h-[470px] bg-[url('/images/logoback.png')] bg-contain bg-no-repeat object-contain">
				<div className="relative left-[33%] top-[32%] h-[110px] w-[171px]">
					<Link href={'/'}>
						<Image src={Logo} className="h-full w-full" alt="Quality Assurance" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LogoPrimary;
