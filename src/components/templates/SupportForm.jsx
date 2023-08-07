import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const SupportForm = () => {
	return (
		<div className="bg-solitude">
			<div className="grid grid-flow-row grid-cols-3 pt-52">
				<div className="col-span-2 mx-auto w-full px-24 py-10">
					<div className="grid w-full grid-flow-row grid-cols-1 gap-5">
						<div className="w-[70%]">
							<label htmlFor="field1" className="block text-sm font-medium text-secondary">
								Name
							</label>
							<input
								type="text"
								id="field1"
								name="field1"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="w-[70%]">
							<label htmlFor="field2" className="block text-sm font-medium text-secondary">
								Email
							</label>
							<input
								type="text"
								id="field2"
								name="field2"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="w-[70%]">
							<label htmlFor="field2" className="block text-sm font-medium text-secondary">
								Phone Number
							</label>
							<input
								type="text"
								id="field2"
								name="field2"
								className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<div className="flex gap-2">
							<div className="basis-2/6">Please identify me (tick)</div>
							<div className="w-full ">
								<div className="flex gap-3">
									<input type="checkbox" />{' '}
									<label className="font-medium text-secondary">My subscription code</label>
								</div>
								<div className="flex gap-3">
									<input type="checkbox" />
									<label className="font-medium text-secondary">Database url</label>
								</div>
								<div className="flex gap-3">
									<input type="checkbox" />
									<label className="font-medium text-secondary">
										I don't have the require informatio
									</label>
								</div>
								<div className="w-full">
									<input
										type="text"
										id="field2"
										name="field2"
										className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
									<label htmlFor="field2" className="block text-sm font-medium text-secondary">
										Please sign in if you know your subscription number
									</label>
								</div>
							</div>
						</div>
						<div className="flex gap-2">
							<div className="basis-2/6">Support type (tick)</div>
							<div className="w-full">
								<div className="flex gap-3">
									<input type="checkbox" />{' '}
									<label className="font-medium text-secondary">
										about my subscription and/or billing
									</label>
								</div>
								<div className="flex gap-3">
									<input type="checkbox" />
									<label className="font-medium text-secondary">
										about the configuration/use of apps
									</label>
								</div>
								<div className="flex gap-3">
									<input type="checkbox" />
									<label className="font-medium text-secondary">app problems/functionality</label>
								</div>
								<div className="flex gap-3">
									<input type="checkbox" />
									<label className="font-medium text-secondary">i can't access my database</label>
								</div>
								<div className="flex w-full items-center gap-3">
									<input type="checkbox" id="field2" name="field2" />
									<label htmlFor="field2" className="block text-sm font-medium text-secondary">
										Other
									</label>
									<input
										type="text"
										id="field2"
										name="field2"
										className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div className="flex place-items-center gap-3">
							<label htmlFor="field2" className="block text-sm font-medium text-secondary">
								Subject
							</label>
							<input
								type="text"
								id="field2"
								name="field2"
								className="mt-1 block w-[60%] border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="flex w-full place-items-center gap-3">
							<label htmlFor="field2" className="block text-sm font-medium text-secondary">
								Attach your file
							</label>
							<input
								type="file"
								id="field2"
								name="field2"
								className="mt-1 block w-auto basis-1/4 border-gray-300 bg-white p-1  sm:text-sm"
							/>
						</div>
						<div className="text-center">
							<Button size={'small'}>Submit</Button>
						</div>
					</div>
				</div>
				<div className="col-span-1 w-full">
					<div className="relative mx-auto -mt-44 w-[70%] rounded-3xl bg-white p-14 text-left">
						<Heading tag="p" size="sm">
							Support can be given in <br /> English and Arabic.
						</Heading>
						<div className="my-6">
							<Heading tag="p" size="sm">
								Here is what you can <br /> expect from our support.
							</Heading>
						</div>

						<div className="my-6">
							<Heading tag="p" size="sm">
								Sign in to detect your <br /> information.
							</Heading>
						</div>
					</div>

					<div className="absolute bottom-0  w-[70%] rounded-3xl p-14 text-left">
						<Heading tag="p" size="sm">
							Support can be given in <br /> English and Arabic.
						</Heading>
						<div className="my-6">
							<Heading tag="p" size="sm">
								Here is what you can <br /> expect from our support.
							</Heading>
						</div>

						<div className="my-6">
							<Heading tag="p" size="sm">
								Sign in to detect your <br /> information.
							</Heading>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupportForm;
