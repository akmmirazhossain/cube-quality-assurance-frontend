import Image from 'next/image';
import React from 'react';
import { PartnersList } from '@/constants/constants';

const PartnersSection = () => {
	return (
		<div className="container h-auto w-full bg-dark">
			<div className="relative mx-auto w-[90%] py-8 md:py-10 ">
				<div className="grid grid-flow-row grid-cols-2 place-items-center gap-10 md:grid-cols-5 md:gap-0">
					{PartnersList.map(({ id, title, icon }, index) => (
						<div
							className={` ${
								index === PartnersList.length - 1 ? 'col-span-2 justify-center md:col-span-1' : ''
							}`}
							key={id}
						>
							<Image src={icon} alt={title} width={135} className="object-cover" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PartnersSection;
