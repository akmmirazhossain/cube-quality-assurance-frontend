import React from 'react';
import { Button } from '../atoms/Button';
import { CompanyAdminIcon, DesktopClickIcon } from '../../../public/images';
import Image from 'next/image';
import { AppModuleList } from '@/constants/constants';

const AppModules = () => {
	return (
		<div className="relative p-10">
			{/* AppsModule Heading */}
			<div className="mx-auto h-[405px] w-[953px] pl-5">
				<div className=" grid h-full w-full grid-flow-col grid-cols-2 gap-5">
					<div className="flex place-items-center justify-center">
						<div className="h-[303px] w-[303px] rounded-full bg-secondary p-4">
							<div className="flex h-full w-full place-items-center justify-center align-middle">
								<div className="grid h-full w-full place-items-center">
									<div className="mx-auto">
										<Image
											src={DesktopClickIcon}
											className="mx-auto h-[138px] w-[135px]"
											alt="desktop icon"
										/>
										<p className="pt-3 text-center text-[18px] text-white">
											Simple integrated apps <br />
											at your fingertips
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="h-full w-full">
						<h1 className="text-5xl font-medium text-secondary">Apps Module</h1>
						<div className="py-4">
							<p className=" text-2xl font-light leading-[38px] text-secondary">
								Our team of experienced professionals is dedicated to helping businesses achieve
								their goals by providing them with the tools and expertise they need to succeed.
								This is why we have developed these app modules to make your life easier.
							</p>
						</div>
						<Button>Learn More</Button>
					</div>
				</div>
			</div>

			{/* Apps Module List */}
			<div className="absolute right-10 h-full w-[972px]">
				<div className="relative h-full w-full">
					<div className="grid grid-flow-row grid-cols-5 gap-5">
						{AppModuleList.slice(0, 5).map(({ id, title, content, icon }) => (
							<div className="relative space-y-2 text-center" key={id}>
								<div className="flex justify-center px-2">
									<Image src={icon} className="h-[60px] w-auto" alt="company admin " />
								</div>

								<h3 className="font-semibold text-secondary">{title}</h3>

								<p className="text-sm font-light leading-[21px] text-secondary">{content}</p>
							</div>
						))}
					</div>
					<div className="my-5">
						<div className="grid grid-cols-4 justify-center gap-5">
							{AppModuleList.slice(5).map(({ id, title, content, icon }) => (
								<div className="relative space-y-2 text-center" key={id}>
									<div className="flex justify-center px-2">
										<Image src={icon} className="h-[60px] w-auto" alt="company admin " />
									</div>

									<h3 className="font-semibold text-secondary">{title}</h3>

									<p className="text-sm font-light leading-[21px] text-secondary">{content}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppModules;
