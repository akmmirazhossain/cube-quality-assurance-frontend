// import LanguageSelect from '@/components/molecules/LanguageSelect';
// import Link from 'next/link';
// import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

// const translation = () => {
// 	let { t, i18n } = useTranslation();
// 	const isRTL = i18n.dir() === 'rtl';
// 	let name = 'Almamun';
// 	return (
// 		<div className={`container mx-auto h-96 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
// 			<div className="w-32 mx-auto">
// 				<LanguageSelect footer={true} header={true} />
// 			</div>
// 			<h1 className={`text-5xl ${isRTL ? 'text-right' : 'text-left'}`}>
// 				{t('helloMessage', { lang: i18n.language })}
// 			</h1>
// 			<div>Just simple content</div>
// 			<div>
// 				Hello <strong title="this is your name">name</strong>, you have 6 unread message(s).{' '}
// 				<Link href="/msgs">Go to messages</Link>.
// 			</div>
// 			<Trans></Trans>
// 		</div>
// 	);
// };

// export default translation;
