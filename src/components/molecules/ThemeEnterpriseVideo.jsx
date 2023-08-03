import Image from 'next/image';
import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
const ThemeEnterpriseVideo = ({ image }) => {
	return (
		<div className="relative bottom-3 z-10 flex h-full w-full place-items-center justify-end pr-0 md:absolute md:bottom-0 md:pr-10">
			<div className="relative">
				<div className="trnslate-y-[50%] absolute left-[50%]  top-[50%] -mt-5 -translate-x-[50%] md:-mt-12">
					<div className="flex h-12 w-12 place-items-center justify-center rounded-full border-transparent bg-white md:h-20 md:w-20">
						<button className="h-full w-full border-transparent text-primary">
							<BsFillPlayCircleFill className="h-full w-full" />
						</button>
					</div>
				</div>
				<Image src={image} className="h-full w-full" alt="video module" />
			</div>
		</div>
	);
};

export default ThemeEnterpriseVideo;
