import React from 'react';
import { WhatEveryonesSayingList } from '@/constants/constants';

const WhatEveryonesSaying = () => {
	return (
		<div className=" container relative mx-auto w-full p-5 md:mb-20 md:w-[90%] md:px-10 md:py-3">
			<div className="relative mx-auto my-6 text-center md:my-10">
				<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
					What everyone&apos;s saying about QA
				</h1>
			</div>

			{/* <div className="grid grid-cols-1 place-items-center gap-3 md:flex md:grid-cols-3 md:justify-center md:gap-8">
				
			</div> */}

			<div className="flex flex-col items-center justify-center gap-4 md:flex-row">
				{WhatEveryonesSayingList.map((item, index) => (
					<div
						key={index}
						className="flex h-72 w-72 flex-col items-center rounded-full bg-primary p-5 text-center text-white sm:h-52 sm:w-52 sm:p-2 md:h-[12rem] md:w-[12rem] lg:h-[17rem] lg:w-[17rem] xl:h-[22rem] xl:w-[22rem]"
					>
						<p className="text-md flex flex-1  justify-center px-3 pt-6 font-light leading-6 sm:text-xs md:text-[12px] lg:px-6 lg:pt-12 lg:text-[14px] lg:leading-5 xl:text-[1.1rem] xl:leading-8">
							{item.quote}
						</p>

						<p
							dangerouslySetInnerHTML={{ __html: item.identity }}
							className="items-top xl:text-md flex flex-1 justify-center pt-2 text-xs leading-tight sm:text-[0.6rem] md:text-[0.5rem] lg:text-[11px]"
						></p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatEveryonesSaying;
