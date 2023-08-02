import Image from 'next/image';
import React from 'react';
import { DesktopClickIcon } from '../../../public/images';
import { Button } from '../atoms/Button';
import { LowerSectionVArt } from '../../../public/images';

const OnePlatform = () => {
	return (
		<div className="flex h-[470px] bg-solitude">
			<div className="mx-auto h-[405px] w-[953px] pl-5">
				<div className=" grid h-full w-full grid-flow-col grid-cols-2 gap-5">
					<div className="flex place-items-center justify-center">
						<div className="h-[303px] w-[303px] rounded-full bg-secondary p-4">
							<div className="flex h-full w-full place-items-center justify-center align-middle">
								<div className="grid h-full w-full place-items-center">
									<div className="mx-auto"></div>
								</div>
							</div>
						</div>
					</div>

					<div className="h-full w-full">
						<div className="py-4">
							<p className=" pt-7 text-2xl font-light leading-[38px] text-secondary">
								Automate the quality assurance proceedure of your business by managing all your
								distibutors from
							</p>
						</div>

						<div>
							<h1 className="text-5xl font-light text-secondary">One Platform</h1>
							<Image
								src={LowerSectionVArt}
								className=" relative  left-[238px] top-[-34px] h-[67px] w-[83px]"
								alt="check icon"
							/>
						</div>
						<Button className="relative top--8 top-[-38px]">Learn More</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnePlatform;
