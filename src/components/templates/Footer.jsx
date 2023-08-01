import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FooterServices, LanguageItem } from '../organisms';
import { FooterAboutUs } from '../organisms/FooterAboutUs';
import { Logo } from '../../../public/images';
import { FooterSocialList } from '@/constants/constants';

const Footer = () => {
	return (
		<footer className="relative h-auto w-full bg-dark">
			<div className="mx-auto max-w-[1050px] pt-20">
				<div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
					<div className="col-span-1 text-white">
						<div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
							<FooterServices />
							<FooterAboutUs />
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex justify-between gap-4">
							<div className="relative">
								<Image src={Logo} className="w-[250px]" alt="Company Logo" />
							</div>
							<div className="relative">
								<p className="font-light text-white">
									QUisan opensource AI business apps that is designed to cover all your company
									needs: project management, etc.
									QA'suniquevaluepropositionistobeatthesametimeveryeasy to use and fully integrated.
								</p>
								<hr className="my-8 h-px border-0 bg-gray-100"></hr>
								<div className="relative flex place-items-center justify-between">
									{FooterSocialList.map(({ id, title, logo, href }) => (
										<Link href={'#'}>
											<Image src={logo} alt={title} />
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 text-center text-white">
					<span>Copyright © {new Date().getFullYear} QA. All rights reserved.</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
