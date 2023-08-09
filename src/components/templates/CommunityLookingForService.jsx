import React from 'react';
import Heading from '../atoms/Heading';
import Image from 'next/image';
import { ServicePartner } from '@/constants/constants';

const CommunityLookingForService = () => {
	return (
		<div className="w-full bg-solitude">
			<div className="bulb-bg-position bulb-bg-size max-h-[350px] w-[80%] rounded-br-35 rounded-tr-35 bg-primary bg-searchBulb bg-no-repeat px-[10%] py-[5%] md:bg-auto">
				<Heading tag={'pg'} variant={'white'}>
					Looking for services?
				</Heading>
				<div className="mt-[6%]">
					<Heading tag={'p'} variant={'white'} size={34}>
						Then contact a partner <br />
						in your preferred country
					</Heading>
				</div>
			</div>
			<div className="px-[10%]">
				<div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-3">
					<div className=" col-span-1">
						<label className="block text-sm font-medium text-primary">Search your country</label>
						<select
							name="field6"
							className="mt-1 block w-full border-gray-300 p-1 shadow-sm sm:text-sm"
						>
							<option value="">---</option>
							<option value="option2">Option 1</option>
							<option value="option3">Option 2</option>
						</select>
					</div>
					<div className="col-span-2">
						{ServicePartner.map(({ image, content }, index) => (
							<div className="flex flex-col gap-5 md:my-6 md:flex-row" key={index}>
								<div className="w-full basis-2/5">
									<Image src={image} alt="Service Partner" />
								</div>
								<p>{content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityLookingForService;
