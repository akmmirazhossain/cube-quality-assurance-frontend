import React from 'react';
import { AppModuleHeaderItem, AppModuleListItem } from '../organisms';
import AppModulePlans from '../organisms/AppModulePlans';
import Heading from '../atoms/Heading';
import Image from 'next/image';
import { Person } from '../../../public/images';
import WhoWeAre from '../organisms/WhoWeAre';

const AppModules = () => {
	return (
		<div className="relative p-10">
			{/* AppsModule Heading */}
			<AppModuleHeaderItem />
			{/* Apps Module List */}
			<AppModuleListItem />

			{/* App Module Plan list */}
			<AppModulePlans />

			{/* Who We are */}
			<WhoWeAre />
		</div>
	);
};

export default AppModules;
