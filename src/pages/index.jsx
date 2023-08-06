import HeroSection from '@/components/templates/HeroSection';
import AppModules from '@/components/templates/AppModules';
import Partners from '@/components/organisms/Partners';
import WhatEveryonesSaying from '@/components/molecules/WhatEveryoneSaying';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AppModules />
			<Partners />
			<WhatEveryonesSaying />
		</>
	);
};

export default HomePage;
