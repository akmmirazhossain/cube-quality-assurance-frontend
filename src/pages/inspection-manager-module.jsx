import FullyIntegratedQaApps from '@/components/organisms/FullyIntegratedQaApps';
import InspectionModuleHero from '@/components/templates/InspectionModuleHero';
import InspectionModuleTheme from '@/components/templates/InspectionModuleTheme';
import React from 'react';

const InspectionManagerModule = () => {
	return (
		<>
			<InspectionModuleHero />
			<InspectionModuleTheme />
			<FullyIntegratedQaApps />
		</>
	);
};

export default InspectionManagerModule;
