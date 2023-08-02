import Link from 'next/link';
import React from 'react';

const FooterItemLink = ({ href, title }) => {
	return (
		<li className="text-[18px] font-extralight">
			<Link href={href}>{title}</Link>
		</li>
	);
};

export default FooterItemLink;
