import React from 'react';

import EnterpriseHero from '@/components/templates/EnterpriseHero';
import BuildAwesomeCampaingns from '@/components/templates/BuildAwesomeCampaingns';
import RequestForm from '@/components/organisms/RequestForm';

const enterprise = () => {
	return (
		<div className="container relative">
			<EnterpriseHero />
			<BuildAwesomeCampaingns />
			<RequestForm />
		</div>
	);
};

export default enterprise;
