import React from 'react';
import ThemeEnterpriseVideo from '../molecules/ThemeEnterpriseVideo';
import { MacbookProEnterprise } from '../../../public/images';

const EnterpriseHeroVideo = () => {
	return (
		<div className="relative h-full w-full">
			<div className="relative mx-auto h-auto w-full max-w-[800px] md:h-[500px]">
				<div className="relative h-full py-5 md:-right-52">
					<ThemeEnterpriseVideo image={MacbookProEnterprise} />
				</div>
			</div>
		</div>
	);
};

export default EnterpriseHeroVideo;
