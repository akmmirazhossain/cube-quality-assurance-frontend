import RegularPlan from '../molecules/RegularPlan';
import EnterprisePlan from '../molecules/EnterprisePlan';
import PlanHeader from '../molecules/PlanHeader';

const AppModulePlans = () => {
	return (
		<>
			<PlanHeader />
			<div className="relative">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-0">
					<RegularPlan />
					<EnterprisePlan />
				</div>
			</div>
		</>
	);
};

export default AppModulePlans;
