import Image from 'next/image';
import React from 'react';

const LanguageItem = ({ item }) => {
	return (
		<div className="flex cursor-pointer place-items-center gap-3 align-middle">
			<Image src={item.icon} className="h-4  w-4" /> <span>{item.title}</span>
		</div>
	);
};

export default LanguageItem;
