import {
	AddonsIcon,
	CompanyAdminIcon,
	DistributorIcon,
	FinanceIcon,
	InspectionManagerIcon,
	InspectorsIcon,
	InspectorMobileAppIcon,
	LegalIcon,
	SupervisorIcon,
} from '../../public/images';

export const HEADER_HEIGHT = 300;

export const AppModuleList = [
	{
		id: 1,
		title: 'Company Admin',
		content: 'For managing the administrative role for a company and view reports',
		icon: CompanyAdminIcon,
	},
	{
		id: 2,
		title: 'Inspection Manager',
		content: `Manages the supervisors and authorizes the recommended action on the inspection results`,
		icon: InspectionManagerIcon,
	},
	{
		id: 3,
		title: 'Supervisor',
		content: `Manages the inspection
		and recommends
		actions based on the  
		inspection results`,
		icon: SupervisorIcon,
	},
	{
		id: 4,
		title: 'Inspector',
		content: `Fills up inspection forms
		by physically visiting 
		the distributors or
		the inspected entity`,
		icon: InspectorsIcon,
	},
	{
		id: 5,
		title: 'Finance',
		content: `Carry-outs the 
		authorized fines by the  
		inspection manager`,
		icon: FinanceIcon,
	},
	{
		id: 6,
		title: 'Adds-on',
		content: '(Optional Addons)',
		icon: AddonsIcon,
	},
	{
		id: 7,
		title: 'Leagal',
		content: `Views the carried out 
		actions against the
		inspected entities
		(Distributors) and looks
		out for legal obligations`,
		icon: LegalIcon,
	},
	{
		id: 8,
		title: 'Distributor',
		content: `Fills up inspection forms
			by physically visiting 
			the distributors or
			the inspected entity`,
		icon: DistributorIcon,
	},
	{
		id: 9,
		title: 'Inspector Mobile App',
		content: `Manage weekly
		inspection plan and carry 
		out inspection off-line`,
		icon: InspectorMobileAppIcon,
	},
];
