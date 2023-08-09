import LanguageSelect from '@/components/molecules/LanguageSelect';
import React from 'react';
import { useTranslation } from 'react-i18next';

const translation = () => {
	let { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === 'rtl';
	return (
		<div className={`container mx-auto h-96 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
			<div className="mx-auto w-32">
				<LanguageSelect footer={true} header={true} />
			</div>
			<h1 className={`text-5xl ${isRTL ? 'text-right' : 'text-left'}`}>
				{t('helloMessage', { lang: i18n.language })}
			</h1>
		</div>
	);
};

export default translation;
