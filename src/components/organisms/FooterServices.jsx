import React from 'react';
import FooterItemLink from '../atoms/FooterItemLink';
import LanguageSelect from '../molecules/LanguageSelect';
const FooterServices = () => {
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
