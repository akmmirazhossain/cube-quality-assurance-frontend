import { AppModuleList } from '@/constants/constants';
import React from 'react';
import { Button } from '../atoms/Button';

import { isRTL } from '@/constants/utils';
import { useTranslation } from 'react-i18next';

const EnterprisePlan = () => {
	let { t } = useTranslation();
	return (
		<div className="h-full">
			<div className={`${isRTL() ? 'xl:rtl-module-skew' : 'xl:module-skew'} bg-primary`}>
				<div className="relative">
					<div
						className={`${
							isRTL() ? 'xl:rtl-module-skew-inner xl:-right-32' : 'xl:module-skew-inner xl:-left-32'
						} relative p-5 px-10 text-white  md:px-0`}
					>
						<div className="relative w-full text-center">
							<p className="text-3xl font-semibold">Enterprise</p>
							<span className="text-base font-light">for small business chain</span>

							<p className="xl:text-md text-sm md:text-lg">
								with custom branding and on-demand support for the following modules:
							</p>
						</div>
						<div className={`ml-0 ps-24 pt-4 lg:ps-36 ${isRTL ? 'md:mr-30' : 'md:ml-30'}  md:pt-8`}>
							<ul className="list-disc px-8 md:px-0">
								{AppModuleList.map(({ id, title }) => (
									<li key={id}>{title}</li>
								))}
							</ul>
						</div>
						<div className="my-8 text-center">
							<Button variant={'secondary'} size={isRTL() ? 'medium' : 'small'}>
								{t('getStarted')}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnterprisePlan;
