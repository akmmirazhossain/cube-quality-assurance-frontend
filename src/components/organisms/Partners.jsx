import Image from 'next/image';
import React from 'react';
import { PartnersList } from '@/constants/constants';
import { Adobe, Oasis } from '../../../public/images';

const PartnersSection = () => {
	return (
		<div className="h-auto w-full bg-dark">
			<div className="relative mx-auto w-[90%] py-10 ">
				<div className="grid grid-flow-row grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-16">
					{PartnersList.map(({ id, title, icon }) => (
						<div className="" key={id}>
							<Image src={icon} alt={title} className="object-cover" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PartnersSection;
