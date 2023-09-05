import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';
import { isRTL } from '@/constants/utils';
import { useTranslation } from 'react-i18next';

const RegularPlan = () => {
	let { t } = useTranslation();
	return (
		<div
			className={`${
				isRTL() ? 'xl:rtl-regular-skew' : 'xl:regular-skew h-full'
			} bg-secondary text-white`}
		>
			<div className={`${isRTL() ? 'xl:rtl-module-skew-inner' : 'xl:module-skew-inner'} relative`}>
				<div className="mx-auto w-full lg:w-4/5">
					<div className="relative w-full pr-20 pt-14 text-center">
						<Heading tag="p" variant={'white'} size={'md'} weight={'medium'}>
							Regular
						</Heading>
						<span className="text-base font-light">for small business</span>
						<p className="text-lg font-medium xl:px-14">
							Web app with minimal feature of the following modules:
						</p>
					</div>
					<div
						className={`ml-0 lg:py-8 ${
							isRTL() ? 'me-24 xl:me-52' : 'ms-24 xl:ms-52'
						} text-left md:py-8 xl:py-16 `}
					>
						<ul className="list-disc">
							{AppModuleList.slice(0, 4).map(({ id, title }) => (
								<li key={id}>{title}</li>
							))}
						</ul>
					</div>
					<div className="my-8 text-center">
						<Button variant={'primary'} size={isRTL() ? 'medium' : 'small'}>
							{t('getStarted')}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegularPlan;
