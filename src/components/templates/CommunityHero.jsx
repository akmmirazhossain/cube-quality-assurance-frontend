import Image from 'next/image';
import React from 'react';
import { PersonGroup } from '../../../public/images';
import Heading from '../atoms/Heading';

const CommunityHero = () => {
	return (
		<div className="relative h-full overflow-hidden pt-5 md:h-[650px] md:pt-10">
			<div className="grid h-full grid-flow-row grid-cols-2">
				<div className="flex justify-center md:justify-end">
					<di className="flex h-[150px] w-[150px] place-items-center justify-center rounded-full bg-secondary align-middle md:h-[500px] md:w-[500px]">
						<div className="w-full p-8 text-center  md:p-16">
							<div className="text-center">
								<Heading variant={'white'} weight={'light'} className={'text-center text-[11px]'}>
									Join our community...
								</Heading>
								<Heading tag={'p'} variant={'white'} className={'mt-2 text-[11px] md:mt-5'}>
									Business management made easy
								</Heading>
							</div>
						</div>
					</di>
				</div>

				{/* Left side shapes */}
				<div className="relative h-full w-full">
					<div className="community-hero-skew h-full w-full overflow-hidden rounded-bl-3xl rounded-br-lg bg-solitude md:-right-20 md:rounded-bl-3xl md:rounded-br-xl">
						<div className="community-inner-skew relative h-full w-full">
							{/* eslint-disable-next-line jsx-a11y/alt-text */}
							<Image
								src={PersonGroup}
								alr={'Person Group'}
								className="relative bottom-0 h-full pt-20 grayscale md:-right-5"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityHero;
