import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Listbox } from '@headlessui/react';
import { LanguageList } from '@/constants/constants';
import LanguageItem from './LanguageItem';

const MenuRightAction = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LanguageList[0]);
	return (
		<div className="relative -mt-2 flex place-items-center gap-4 px-2 align-middle">
			<Link href={'signin'} className="mr-2">
				Sign in
			</Link>
			<Button href={'demo'} size={'small'} className={`h-auto`}>
				Get Demo
			</Button>
			<div className="relative -mt-6 text-center">
				<span>Language</span>
				<div className="absolute">
					<Listbox value={LanguageList} onChange={setSelectedLanguage}>
						<Listbox.Button className={`flex place-items-center gap-3 align-middle`}>
							<LanguageItem item={selectedLanguage} showTitle={false} />
						</Listbox.Button>
						<Listbox.Options>
							{LanguageList.map((item) => (
								<Listbox.Option key={item.id} value={item}>
									<LanguageItem item={item} showTitle={false} />
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				</div>
			</div>
		</div>
	);
};

export default MenuRightAction;
