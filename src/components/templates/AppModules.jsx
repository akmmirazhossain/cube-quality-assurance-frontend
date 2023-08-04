import React from 'react';
import AppModulePlans from '../organisms/AppModulePlans';
import WhoWeAre from '../organisms/WhoWeAre';
import AppModuleHeaderItem from '../organisms/AppModuleHeaderItem';
import AppModuleListItem from '../organisms/AppModuleListItem';

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
