import Image from 'next/image';
import React from 'react';
import { WhatEveryonesSayingList } from '@/constants/constants';

const WhatEveryonesSaying = () => {
	return (
		<div className="relative mx-auto mt-16 h-[438px]">
			<div className="relative m-auto h-[62px] text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
					What everyone’s saying about QA
				</h1>
			</div>

			<div className="grid-flow grid w-screen place-items-center gap-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3">
				{WhatEveryonesSayingList.map((item) => (
					<div className="relative mt-8 h-[333px] w-[333px] rounded-full bg-primary">
						<div className="relative h-full w-full place-items-center overflow-hidden rounded-full">
							<div className="px-5 pt-[76px] text-center text-xl font-extralight text-white">
								{item.quote}
							</div>
							<div
								className="px-5 pt-6 text-center text-sm text-white"
								dangerouslySetInnerHTML={{ __html: item.identity }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatEveryonesSaying;
