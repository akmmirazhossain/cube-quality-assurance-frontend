import React from 'react';
import EnterpriseAdvanceFeature from '../organisms/EnterpriseAdvanceFeature';
import EnterpriseHeroVideo from '../organisms/EnterpriseHeroVideo';
import EnterpriseHeroTitle from '../organisms/EnterpriseHeroTitle';

const EnterpriseHero = () => {
	return (
		<div className="relative bg-primary bg-contain bg-no-repeat px-10 md:bg-transparent md:bg-enterpriseHero md:px-0">
			<div className="w-ful relative h-full">
				{/* First: Title Section */}
				<EnterpriseHeroTitle />
				{/* Second: the Video icon section */}
				<EnterpriseHeroVideo />
				{/* Third: advance message section */}
				<EnterpriseAdvanceFeature />
			</div>
		</div>
	);
};

export default EnterpriseHero;
