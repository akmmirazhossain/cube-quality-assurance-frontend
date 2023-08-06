import React from 'react';
import { MacbookPro } from '../../../public/images';
import ThemeEnterpriseVideo from '../molecules/ThemeEnterpriseVideo';

const InspectionModuleTheme = () => {
	return (
		<>
			<div className="relative h-full w-full p-10 md:h-[745px] md:p-0">
				<div className="relative h-full w-full">
					<ThemeEnterpriseVideo image={MacbookPro} />
					<div className="relative h-full w-full bg-primary md:w-[60%] md:rounded-r-3xl">
						<div className="relative w-full space-y-10 p-10 text-white md:left-20 md:top-24 md:max-w-[470px] md:p-0">
							<div className="text-2xl md:text-5xl">
								<h1 className="font-medium">No need to be a developer - simply</h1>
								<h1 className="font-light">drag and drop</h1>
							</div>
							<div className="top-10 h-full w-full text-xl font-thin md:relative md:top-20 md:pr-8 md:text-2xl">
								<p>
									QA comes with a great selection of building blocks. Drag and drop them to create
									stunning pages. Building a website has never been so easy.
								</p>

								<div className="mt-10 md:relative md:top-16 md:mt-0">
									Design your store in 4 easy steps
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative px-10 md:p-20">
				<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
					<div className="relative grid place-items-center md:absolute md:-top-40 md:right-72">
						<div className="flex h-[235px] w-[235px] place-items-center justify-center rounded-full bg-primary p-3 text-white md:h-[335px] md:w-[335px] md:p-10">
							<p className="text-center  md:text-[18px] md:font-medium">
								Use the AI website configurator to create your website in 4 easy steps. Odoo will
								provide copyright free pictures based on your industry.
							</p>
						</div>
					</div>
					<div className="my-5 max-w-[630px]">
						<h1 className="text-xl font-medium text-primary md:text-[26px]">Professional Themes</h1>
						<p className="md:mt-0md:relative top-10 mt-3 text-base font-light text-secondary md:text-2xl">
							QA comes with beautiful native themes designed for each industry. You can also create
							your own custom theme or use one from our themes store.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default InspectionModuleTheme;
