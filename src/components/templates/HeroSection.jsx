// Import React and any necessary dependencies
import React from 'react';
import MenuBar from '../molecules/MenuBar';
import { Logo, LogoBack } from '../../../public/images';
import { Button } from '../atoms/Button';
import OnePlatform from '../organisms/OnePlatform';
import Link from 'next/link';

const HeroSection = () => {
	return (
		// <AppBar />
		<div className="bg-solitude">
			<div className="flex h-[470px]">
				<div className="relative w-[557px] flex-auto ">
					<div
						className="relative h-[470px] bg-contain bg-no-repeat object-contain"
						style={{ backgroundImage: `url('images/logoback.png')` }}
					>
						<div className="relative left-[33%] top-[32%] h-[110px] w-[171px]">
							<img src="images/logo.png" className="h-full w-full" alt="Quality Assurance" />
						</div>
					</div>
				</div>
				<div className="relative left-[-110px] w-[490px] ">
					<MenuBar />
				</div>
				<div className="relative left-[-40px] top-[25px] h-[46px] w-[261px] ">
					<Link href={'ujhjuju'} className="mr-2">
						Sign in
					</Link>
					&nbsp;
					<Button href={'awdwadawd'} size={'small'}>
						Get Demo
					</Button>
				</div>
			</div>

			<div className="flex h-[470px] ">
				<OnePlatform />
			</div>
		</div>
	);
};

export default HeroSection;
