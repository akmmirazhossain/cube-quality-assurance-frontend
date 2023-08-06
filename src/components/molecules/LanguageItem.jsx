import Image from 'next/image';
import React from 'react';

const LanguageItem = ({ item, showTitle }) => {
	return (
		<div className="flex cursor-pointer place-items-center gap-3 py-1 align-middle">
			<Image src={item.icon} className="h-5 w-5" /> {showTitle && <span>{item.title}</span>}
			<Image src={item.icon} className="h-5 w-5" alt={item.title} />{' '}
			{showTitle && <span>{item.title}</span>}
		</div>
	);
};

export default LanguageItem;
