import { isRTL } from '@/constants/utils';
import leaderboard from '@/data/leaderboard';
import Image from 'next/image';
import { VideoPlayer } from '../../../public/images';

const TutorialSection = () => {
	return (
		<div className="container h-full">
			<div
				className={`${
					isRTL() ? 'rtl-tutorial-bg-position' : 'tutorial-bg-position'
				} tutorial-sm-bg-size md:tutorial-md-bg-size ml-auto h-full w-full rounded-bl-3xl rounded-tl-3xl bg-primary bg-tutorialMagniLaptopBg bg-no-repeat p-4 md:h-[300px] md:rounded-l-3xl md:p-8 lg:h-[470px]`}
			>
				<div className="p-4 md:p-8">
					<p className="text-sm font-light text-white sm:text-base md:pb-2 md:text-2xl lg:text-5xl">
						Gain the power of knowledge and{' '}
					</p>
					<p className="text-sm font-medium text-white sm:text-base md:text-2xl lg:text-5xl">
						Choose a tutorial that&apos;s right for you
					</p>
				</div>
			</div>

			<div className="relative mx-auto w-full md:-top-[120px] md:px-4 lg:-top-[250px]">
				{/* Video column  */}
				<div className="flex w-full flex-col gap-5 p-4 pb-3 text-black sm:flex-row md:w-1/2 md:justify-between  md:px-12 md:text-white">
					{/* tiny nav */}
					<div className="">Certifications</div>
					<div className="">Business</div>
					<div className="">Documentation</div>
				</div>

				<div className="flex justify-center">
					{/* video player */}

					<Image className="w-full md:w-full" src={VideoPlayer} alt="Video Player" />
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

				<div className={`col-span-1 w-full bg-solitude p-5 md:mt-[68px] lg:mt-[198px]`}>
					{/* Right course LIST */}
					<p className="text-sm font-medium text-secondary lg:text-base">Leaderboard by Views</p>
					{leaderboard.map((val, key) => (
						<div className="flex justify-between gap-2 py-3 text-sm text-secondary" key={key}>
							<div className="w-auto">{key + 1}</div>
							<div className="w-full">{val.title}</div>
							<div className="grid flex-auto place-items-center bg-secondary text-center text-white md:w-auto md:px-1 lg:w-[30%] lg:px-3">
								{val.views}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TutorialSection;
