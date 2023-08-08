import CommunityHero from '@/components/templates/CommunityHero';
import CommunityLookingForService from '@/components/templates/CommunityLookingForService';
import CommunityQaDocumentation from '@/components/templates/CommunityQaDocumentation';
import SupportForm from '@/components/templates/SupportForm';
import React from 'react';

const community = () => {
	return (
		<div className="container">
			<CommunityHero />
			<CommunityQaDocumentation />
			<SupportForm />
			<CommunityLookingForService />
		</div>
	);
};

export default community;
