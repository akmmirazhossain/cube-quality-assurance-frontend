import leaderboard from '@/data/leaderboard';

const TutorialSection = () => {
	return (
		<div>
			<div
				className=" ml-4 rounded-tl-3xl bg-primary bg-[93%] bg-no-repeat p-4 pl-4 md:ml-24 md:h-80 md:rounded-l-3xl md:bg-tutorialMagniLaptopBg md:p-8 md:pl-16"
				style={{ backgroundSize: '200px 163px' }}
			>
				{/* //BG COLOR */}
				<div className="p-4 md:p-8">
					<p className="text-sm font-light text-white md:pb-2 md:text-4xl">
						Gain the power of knowledge and{' '}
					</p>
					<p className="text-sm font-medium text-white md:text-4xl">
						Choose a tutorial that&apos;s right for you
					</p>
				</div>
			</div>

			<div className="justify-center md:flex md:px-20">
				<div className="relative w-full  px-4 md:-top-28 md:w-[70%] md:px-36">
					<div>
						{/* Video column  */}
						<div className="flex flex-col pb-3  text-black md:flex-row md:justify-between md:text-white">
							{/* tiny nav */}
							<div className="mx-5">Certifications</div>
							<div className="mx-5">Business</div>
							<div className="mx-5">Documentation</div>
						</div>

						<div className="flex justify-center">
							{/* video player */}
							{/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
							<img className="w-full md:w-full" src="/images/videoplayer.png" />
						</div>
					</div>
					<div className="mt-6 flex flex-col  md:flex-row md:justify-between">
						{/* dropdowns */}
						<div className="w-full md:w-[50%]">
							{/* left dropdown */}
							<p className="font-bold  text-primary">Most popular courses</p>
							<select
								id="field6"
								name="field6"
								className="via-white-100 mt-1 block w-full border-gray-300 bg-gradient-to-br from-gray-100 to-gray-100 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-full sm:text-sm md:w-[85%]"
							>
								<option value="">---</option>
								<option value="option2">Option 1</option>
								<option value="option3">Option 2</option>
							</select>
						</div>
						<div className="w-full md:w-[50%]">
							{/* right dropdown */}
							<p className="font-bold text-primary">Newest courses</p>
							<select
								id="field6"
								name="field6"
								className="via-white-100 mt-1 block w-full border-gray-300 bg-gradient-to-br from-gray-100 to-gray-100 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-full sm:text-sm md:w-[85%]"
							>
								<option value="">---</option>
								<option value="option2">Option 1</option>
								<option value="option3">Option 2</option>
							</select>

							<div className="p-3 text-xs text-primary md:text-xs">
								<p className="font-bold text-primary">Accounting and invoicing</p>
								<ul>
									<li>Manufacturing Inventory Management</li>
									<li>Standard Accounting</li>
									<li>Usage Tips </li>
									<li>Setting up: User Management</li>
									<li>Setting up: Business Details, Working Hours, PDF Editor</li>
									<li>Setting up: Procured Items, Purchase Terms</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-solitude p-5 md:w-[30%]">
					<div>
						{/* Right course LIST */}
						<p className="text-sm font-bold text-secondary">Leaderboard by Views</p>
						{leaderboard.map((val, key) => (
							<div className="flex gap-1 py-3 text-sm text-secondary" key={key}>
								<div className="w-[10%]">{key + 1}</div>
								<div className="w-[60%]">{val.title}</div>
								<div className="ml-3 w-[30%] bg-secondary text-center text-white">{val.views}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TutorialSection;
