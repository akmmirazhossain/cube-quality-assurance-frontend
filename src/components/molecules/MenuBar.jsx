import { NavList } from '@/constants/constants';
import { isRTL } from '@/constants/utils';
import Link from 'next/link';
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { BiSolidDownArrow } from 'react-icons/bi';

const MenuBar = () => {
	let isRtl = isRTL();
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
	const toggleSubmenu = (index) => {
		setActiveSubmenu(index === activeSubmenu ? null : index);
	};
	const toggleNestedSubmenu = (index) => {
		setActiveNestedSubmenu(index === activeNestedSubmenu ? null : index);
	};

	return (
		<div className={`relative ${isRtl ? 'xl:-mr-[150px]' : 'xl:-ml-[150px]'}`}>
			<div className="relative z-50 mx-auto w-full">
				<div className="relative w-full py-5">
					<div className="flex flex-col gap-4 pb-3 sm:px-3 md:flex-row md:gap-1 md:px-0 lg:gap-4">
						{NavList.map((item) => (
							<div
								key={item.id}
								className="relative"
								onClick={() => toggleSubmenu(item.id)}
								onMouseEnter={() => toggleSubmenu(item.id)}
								onMouseLeave={() => toggleSubmenu(item.id)}
							>
								<div className="group flex flex-auto place-items-center gap-2 py-2 text-sm font-normal md:justify-center md:gap-1 lg:gap-2">
									<Link
										className="block font-normal text-secondary hover:text-primary"
										href={item.path}
									>
										{item.name}
									</Link>
									{item.submenu && (
										<span className="text-secondary transition-all duration-200 ease-in-out group-hover:rotate-180">
											<BiSolidDownArrow />
										</span>
									)}
								</div>

								{item.submenu && activeSubmenu === item.id && (
									<div className="absolute z-10 -ml-8 w-auto bg-dark bg-transparent">
										<div className="realtive divide-y divide-gray-100 rounded-md bg-offWhite px-6 py-3 shadow-lg md:px-4">
											{item.submenu.map((subitem) => (
												<div
													key={subitem.id}
													onClick={() => toggleNestedSubmenu(subitem.id)}
													onMouseEnter={() => toggleNestedSubmenu(subitem.id)}
													onMouseLeave={() => toggleNestedSubmenu(subitem.id)}
												>
													<div className="flex place-items-start justify-start">
														<Link
															href={subitem.path}
															className="block px-4 py-1 text-sm font-normal text-primary hover:text-secondary"
														>
															{subitem.name}
														</Link>
													</div>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
