import Link from 'next/link';
import React from 'react';
import { Button } from '../atoms/Button';
import LanguageSelect from './LanguageSelect';

const MenuRightAction = () => {
	return (
		<div className="relative -mt-2 flex place-items-center gap-4 px-2 align-middle text-sm">
			<Link href={'signin'} className="mr-2  font-normal">
				Sign in
			</Link>
			<Button href={'demo'} size={'small'} className={`h-auto`}>
				Get Demo
			</Button>
			<div className="relative text-center">
				<div className="text-sm font-normal">
					<span>Language</span>
				</div>
				<LanguageSelect showTitle={false} />
			</div>
		</div>
	);
};

export default MenuRightAction;
