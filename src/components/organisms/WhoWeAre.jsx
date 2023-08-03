import React from 'react';
import { Person } from '../../../public/images';
import Image from 'next/image';
import Heading from '../atoms/Heading';

const WhoWeAre = () => {
	return (
		<div className="realative mx-auto my-16 w-[80%]">
			<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3">
				<div className="col-span-2">
					<Heading variant={'secondary'}>Who we are...</Heading>
					<Heading variant={'secondary'} weight={'light'}>
						... innovators in a<br /> changing world.
					</Heading>
					<p className="text-[24px] font-light leading-[38px] text-secondary">
						Developed 2 years ago, we are a team of 10 inspired individuals with a mission has
						always been to provide a range of easy to use business applications based on AI that
						form a complete suite of tools to accompany any business need. We provide companies easy
						access to the software they need to run and expand their business. So join us and step
						into tomorrows world, today.
					</p>
				</div>
				<div className="mx-autoplace-items-center relative col-span-1 grid p-10">
					<div className="relative h-[450px] w-[450px] rounded-full bg-primary">
						<div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full">
							<Image src={Person} className="absolute bottom-0 " alt="user image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
