import HeroSection from '@/components/templates/HeroSection';
import AppModules from '@/components/templates/AppModules';
import Partners from '@/components/organisms/Partners';
import WhatEveryonesSaying from '@/components/molecules/WhatEveryoneSaying';
import OptimizedMobileFriendly from '@/components/organisms/OptimizedMobileFriendly';

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
