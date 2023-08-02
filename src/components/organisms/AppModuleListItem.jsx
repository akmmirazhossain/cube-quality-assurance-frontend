import React from 'react';
import AppModuleCard from '../molecules/AppModuleCard';
import { AppModuleList } from '@/constants/constants';

const AppModuleListItem = () => {
	return (
		<div className="relative mt-10 min-h-[437px] w-full">
			<div className="absolute right-10 h-full w-[972px]">
				<div className="relative h-full w-full">
					<div className="grid grid-flow-row grid-cols-5 gap-5">
						{AppModuleList.slice(0, 5).map((item) => (
							<AppModuleCard key={item.id} item={item} />
						))}
					</div>
					<div className="my-5">
						<div className="grid grid-cols-4 justify-center gap-5">
							{AppModuleList.slice(5).map((item) => (
								<AppModuleCard key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppModuleListItem;
