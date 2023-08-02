import React, { useState } from 'react';
import { LanguageList } from '@/constants/constants';
import { Listbox } from '@headlessui/react';
import Link from 'next/link';
import { LanguageItem } from '../molecules';
import FooterItemLink from '../atoms/FooterItemLink';
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
					<Listbox value={LanguageList} onChange={setSelectedLanguage}>
						<Listbox.Button className={`flex place-items-center gap-3 align-middle`}>
							<LanguageItem item={selectedLanguage} showTitle={true} />
						</Listbox.Button>
						<Listbox.Options>
							{LanguageList.map((item) => (
								<Listbox.Option key={item.id} value={item}>
									<LanguageItem item={item} showTitle={true} />
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				</div>
			</div>
		</div>
	);
};

export default FooterServices;
