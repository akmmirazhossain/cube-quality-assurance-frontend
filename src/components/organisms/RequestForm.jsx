//import React from 'react';
//import Group from "../../public"

const RequestForm = () => {
	return (
		<div
			className="relative mx-auto h-[1000px]  border bg-solitude bg-[url('/images/Group.png')] bg-contain bg-center bg-no-repeat object-contain"
			// style={{ backgroundImage: `url('images/Group.png')` }}
		>
			<div class="grid grid-cols-6 gap-4">
				<div class="col-span-4 col-start-2">
					<h1 className=" mx-auto pb-5 text-center text-xl">
						Simply complete the beLow formand one of our experts will get back to you
					</h1>

					<form className="mx-auto w-full">
						<div className="mb-6 flex flex-wrap">
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-first-name"
								>
									First Name
								</label>
								<input
									className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
									type="text"
									placeholder=""
								/>
							</div>
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-last-name"
								>
									Last Name
								</label>
								<input
									className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
									type="text"
									placeholder=""
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-wrap">
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-first-name"
								>
									Email
								</label>
								<input
									className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
									type="text"
									placeholder=""
								/>
							</div>
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-last-name"
								>
									Business
								</label>
								<input
									className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
									type="text"
									placeholder=""
								/>
							</div>
						</div>
						<div className="mb-6 flex flex-wrap">
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-first-name"
								>
									Contact
								</label>
								<input
									className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
									type="text"
									placeholder=""
								/>
							</div>
							<div className="w-full px-3 md:w-1/2">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-last-name"
								>
									Nature of industry
								</label>
								<div className="relative">
									<select
										className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
										id="grid-state"
									>
										<option>...</option>
										<option>...</option>
										<option>...</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="h-4 w-4 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						#85ztnq75t
						<div className="mb-2 flex flex-wrap">
							<div className="mb-6 w-full px-3 md:mb-0">
								<label
									className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
									htmlFor="grid-city"
								>
									City
								</label>
								<textarea
									class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
									id="grid-last-name"
								></textarea>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RequestForm;
