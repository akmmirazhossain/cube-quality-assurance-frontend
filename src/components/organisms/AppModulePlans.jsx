import RegularPlan from '../molecules/RegularPlan';
import EnterprisePlan from '../molecules/EnterprisePlan';
import PlanHeader from '../molecules/PlanHeader';

const AppModulePlans = () => {
	return (
		<>
			<PlanHeader />
			<div className="relative">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<RegularPlan />
					<EnterprisePlan />
				</div>
			</div>
		</>
	);
};

export default AppModulePlans;
