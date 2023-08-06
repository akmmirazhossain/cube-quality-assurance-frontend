import React from 'react';

const OptimizedMobileFriendly = () => {
	return (
		// <div className="bg-dark px-10 py-12 text-white">
		// 	<div className="grid grid-cols-3 gap-4">
		// 		<h1 className="col-span-2 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
		// 			Optimised & Mobile Friendly
		// 		</h1>
		// 		<div className="text-1xl md:text-1xl col-span-2 mt-3 lg:text-2xl xl:text-2xl">
		// 			Use integrated tools to help you be top ranked in search engines. Your website will be
		// 			auto- matically adapted on mobile devices.
		// 		</div>
		// 	</div>

		// 	<div className="mt-14 grid  gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		// 		<div className="">
		// 			<h1 className="text-1xl md:text-1xl mb-4 font-bold lg:text-2xl xl:text-2xl">
		// 				Comprehensive Dashboard
		// 			</h1>
		// 			<div className="">
		// 				Use the built-in dashboard to see your best sales and get advanced statistics on your
		// 				eCommerce.
		// 			</div>
		// 		</div>

		// 		<div className="">
		// 			<h1 className="text-1xl md:text-1xl mb-4 font-bold lg:text-2xl xl:text-2xl">
		// 				Multi Websites
		// 			</h1>
		// 			<div className="">
		// 				Configure multiple stores on the same database. Share products between websites.
		// 			</div>
		// 		</div>

		// 		<div className="">
		// 			<h1 className="text-1xl md:text-1xl mb-4 font-bold lg:text-2xl xl:text-2xl">Analytics</h1>
		// 			<div className="">
		// 				Use the integrated tracking tool or connect your Google Analytics account to understand
		// 				the behavior of your visitors and improve the conversion rate.
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className="bg-dark px-10 py-6 text-white sm:px-6 md:px-8 md:py-12 lg:px-10">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<p className="col-span-2 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
					Optimized & Mobile Friendly
				</p>
				<div className="col-span-2 mt-3 text-base md:text-xl lg:text-2xl xl:text-2xl">
					Use integrated tools to help you be top-ranked in search engines. Your website will be
					automatically adapted on mobile devices.
				</div>
			</div>

			<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div className="md:col-span-1">
					<p className="mb-4 text-lg font-medium md:text-xl lg:text-2xl xl:text-2xl">
						Comprehensive Dashboard
					</p>
					<div className="text-sm md:text-base">
						Use the built-in dashboard to see your best sales and get advanced statistics on your
						eCommerce.
					</div>
				</div>

				<div className="md:col-span-1">
					<p className="mb-4 text-lg font-medium md:text-xl lg:text-2xl xl:text-2xl">
						Multi Websites
					</p>
					<div className="text-sm md:text-base">
						Configure multiple stores on the same database. Share products between websites.
					</div>
				</div>

				<div className="md:col-span-1">
					<p className="mb-4 text-lg font-medium md:text-xl lg:text-2xl xl:text-2xl">Analytics</p>
					<div className="text-sm md:text-base">
						Use the integrated tracking tool or connect your Google Analytics account to understand
						the behavior of your visitors and improve the conversion rate.
					</div>
				</div>
			</div>
		</div>
	);
};

export default OptimizedMobileFriendly;
