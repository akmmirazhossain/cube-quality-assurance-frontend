import React from 'react';
import Heading from '../atoms/Heading';
import { AppModuleListItem } from '../organisms';
import AppFeatureList from '../molecules/AppFeatureList';

const BuildAwesomeCampaingns = () => {
	return (
		<div className="my-10 w-full px-10 md:my-20 md:px-20">
			<Heading>Build Awesome Campaigns</Heading>
			<div className="max-w-[525px] pt-6">
				<p className="text-lg font-medium text-primary md:text-26">
					with custom branding and on-demand support for the following modules:
				</p>
			</div>
			<div className="relative h-full w-full px-20 pt-20">
				<AppFeatureList />
			</div>
		</div>
	);
};

export default BuildAwesomeCampaingns;
