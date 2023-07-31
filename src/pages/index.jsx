import HeroSection from '@/components/templates/HeroSection';
import TopNav from '@/components/molecules/MenuBar';

const HomePage = () => {
	return (
		<div className="bg-primary relative mx-auto h-screen w-[900px]">
			<div className="self-auto">
				<HeroSection />
			</div>
		</div>

		// <div>
		// 	<meta charSet="UTF-8" />
		// 	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		// 	<title>Tailwind Grid with Border</title>
		// 	<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

		// 	{/* MAIN START */}
		// 	<div className="container mx-auto mt-8 ">

		// 		{/*HERO START*/}
		// 		<div className="grid grid-cols-1 gap-4 border border-gray-500 p-4 bg-[#E8E9EC]">
		// 			<div className="border border-gray-500 p-4 h-96 text-center bg-white">
		// 				{/* Content for cell 1 */}
		// 				HERO SECTION
		// 			</div>

		// 		</div>

		// 		{/*HERO START*/}

		// 		{/*APP MODULE START*/}
		// 		<div className="grid grid-cols-1 gap-4 border border-gray-500 p-4 bg-[#E8E9EC]">
		// 			<div className="border border-gray-500 p-4 h-96 text-center bg-white">
		// 				{/* Content for cell 1 */}
		// 				APP MODULE SECTION
		// 			</div>

		// 		</div>

		// 		{/*APP MODULE END*/}

		// 		{/*PARTNERS START*/}
		// 		<div className="grid grid-cols-1 gap-4 border border-gray-500 p-4 bg-[#E8E9EC]">
		// 			<div className="border border-gray-500 p-4 h-96 text-center bg-white">
		// 				{/* Content for cell 1 */}
		// 				PARTNERS SECTION
		// 			</div>

		// 		</div>

		// 		{/*PARTNERS END*/}

		// 		{/*PARTNERS START*/}
		// 		<div className="grid grid-cols-1 gap-4 border border-gray-500 p-4 bg-[#E8E9EC]">
		// 			<div className="border border-gray-500 p-4 h-96 text-center bg-white">
		// 				{/* Content for cell 1 */}
		// 				FOOTER SECTION
		// 			</div>

		// 		</div>

		// 		{/*PARTNERS END*/}

		// 	</div>

		// 	{/* MAIN END */}
		// </div>
	);
};

export default HomePage;
