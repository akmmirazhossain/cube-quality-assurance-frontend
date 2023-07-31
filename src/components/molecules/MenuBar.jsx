import { NavList } from '@/constants/constants';
//import { FlyMenu } from "@/components/atoms/FlyMenu";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
//import { HiOutlineMenu } from "react-icons/hi";
//import { RxCross1 } from "react-icons/rx";

const MenuBar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
	const toggleSubmenu = (index) => {
		setActiveSubmenu(index === activeSubmenu ? null : index);
	};
	const toggleNestedSubmenu = (index) => {
		setActiveNestedSubmenu(index === activeNestedSubmenu ? null : index);
	};

	return (
		<nav className="relative z-50 mx-auto px-6 md:container">
			<div className="relative flex w-full justify-between py-5">
				{/* <div className="h-8 align-middle shrink-0 md:h-12">
          <Link href={"/"}>
            <Image
              src={ecgGlobalLinkLogoSmall}
              className="w-auto h-full"
              alt="ECG Global Link"
            />
          </Link>
        </div> */}
				{/* This is for Desktop Navigation */}
				{/* <div className="hidden h-12 shrink-0 md:block md:align-middle">
          <div className="flex items-center justify-center h-full space-x-4">
            <span className="text-xl text-primary font-sans">
              Have any questions? +1 929-586-6559, +8801744-735753, Email:
              <Link href={"mailto:info@ecgloballink.com"}>
                info@ecgloballink.com
              </Link>
            </span>
          </div>
        </div> */}

				{/* <div className="hidden shrink-0 md:flex md:h-12 md:items-center md:justify-center">
          <Link
            href={"/form/apply-now"}
            className="px-5 py-1 text-lg font-semibold text-white rounded-md bg-primary"
          >
            Apply Now
          </Link>
        </div> */}

				{/* For Mobile Navigation */}
				{/* <div className="block h-8 align-middle shrink-0 md:hidden">
          <div className="flex items-center justify-center h-full">
            <button
              className="text-2xl text-primary"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <RxCross1 /> : <HiOutlineMenu />}
            </button>
          </div>
        </div> */}

				{/* <div
          className={`${
            mobileMenu ? "block" : "hidden"
          } md:hidden absolute right-0 top-16 w-full pt-2 z-auto`}
        > */}

				<div className="bg-primary flex pb-3 sm:px-3">
					{NavList.map((item, index) => (
						<div
							key={item.id}
							className="relative"
							onClick={() => toggleSubmenu(item.id)}
							onMouseEnter={() => toggleSubmenu(item.id)}
							onMouseLeave={() => toggleSubmenu(item.id)}
						>
							<Link
								className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								href={item.path}
							>
								{item.name}
							</Link>

							{item.submenu && activeSubmenu === item.id && (
								<div className="relative z-10 w-full bg-transparent">
									<div className="divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										{item.submenu.map((subitem) => (
											<div
												key={subitem.id}
												onClick={() => toggleNestedSubmenu(subitem.id)}
												onMouseEnter={() => toggleNestedSubmenu(subitem.id)}
												onMouseLeave={() => toggleNestedSubmenu(subitem.id)}
											>
												<Link
													href={subitem.path}
													className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
												>
													{subitem.name}
												</Link>
												{subitem.submenu && activeNestedSubmenu === subitem.id && (
													<div className="relative z-10 w-full bg-transparent">
														<div className="divide-y divide-gray-100  bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5">
															{subitem.submenu.map((nestItem) => (
																<div key={nestItem.id}>
																	<Link
																		href={nestItem.path}
																		className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
																	>
																		{nestItem.name}
																	</Link>
																</div>
															))}
														</div>
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				{/* </div> */}
			</div>
		</nav>
	);
};

export default MenuBar;
