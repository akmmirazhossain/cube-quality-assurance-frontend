import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Logo } from '../../../public/images';
import { FooterSocialList } from '@/constants/constants';
import FooterServices from '../organisms/FooterServices';
import FooterAboutUs from '../organisms/FooterAboutUs';

const Footer = () => {
	return (
		<div className="relative h-auto w-full bg-dark">
			<div className="mx-auto max-w-[1050px] p-5 md:pt-20">
				<div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
					<div className="col-span-1 text-white">
						<div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
							<FooterServices />
							<FooterAboutUs />
						</div>
					</div>
					<div className="col-span-1 mt-5 md:mt-0">
						<div className="flex flex-col justify-between gap-4 md:flex-row">
							<div className="relative">
								<Image src={Logo} className="w-[250px]" alt="Company Logo" />
							</div>
							<div className="relative">
								<p className="font-light text-white">
									QUisan opensource AI business apps that is designed to cover all your company
									needs: project management, etc. QA's unique value proposition is to be at the same
									time very easy to use and fully integrated.
								</p>
								<hr className="my-8 h-px border-0 bg-gray-100"></hr>
								<div className="relative flex place-items-center justify-center">
									{/* For small screens, show the items in a column */}
									<div className="grid grid-cols-4 gap-4 md:grid-cols-8">
										{FooterSocialList.map(({ id, title, logo, href, icon }) => (
											<Link href={href} key={id} className="text-4xl text-white">
												{icon}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 text-center text-white">
					<span>Copyright © {new Date().getFullYear()} QA. All rights reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
