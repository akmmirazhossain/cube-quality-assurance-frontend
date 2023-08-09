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
import LanguageSelect from '../molecules/LanguageSelect';
import { RxHamburgerMenu } from 'react-icons/rx';
const AppBar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const router = useRouter();
	return (
		<>
			<div className="container bg-solitude">
				{/* Desktp Navigation */}
				<div className=" mx-auto hidden w-[90%] md:block">
					<div className="grid grid-cols-2">
						{router.pathname === '/' ? <LogoPrimary /> : <LogoSecondary />}

						{/* Desktop Navigation */}
						<div className="relative hidden h-auto align-middle md:block">
							<div className="flex place-items-center justify-between">
								<MenuBar />
								<MenuRightAction />
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="relative z-10 flex w-full place-items-center items-center justify-between p-5 md:hidden">
					<div className=" max-w-sm">
						<Link href={'/'} className="h-auto w-full">
							<Image src={LogoSecondaryIcon} className="w-full" alt={'QA Logo'} />
						</Link>
					</div>
					<Button
						className={'bg-transparent text-2xl text-primary duration-500 ease-in'}
						onClick={() => setMobileMenu(!mobileMenu)}
					>
						<RxHamburgerMenu />
					</Button>
				</div>
			</div>

			{/* Shwoing mobile navigation */}

			<div
				className={`fixed z-10 h-full w-screen bg-solitude duration-500 ease-in-out md:hidden ${
					mobileMenu ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<div className="h-full w-full px-5 py-3">
					<div className="right-0 flex justify-end">
						<Button
							variant={'danger'}
							className={'bg-transparent text-xl text-red-600 duration-500 ease-in'}
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							<TfiClose />
						</Button>
					</div>

					<MenuBar />
					<div className="flex flex-row items-center gap-5">
						<Link
							href="/signin"
							className="font-normal text-secondary hover:text-primary active:text-primary"
						>
							Signin
						</Link>
						<Button href={'demo'} size={'small'} className={`h-auto`}>
							Get Demo
						</Button>
					</div>
					<div className="my-3">
						<LanguageSelect header="true" />
					</div>
				</div>
			</div>
		</>
	);
};

export default AppBar;
