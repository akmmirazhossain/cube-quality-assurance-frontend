import { AppModuleList } from '@/constants/constants';
import React from 'react';
import AppModuleCard from './AppModuleCard';

const AppFeatureList = () => {
	return (
		<div className="relative h-full w-full">
			{/* <div className="grid lg:grid-flow-row  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:pl-40">
				{AppModuleList.map((item) => (
					<AppModuleCard key={item.id} item={item} button={true} />
				))}
			</div> */}
			<div className="flex flex-wrap justify-evenly  xl:ps-52 [&>*]:w-4/5 [&>*]:px-2 [&>*]:py-4 [&>*]:sm:w-2/5 [&>*]:lg:w-1/5">
				{AppModuleList.map((item) => (
					<AppModuleCard key={item.id} item={item} button={true} />
				))}
			</div>
		</div>
	);
};

export default AppFeatureList;
