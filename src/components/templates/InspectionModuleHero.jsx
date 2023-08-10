const InspectionModuleHero = () => {
	return (
		<div className="relative w-full bg-[url('/images/shapes/HalfRound.png')] bg-auto bg-left-bottom bg-no-repeat md:h-[650px]">
			<div className="relative h-full p-10 sm:p-16 md:p-20">
				<div className=" h-full w-full bg-auto bg-right bg-no-repeat md:bg-inspectionModule">
					<div className="w-full p-2">
						<div className="text-secondary md:py-8">
							<h1 className="text-2xl font-medium sm:text-3xl md:text-5xl">
								The Inspection <br />
								Manager Module
							</h1>
							<span className="text-2xl font-light sm:text-3xl md:text-5xl">
								you were looking for.
							</span>
						</div>
						<div className="mt-10 text-lg font-light text-secondary md:text-2xl">
							<span>
								Open source.
								<br />
								Scalable Easy-to-use.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InspectionModuleHero;
