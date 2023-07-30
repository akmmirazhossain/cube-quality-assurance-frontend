import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import '../i18n/config';
import '../styles/global.css';
import Layout from '../layout/base';

const App = ({ Component, pageProps }) => {
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('language'));
	}, [i18n]);

	if (Component.getLayout) {
		return Component.getLayout(
			<>
				<Component {...pageProps} />
			</>,
		);
	}

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
