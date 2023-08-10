import Image from 'next/image';
import React from 'react';
import { PersonGroup, RtlPersonGroup } from '../../../public/images';
import Heading from '../atoms/Heading';
import { isRTL } from '@/constants/utils';
import { useTranslation } from 'react-i18next';

const CommunityHero = () => {
	let { t } = useTranslation();
	return (
		<div className="container relative h-full overflow-hidden pt-5 md:h-[450px] md:pt-10 lg:h-[650px]">
			<div className="grid h-full grid-flow-row grid-cols-2 place-items-center gap-5">
				<div className="flex justify-center md:justify-end">
					<di className="flex h-[120px] w-[120px] place-items-center justify-center rounded-full bg-secondary align-middle sm:h-[200px] sm:w-[200px] md:h-[340px] md:w-[340px] lg:h-[500px] lg:w-[500px] ">
						<div className="w-full p-5 text-center sm:p-10  md:p-16">
							<div className="text-center">
								<Heading
									variant={'white'}
									weight={'light'}
									className={'text-center text-[11px] sm:text-base md:text-xl lg:text-5xl'}
								>
									{t('communityHeroTitle1')}
								</Heading>
								<Heading
									tag={'p'}
									variant={'white'}
									className={'mt-2 text-[11px] sm:text-base md:mt-5 md:text-xl lg:text-5xl'}
								>
									{t('communityHeroTitle2')}
								</Heading>
							</div>
						</div>
					</di>
				</div>

				{/* Left side shapes */}
				<div className="relative h-full w-full overflow-hidden">
					<div
						className={`${
							isRTL() ? 'rtl-community-hero-skew' : 'community-hero-skew'
						} h-full w-full overflow-hidden rounded-bl-xl rounded-br-lg bg-solitude ${
							isRTL() ? 'md:-left-20' : 'md:-right-20'
						} md:rounded-bl-3xl md:rounded-br-xl`}
					>
						<div
							className={` ${
								isRTL() ? 'rtl-community-inner-skew' : 'community-inner-skew'
							} relative h-full w-full`}
						>
							{/* eslint-disable-next-line jsx-a11y/alt-text */}
							{isRTL() ? (
								<Image
									src={RtlPersonGroup}
									alr={'Person Group'}
									className={`relative bottom-0 h-full pt-5 grayscale sm:pt-10 md:-ms-7 md:pt-20 lg:pt-20 ${
										isRTL() ? 'md:-left-5' : 'md:-right-5'
									} `}
								/>
							) : (
								<Image
									src={PersonGroup}
									alr={'Person Group'}
									className={`relative bottom-0 h-full pt-5  grayscale sm:pt-10  md:-ms-7 md:pt-20 lg:pt-20 ${
										isRTL() ? 'md:-left-5' : 'md:-right-5'
									} `}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityHero;
