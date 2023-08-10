import Image from 'next/image';
import React from 'react';
import { Button } from '../atoms/Button';
import { LowerSectionVArt, RtlLowerSectionVArt } from '../../../public/images';
import { useTranslation } from 'react-i18next';
import { isRTL } from '@/constants/utils';

const OnePlatform = () => {
	let { t } = useTranslation();
	return (
		<div className="bg-solitude">
			<div className="container  py-10 ">
				<div className=" flex flex-col items-center justify-center gap-4 py-12 sm:flex-row lg:grid-cols-6 ">
					<div className="col-start-2 col-end-4 flex justify-center md:w-1/2 ">
						<div className=" h-[203px] w-[203px] rounded-full bg-secondary p-4 md:h-[303px] md:w-[303px]"></div>
					</div>
					<div className="col-start-4  col-end-6 md:w-1/2">
						<p className="text-lg font-light text-secondary md:text-2xl md:leading-[38px] ">
							{t('onePlatformText')}
						</p>

						<div className="mt-4 flex flex-row">
							<h1 className="text-4xl font-light text-secondary md:text-5xl">
								{t('onePlatformTitle')}
							</h1>
							{isRTL() ? (
								<Image src={RtlLowerSectionVArt} className="relative -mr-6 pt-1" alt="check icon" />
							) : (
								<Image src={LowerSectionVArt} className="relative -ml-6 pt-1" alt="check icon" />
							)}
						</div>

						<Button className="mt-4 ">{t('learnMore')}</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnePlatform;
