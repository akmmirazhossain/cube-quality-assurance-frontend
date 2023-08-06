import Image from 'next/image';
import React from 'react';
import { Button } from '../atoms/Button';
import { LowerSectionVArt } from '../../../public/images';

const OnePlatform = () => {
	return (
		// <div className="bg-solitude">
		// 	<div className="container">
		// 		<div className="flex flex-col  p-5 md:h-[470px] md:flex-row md:p-0">
		// 			<div className="mx-auto px-5 md:h-[405px] md:w-[953px]">
		// 				<div className="grid h-full grid-cols-1 gap-5 md:w-full md:grid-cols-2">
		// 					<div className="flex items-center justify-center md:justify-start">
		// 						<div className=" h-[203px] w-[203px] rounded-full bg-secondary p-4 md:h-[303px] md:w-[303px]">
		// 							<div className="flex h-full w-full items-center justify-center">
		// 								<div className="grid h-full w-full place-items-center">
		// 									<div className="mx-auto"></div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>

		// 				<div className="flex flex-col justify-center md:py-4">
		// 					<p className="text-lg font-light text-secondary md:text-2xl md:leading-[38px]">
		// 						Automate the quality assurance procedure of your business by managing all your
		// 						distributors from
		// 					</p>

		// 					<div className="mt-4 flex flex-row">
		// 						<h1 className="text-4xl font-light text-secondary md:text-5xl">One Platform</h1>
		// 						<Image src={LowerSectionVArt} className="relative -ml-6 pt-1" alt="check icon" />
		// 					</div>

		// 					<Button className="mt-4">Learn More</Button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="flex flex-col bg-solitude p-5 md:h-[470px] md:flex-row md:p-0">
			<div className="mx-auto px-5 md:h-[405px] md:w-[953px]">
				<div className="grid h-full grid-cols-1 gap-5 md:w-full md:grid-cols-2">
					<div className="flex items-center justify-center md:justify-start">
						<div className=" h-[203px] w-[203px] rounded-full bg-secondary p-4 md:h-[303px] md:w-[303px]">
							<div className="flex h-full w-full items-center justify-center">
								<div className="grid h-full w-full place-items-center">
									<div className="mx-auto"></div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center md:py-4">
						<p className="text-lg font-light text-secondary md:text-2xl md:leading-[38px]">
							Automate the quality assurance procedure of your business by managing all your
							distributors from
						</p>

						<div className="mt-4 flex flex-row">
							<h1 className="text-4xl font-light text-secondary md:text-5xl">One Platform</h1>
							<Image src={LowerSectionVArt} className="relative -ml-6 pt-1" alt="check icon" />
						</div>

						<Button className="mt-4">Learn More</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnePlatform;
