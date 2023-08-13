import { isRTL } from '@/constants/utils';
import Heading from '../atoms/Heading';

const PlanHeader = () => {
	return (
		<div className="max-w-screen relative min-h-[280px]">
			<div
				className={`relative inset-0 h-full w-full py-5 text-center xl:absolute ${
					isRTL() ? 'xl:right-[50%]' : 'xl:left-[50%]'
				} w-full xl:max-w-[550px]`}
			>
				<div className="mx-auto w-full md:w-full">
					<div className="text-center text-secondary">
						<Heading variant={'secondary'} weight={'light'}>
							Choose a Plan That&apos;s
						</Heading>
						<Heading variant={'secondary'}>Right for your Business</Heading>
						<p className="my-4 text-sm">*Monthly Subscription Per 3 or 6 Months</p>
					</div>
					<div className="mx-auto flex justify-center text-center">
						<div className="flex flex-col place-items-center items-center gap-2 md:flex-row md:gap-5">
							<span className="text-primary">Apps Module</span>
							<div className="">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="77"
									height="45"
									viewBox="0 0 77 45"
									fill="none"
								>
									<path
										d="M54.3579 0.0341529C51.3989 0.0316712 48.4693 0.622759 45.7427 1.7722C43.0161 2.92164 40.5477 4.60615 38.4835 6.72623C35.3958 3.55572 31.4327 1.37806 27.1009 0.471642C22.769 -0.434774 18.2653 -0.0286793 14.1655 1.63786C10.0656 3.3044 6.55584 6.15567 4.08493 9.82731C1.61402 13.4989 0.294189 17.8239 0.294189 22.2496C0.294189 26.6752 1.61402 31.0004 4.08493 34.6721C6.55584 38.3437 10.0656 41.195 14.1655 42.8615C18.2653 44.528 22.769 44.9341 27.1009 44.0277C31.4327 43.1213 35.3958 40.9437 38.4835 37.7731C41.0437 40.4132 44.2184 42.3776 47.7236 43.4904C51.2288 44.6032 54.9553 44.8298 58.5695 44.1499C62.1837 43.4701 65.5729 41.9049 68.4342 39.5945C71.2954 37.2841 73.5395 34.3005 74.9654 30.9106C76.3913 27.5207 76.9546 23.8301 76.6051 20.1691C76.2556 16.5081 75.0042 12.9911 72.9626 9.93219C70.9211 6.87331 68.1531 4.3682 64.9064 2.64091C61.6596 0.913627 58.0354 0.017892 54.3579 0.0341529Z"
										fill="#23252D"
									/>
									<path
										d="M54.358 37.7313C63.1204 37.7313 70.2236 30.628 70.2236 21.8656C70.2236 13.1032 63.1204 6 54.358 6C45.5956 6 38.4922 13.1032 38.4922 21.8656C38.4922 30.628 45.5956 37.7313 54.358 37.7313Z"
										fill="#E8E9EC"
									/>
								</svg>
							</div>
							<span className="text-primary">Apps Module</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanHeader;
