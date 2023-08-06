import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
const InspectionModuleHero = () => {
	return (
		<div className="relative w-full bg-[url('/images/shapes/HalfRound.png')] bg-auto bg-left-bottom bg-no-repeat md:h-screen">
			<div className="relative h-full p-10 sm:p-16 md:p-24">
				<div className=" h-full w-full bg-auto bg-right bg-no-repeat md:bg-inspectionModule">
					<div className="w-full p-2 md:max-w-[490px]">
						<div className="text-secondary md:py-8">
							<h1 className="text-2xl sm:text-3xl md:text-5xl">
								The Inspection <br />
								Manager Module
							</h1>
							<span className="text-2xl sm:text-3xl md:text-5xl">you were looking for.</span>
						</div>
						<div className="mt-10 text-lg font-light text-secondary md:text-2xl">
							<span>
								Open source.
								<br />
								Scalable Easy-to-use.
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-2 right-4 h-[49px] w-[49px] rounded-full bg-eminence">
				<div className="flex place-items-center justify-center p-2">
					<AiFillMessage className="h-full w-full text-white" />
				</div>
			</div>
		</div>
	);
};

export default InspectionModuleHero;
