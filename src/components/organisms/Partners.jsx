import Image from 'next/image';
import React from 'react';
import { PartnersList } from '@/constants/constants';
//
const PartnersSection = () => {
	return (
		<div className=" grid justify-items-center bg-dark py-6 lg:flex lg:items-center lg:justify-evenly xl:px-[14%]">
			{PartnersList.map(({ id, title, icon }) => (
				<div className="p-3" key={id}>
					<Image src={icon} alt={title} width={135} className="object-cover" />
				</div>
			))}
		</div>
	);
};

// className={` ${index === PartnersList.length - 1 ? '' : ''}`}

export default PartnersSection;
