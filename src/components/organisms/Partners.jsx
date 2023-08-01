import Image from 'next/image';
import React from 'react';
import { PartnersList } from '@/constants/constants';

const PartnersSection = () => {
	return (
		<div className="mx-auto h-[128px] w-[1439px] bg-[#23252D]">
			<div className="relative top-[40px] mx-auto h-[55px] w-[1046px]">
				<div className="grid grid-flow-col  grid-rows-1 place-items-center  justify-center gap-16">
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
