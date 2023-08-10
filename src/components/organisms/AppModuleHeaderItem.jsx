import Image from 'next/image';
import React from 'react';
import { DesktopClickIcon } from '../../../public/images';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';
import { useTranslation } from 'react-i18next';

const AppModuleHeaderItem = () => {
	let { t } = useTranslation();
	return (
		<div className=" flex flex-col items-center justify-center gap-4 py-12 sm:flex-row lg:grid-cols-6 ">
			<div className="col-start-2 flex justify-center md:w-1/2">
				<div className="h-64 w-64 rounded-full bg-secondary p-4 md:h-[303px] md:w-[303px]">
					<div className="flex h-full w-full items-center justify-center">
						<div className="flex items-center justify-center ">
							<div className="mx-auto h-full w-full p-5">
								<Image
									src={DesktopClickIcon}
									className="relative mx-auto md:w-[135px]"
									alt="desktop icon"
								/>
								<p className="pt-3 text-center text-sm font-extralight text-white md:text-[18px]">
									Simple integrated apps <br />
									at your fingertips
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-start-4  col-end-6 md:w-1/2">
				<Heading variant={'secondary'}>Apps Module</Heading>
				<div className="py-4">
					<p className="text-xl font-light leading-[28px] text-secondary">
						Our team of experienced professionals is dedicated to helping businesses achieve their
						goals by providing them with the tools and expertise they need to succeed. This is why
						we have developed these app modules to make your life easier.
					</p>
				</div>
				<Button className="mt-4 ">{t('learnMore')}</Button>
			</div>
		</div>
	);
};

export default AppModuleHeaderItem;
