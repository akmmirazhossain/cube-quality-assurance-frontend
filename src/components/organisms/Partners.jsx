import Image from 'next/image';
import React from 'react';
import { PartnersList } from '@/constants/constants';

const PartnersSection = () => {
	return (
		<div className="mx-auto h-auto bg-[#23252D] py-10">
			<div className="relative mx-auto w-full lg:w-[1046px]">
				<div className="grid grid-flow-row grid-cols-1 place-items-center justify-center gap-16 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
					{PartnersList.map((item) => (
						<div className="top-[80px]">
							<Image src={item.icon} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PartnersSection;
