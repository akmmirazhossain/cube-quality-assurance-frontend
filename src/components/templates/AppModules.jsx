import React from 'react';
import AppModulePlans from '../organisms/AppModulePlans';
import WhoWeAre from '../organisms/WhoWeAre';
import AppModuleHeaderItem from '../organisms/AppModuleHeaderItem';
import AppModuleListItem from '../organisms/AppModuleListItem';
import { isRTL } from '@/constants/utils';
import { RTLAppModulesGrayBg } from '../../../public/images';
import Image from 'next/image';

const AppModules = () => {
	return (
		<div className="container relative w-full overflow-hidden">
			<div className="relative p-10">
				{/* AppsModule Heading */}
				<AppModuleHeaderItem />
				{/* Apps Module List */}
				<AppModuleListItem />

				{/* App Module Plan list */}
				<AppModulePlans />

				{/* Background Vector */}
				<div className="relative hidden h-full w-full md:block">
					<div
						className={`absolute -top-96 ${
							isRTL() ? 'left-20' : 'right-20'
						} -z-10 h-[620px] w-[880px]`}
					>
						{isRTL() ? (
							<Image src={RTLAppModulesGrayBg} alt="bg" />
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="882"
								height="621"
								viewBox="0 0 882 621"
								fill="none"
							>
								<path
									d="M876.721 546.586L617.647 0.354492H0.73291L276.765 591.478C281 600.316 287.647 607.776 295.938 612.999C304.229 618.222 313.828 620.996 323.628 621H829.832C868.09 621 893.252 581.051 876.721 546.586Z"
									fill="#E8E9EC"
								/>
							</svg>
						)}
					</div>
				</div>

				{/* Who We are */}
				<WhoWeAre />
			</div>
		</div>
	);
};

export default AppModules;
