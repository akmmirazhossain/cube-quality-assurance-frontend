import { AppModuleList } from '@/constants/constants';
import React from 'react';
import AppModuleCard from './AppModuleCard';

const AppFeatureList = () => {
	return (
		<div className="relative h-full w-full">
			<div className="grid grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5">
				{AppModuleList.slice(0, 5).map((item) => (
					<AppModuleCard key={item.id} item={item} button={true} />
				))}
			</div>
			<div className="my-5">
				<div className="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-4">
					{AppModuleList.slice(5).map((item) => (
						<AppModuleCard key={item.id} item={item} button={true} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AppFeatureList;
