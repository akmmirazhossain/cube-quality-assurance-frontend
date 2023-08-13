import Image from 'next/image';
import React from 'react';

// import { useTranslation } from 'react-i18next';

const AppModuleCard = ({ item }) => {
	let { icon, title, content } = item;
	// let { t } = useTranslation();
	return (
		<div className="relative space-y-2 text-center">
			<div className="flex justify-center px-2">
				<Image src={icon} className="h-[60px] w-auto" alt="company admin " />
			</div>

			<h3 className="font-semibold text-secondary">{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default AppModuleCard;
