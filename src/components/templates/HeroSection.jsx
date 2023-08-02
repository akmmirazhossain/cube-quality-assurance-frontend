// Import React and any necessary dependencies
import React, { useState } from 'react';
import MenuBar from '../molecules/MenuBar';
import { Logo, LogoBack } from '../../../public/images';
import { Button } from '../atoms/Button';
import OnePlatform from '../organisms/OnePlatform';
import Link from 'next/link';
import { Listbox } from '@headlessui/react';
import { LanguageList } from '@/constants/constants';
import { LanguageItem } from '../molecules';
import { BiSolidDownArrow } from 'react-icons/bi';

const HeroSection = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LanguageList[0]);
	return (
		// <AppBar />
		<div className="bg-solitude">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="relative w-[557px] flex-auto ">
					<div
						className="relative h-[470px] bg-contain bg-no-repeat object-contain"
						style={{ backgroundImage: `url('images/logoback.png')` }}
					>
						<div className="relative left-[33%] top-[32%] h-[110px] w-[171px]">
							<img src="images/logo.png" className="h-full w-full" alt="Quality Assurance" />
						</div>
					</div>
				</div>
				<div className="relative">
					<div className="flex place-items-center justify-between">
						<div className="-ml-[150px]">
							<MenuBar />
						</div>
						<div className="relative flex place-items-center gap-4 px-2">
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
					</div>
				</div>
			</div>

			<div className="flex h-[470px] ">
				<OnePlatform />
			</div>
		</div>
	);
};

export default HeroSection;
