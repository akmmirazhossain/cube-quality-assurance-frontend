import React from 'react';
import AppFeatureList from '../molecules/AppFeatureList';

const AppModuleListItem = () => {
	return (
		<div className="relative mt-10 min-h-[437px] w-full">
			<div className=" relative h-full md:absolute md:right-10 md:w-[972px]">
				<AppFeatureList />
			</div>
		</div>
	);
};

export default AppModuleListItem;
