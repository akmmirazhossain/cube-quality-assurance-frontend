import CommunityFaq from '@/components/templates/CommunityFaq';
import CommunityHero from '@/components/templates/CommunityHero';
import CommunityLookingForService from '@/components/templates/CommunityLookingForService';
import CommunityQaDocumentation from '@/components/templates/CommunityQaDocumentation';
import SupportForm from '@/components/templates/SupportForm';
import TutorialSection from '../components/organisms/TutorialSection';
import Calender from '@/components/molecules/calendar';
import React from 'react';

const Community = () => {
	return (
		<div className="container">
			<CommunityHero />
			<TutorialSection />
			<CommunityQaDocumentation />
			<SupportForm />
			<CommunityLookingForService />
			<Calender />
			<CommunityFaq />
		</div>
	);
};

export default Community;
