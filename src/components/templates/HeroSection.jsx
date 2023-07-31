// Import React and any necessary dependencies
import React from 'react';
import MenuBar from '../molecules/MenuBar';
import { Logo, LogoBack } from '../../../public/images';

const HeroSection = () => {
	return (
		// <AppBar />

		<div className="flex h-[470px] border">
			<div className="relative w-[557px] flex-auto border">
				<div
					className="relative h-[18rem] bg-contain bg-no-repeat object-contain"
					style={{ backgroundImage: `url('images/logoback.png')` }}
				>
					<div className="absolute left-[35%] top-[35%] h-[65px] w-[105px]">
						<img src="images/logo.png" className="h-full w-full" alt="Quality Assurance" />
					</div>
				</div>
			</div>
			<div className="w-[436px] flex-auto border">
				<MenuBar />
			</div>
			<div className="h-[46px] w-[261px] flex-auto border">03</div>
		</div>
	);
};

export default HeroSection;
