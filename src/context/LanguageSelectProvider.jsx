import React, { createContext, useContext } from 'react';
import useLanguageSelect from '@/hooks/useLanguageSelect';

const LanguageSelectContext = createContext();

export const LanguageSelectProvider = ({ children }) => {
	const languageSelectProps = useLanguageSelect();
	return (
		<LanguageSelectContext.Provider value={languageSelectProps}>
			{children}
		</LanguageSelectContext.Provider>
	);
};

export const useLanguageSelectContext = () => useContext(LanguageSelectContext);
