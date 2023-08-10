import React from 'react';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const SupportForm = () => {
	return (
		<div className="bg-solitude">
			<div className="container px-10 pb-5 lg:-mt-32">
				<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 md:pt-[33%]">
					<div className="mx-auto w-full py-5 md:col-span-2 md:px-14 md:py-10 lg:px-24">
						<div className="grid w-full grid-flow-row grid-cols-1 gap-5">
							<div className="w-full lg:w-[70%]">
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
							<div className="w-full lg:w-[70%]">
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
							<div className="w-full lg:w-[70%]">
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

							<div className="flex flex-col gap-2 md:flex-row">
								<div className="w-full text-secondary lg:basis-2/6">Please identify me (tick)</div>
								<div className="w-full ">
									<div className="flex gap-2">
										<input type="checkbox" />{' '}
										<label className="font-medium text-secondary">My subscription code</label>
									</div>
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">Database url</label>
									</div>
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">
											I don&apos;t have the require information
										</label>
									</div>
									<div className="w-full">
										<input
											type="text"
											id="field2"
											name="field2"
											className="my-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
										<label htmlFor="field2" className="block text-sm font-medium text-secondary">
											Please sign in if you know your subscription number
										</label>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2 md:flex-row">
								<div className="basis-2/6 text-secondary">Support type (tick)</div>
								<div className="w-full">
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">
											about my subscription and/or billing
										</label>
									</div>
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">
											about the configuration/use of apps
										</label>
									</div>
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">app problems/functionality</label>
									</div>
									<div className="flex gap-2">
										<input type="checkbox" />
										<label className="font-medium text-secondary">
											i can&apos;t access my database
										</label>
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
									className="mt-1 block w-full border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:w-[60%]"
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
									className="mt-1 block w-auto border-gray-300 bg-white p-1 sm:text-sm  md:basis-1/4"
								/>
							</div>
							<div className="text-center">
								<Button size={'small'}>Submit</Button>
							</div>
						</div>
					</div>
					<div className="relative w-full md:col-span-1">
						<div className="relative mx-auto w-full rounded-3xl bg-white p-8 text-left md:-mt-44 md:p-5 lg:w-[70%] lg:p-14">
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

						<div className="relative bottom-0 w-full  rounded-3xl p-5 text-left md:absolute lg:w-[80%] lg:p-14">
							<Heading tag="p" size={18} className="mb-5">
								Tips to help us
							</Heading>
							<Heading tag="p" variant={'dark'} size="sm">
								The more information or details you can provide us with will help our support tean
								resolve your problems as quickly as posible.
							</Heading>
							<Heading tag="p" size="sm" variant={'dark'} className="mt-5">
								Please send us screen shots so we can better assess the problem
							</Heading>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupportForm;
