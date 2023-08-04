import { NavList } from '@/constants/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

const MenuBar = () => {
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
	const toggleSubmenu = (index) => {
		setActiveSubmenu(index === activeSubmenu ? null : index);
	};
	const toggleNestedSubmenu = (index) => {
		setActiveNestedSubmenu(index === activeNestedSubmenu ? null : index);
	};

	return (
		<div className="relative md:-ml-[150px]">
			<div className="relative z-50 mx-auto w-full">
				<div className="relative flex w-full py-5">
					<div className="flex flex-col gap-4 pb-3 sm:px-3 md:flex-row">
						{NavList.map((item) => (
							<div
								key={item.id}
								className="relative"
								onClick={() => toggleSubmenu(item.id)}
								onMouseEnter={() => toggleSubmenu(item.id)}
								onMouseLeave={() => toggleSubmenu(item.id)}
							>
								<div className="flex place-items-center gap-2 py-2 text-sm font-normal md:justify-center">
									<Link
										className="block font-normal text-secondary hover:text-primary"
										href={item.path}
									>
										{item.name}
									</Link>
									{item.submenu && (
										<span className="text-secondary">
											<BiSolidDownArrow />
										</span>
									)}
								</div>

								{item.submenu && activeSubmenu === item.id && (
									<div className="absolute z-10 w-auto bg-dark bg-transparent md:-ml-8">
										<div className="realtive divide-y divide-gray-100 rounded-md bg-offWhite px-2 py-2 shadow-lg md:px-4">
											{item.submenu.map((subitem) => (
												<div
													key={subitem.id}
													onClick={() => toggleNestedSubmenu(subitem.id)}
													onMouseEnter={() => toggleNestedSubmenu(subitem.id)}
													onMouseLeave={() => toggleNestedSubmenu(subitem.id)}
												>
													<div className="flex place-items-center justify-center">
														<Link
															href={subitem.path}
															className="block px-4 py-1 font-normal text-primary hover:text-secondary"
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
