import InspectionModuleHero from '@/components/templates/InspectionModuleHero';
import InspectionModuleTheme from '@/components/templates/InspectionModuleTheme';
import OptimizedMobileFriendly from '@/components/organisms/OptimizedMobileFriendly';
import FullyIntegratedQaApps from '@/components/organisms/FullyIntegratedQaApps';
import React from 'react';

const InspectionManagerModule = () => {
	return (
		<>
			<InspectionModuleHero />
			<InspectionModuleTheme />
			<OptimizedMobileFriendly />
			<FullyIntegratedQaApps />
		</>
	);
};

export default InspectionManagerModule;
