import React from 'react';
import AppFeatureList from '../molecules/AppFeatureList';
import { isRTL } from '@/constants/utils';

const AppModuleListItem = () => {
	return (
		<div className=" mt-10 min-h-[600px] w-full">
			<div className={` ${isRTL() ? 'md:left-10' : 'md:right-10'} `}>
				<AppFeatureList />
			</div>
		</div>
	);
};

export default AppModuleListItem;
