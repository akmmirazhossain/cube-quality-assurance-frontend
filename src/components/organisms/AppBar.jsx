import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MenuBar from '../molecules/MenuBar';
import LogoPrimary from '../molecules/LogoPrimary';
import LogoSecondary from '../molecules/LogoSecondary';
import MenuRightAction from '../molecules/MenuRightAction';
import { Button } from '../atoms/Button';
import Link from 'next/link';
import Image from 'next/image';
import { LogoSecondaryIcon } from '../../../public/images';
import { TfiClose } from 'react-icons/tfi';
// import LanguageSelect from '../molecules/LanguageSelect';
import { RxHamburgerMenu } from 'react-icons/rx';
import { isRTL } from '@/constants/utils';
const AppBar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const router = useRouter();
	return (
		<div className="bg-solitude">
			<div className="container">
				{/* Desktp Navigation */}
				<div className="hidden rounded-xl xl:block">
					<div className={`grid grid-cols-2`}>
						{router.pathname === '/' ? <LogoPrimary /> : <LogoSecondary />}

						{/* Desktop Navigation */}
						<div className="relative hidden h-auto align-middle xl:block">
							<div className="flex place-items-center justify-between">
								<div className="flex-none">
									<MenuBar />
								</div>
								<div className="flex-none lg:block ">
									<MenuRightAction />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="relative z-10 flex w-full place-items-center justify-between py-5 align-middle xl:hidden">
					<div className="max-w-sm">
						<Link href={'/'} className="h-auto w-full">
							<Image src={LogoSecondaryIcon} className="w-full" alt={'QA Logo'} />
						</Link>
					</div>
					<button
						className={'bg-transparent text-2xl text-primary duration-500 ease-in'}
						onClick={() => setMobileMenu(!mobileMenu)}
					>
						<RxHamburgerMenu />
					</button>
				</div>
			</div>

			{/* Shwoing mobile navigation */}

			<div
				className={`fixed z-10 h-full w-screen bg-solitude duration-500 ease-in-out xl:hidden ${
					mobileMenu ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<div className="container h-full w-full">
					<div className={`${isRTL() ? 'left-0 justify-start' : 'right-0 justify-end'} flex `}>
						<button
							className={'bg-transparent text-xl text-red-600 duration-500 ease-in'}
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							<TfiClose />
						</button>
					</div>

					<MenuBar />
					<div className="flex flex-row items-center gap-5">
						<Link
							href="/signin"
							className="font-normal text-secondary hover:text-primary active:text-primary"
						>
							Sign In
						</Link>
						<Button href={'demo'} size={'small'} className={`h-auto`}>
							Get Demo
						</Button>
					</div>
					{/* <div className="my-3">
						<LanguageSelect header="true" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default AppBar;
