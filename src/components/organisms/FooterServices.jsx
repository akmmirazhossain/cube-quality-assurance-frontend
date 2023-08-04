import React, { useState } from 'react';
import { LanguageList } from '@/constants/constants';
import FooterItemLink from '../atoms/FooterItemLink';
import LanguageSelect from '../molecules/LanguageSelect';
const FooterServices = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LanguageList[0]);

	return (
		<div className="relative">
			<h1 className="text-[24px] ">Services</h1>
			<div className="my-3">
				<ul className="grid gap-2">
					<FooterItemLink href={'#'} title={'Apps Modules'} />
					<FooterItemLink href={'#'} title={'Subscription Plan'} />
				</ul>
				<div className="mt-14">
					<LanguageSelect footer={true} />
				</div>
			</div>
		</div>
	);
};

export default FooterServices;
