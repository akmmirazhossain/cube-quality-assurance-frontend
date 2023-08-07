import FullyIntegratedQaApps from '@/components/organisms/FullyIntegratedQaApps';
import OptimizedMobileFriendly from '@/components/organisms/OptimizedMobileFriendly';
import InspectionModuleHero from '@/components/templates/InspectionModuleHero';
import InspectionModuleTheme from '@/components/templates/InspectionModuleTheme';

const InspectionManagerModule = () => {
	return (
		<div className="container">
			<InspectionModuleHero />
			<InspectionModuleTheme />
			<OptimizedMobileFriendly />
			<FullyIntegratedQaApps />
		</div>
	);
};

export default InspectionManagerModule;
