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
	English,
	Arabic,
	Partners,
	Apple,
	Adobe,
	Mango,
	Oasis,
} from '../../public/images';

import { ImFacebook } from 'react-icons/im';
import {
	BsFillEnvelopeAtFill,
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTelephoneOutboundFill,
	BsTwitter,
	BsWhatsapp,
} from 'react-icons/bs';

export const HEADER_HEIGHT = 300;

export const NavList = [
	{
		id: 1,
		path: '#',
		name: 'App Modules',
		submenu: [
			{ id: 11, path: '/tutorials', name: 'Tutorials' },
			{ id: 12, path: '/who-we-are', name: 'Documentation' },
			{ id: 13, path: '/support-form', name: 'Support form' },
			{ id: 14, path: '/find-a-partner', name: 'Find a partner' },
			{ id: 15, path: '/meet-an-expert', name: 'Meet an expert' },
		],
	},
	{
		id: 2,
		path: '#',
		name: 'Community',
		submenu: [
			{ id: 21, path: '/tutorials', name: 'Tutorials' },
			{ id: 22, path: '/who-we-are', name: 'Documentation' },
			{ id: 23, path: '/support-form', name: 'Support form' },
			{ id: 24, path: '/find-a-partner', name: 'Find a partner' },
			{ id: 25, path: '/meet-an-expert', name: 'Meet an expert' },
		],
	},
	{ id: 3, path: '/about-us', name: 'About Us' },
	{
		id: 4,
		path: '#',
		name: 'Contact',
		submenu: [
			{ id: 41, path: '/tutorials', name: 'Tutorials' },
			{ id: 42, path: '/who-we-are', name: 'Documentation' },
			{ id: 43, path: '/support-form', name: 'Support form' },
			{ id: 44, path: '/find-a-partner', name: 'Find a partner' },
			{ id: 45, path: '/meet-an-expert', name: 'Meet an expert' },
		],
	},
];
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

export const LanguageList = [
	{
		id: 1,
		title: 'English',
		icon: English,
	},
	{
		id: 2,
		title: 'Arabic',
		icon: Arabic,
	},
];

export const FooterAboutUsNavLinklist = [
	{
		id: 1,
		title: 'Our Company',
		href: '#',
	},
	{
		id: 2,
		title: 'Contact us',
		href: '#',
	},
	{
		id: 3,
		title: 'Careers',
		href: '#',
	},
	{
		id: 4,
		title: 'Testimonials',
		href: '#',
	},
	{
		id: 5,
		title: 'Legal',
		href: '#',
	},
];

export const FooterSocialList = [
	{
		id: 1,
		title: 'Facebook',
		href: '#',
		icon: <ImFacebook />,
	},
	{
		id: 2,
		title: 'Twitter',
		href: '#',
		icon: <BsTwitter />,
	},
	{
		id: 3,
		title: 'LinkedIn',
		href: '#',
		icon: <BsLinkedin />,
	},
	{
		id: 4,
		title: 'GitHub',
		href: '#',
		icon: <BsGithub />,
	},
	{
		id: 5,
		title: 'Instagram',
		href: '#',
		icon: <BsInstagram />,
	},
	{
		id: 6,
		title: 'Email',
		href: '#',
		icon: <BsFillEnvelopeAtFill />,
	},
	{
		id: 7,
		title: 'Phone',
		href: '#',
		icon: <BsTelephoneOutboundFill />,
	},
	{
		id: 8,
		title: 'WhatsApp',
		href: '#',
		icon: <BsWhatsapp />,
	},
];
export const PartnersList = [
	{
		id: 1,
		title: 'Partner',
		icon: Partners,
	},
	{
		id: 2,
		title: 'Apple',
		icon: Apple,
	},
	{
		id: 3,
		title: 'Adobe',
		icon: Adobe,
	},
	{
		id: 4,
		title: 'Mango',
		icon: Mango,
	},
	{
		id: 5,
		title: 'Oasis',
		icon: Oasis,
	},
];

export const WhatEveryonesSayingList = [
	{
		id: 1,
		quote:
			'The team prioritised our company’s needs and provided us with exactly the right product enhancemenmts that we needed.',
		identity: 'Jay Chase, Founder <br/>@The Freelancing Institution',
	},
	{
		id: 2,
		quote:
			'The team prioritised our company’s needs and provided us with exactly the right product enhancemenmts that we needed.',
		identity: 'Jay Chase, Founder <br/> @The Freelancing Institution',
	},
	{
		id: 3,
		quote:
			'The team prioritised our company’s needs and provided us with exactly the right product enhancemenmts that we needed.',
		identity: 'Jay Chase, Founder <br/> @The Freelancing Institution',
	},
];
