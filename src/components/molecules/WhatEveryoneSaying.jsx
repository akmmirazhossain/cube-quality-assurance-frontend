import Image from 'next/image';
import React from 'react';
import { WhatEveryonesSayingList } from '@/constants/constants';

const WhatEveryonesSaying = () => {
	return (
		// <div className="relative mx-auto h-full p-10 md:mt-16 md:h-[438px]">
		// 	<div className="relative m-auto h-[62px] text-center">
		// 		<h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
		// 			What everyone&apos;s saying about QA
		// 		</h1>
		// 	</div>

		// 	<div className="grid-flow grid w-screen place-items-center gap-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3">
		// 		{WhatEveryonesSayingList.map((item) => (
		// 			<div className="relative mt-8 h-[333px] w-[333px] rounded-full bg-primary">
		// 				<div className="relative h-full w-full place-items-center overflow-hidden rounded-full">
		// 					<div className="px-5 pt-[76px] text-center text-xl font-extralight text-white">
		// 						{item.quote}
		// 					</div>
		// 					<div
		// 						className="px-5 pt-6 text-center text-sm text-white"
		// 						dangerouslySetInnerHTML={{ __html: item.identity }}
		// 					></div>
		// 				</div>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>

		<div className="relative mx-auto w-full p-5 md:mb-20 md:w-[90%] md:px-10 md:py-3">
			<div className="relative mx-auto my-10 text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
					What everyone&apos;s saying about QA
				</h1>
			</div>

			<div className="grid grid-cols-1 place-items-center items-center gap-4 md:grid-cols-3">
				{WhatEveryonesSayingList.map((item, index) => (
					<div
						key={index}
						className="relative h-[233px] w-[233px] rounded-full bg-primary p-10 md:h-[333px] md:w-[333px] md:rounded-full"
					>
						<div className="flex h-full w-full place-items-center items-center justify-center">
							<div className="text-center text-white ">
								<div className=" text-xs font-extralight md:text-xl">{item.quote}</div>
								<div
									className="pt-3 text-xs font-light md:text-sm md:font-medium"
									dangerouslySetInnerHTML={{ __html: item.identity }}
								></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatEveryonesSaying;
