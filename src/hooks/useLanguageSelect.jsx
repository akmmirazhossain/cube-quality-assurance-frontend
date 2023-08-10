import { LanguageList } from '@/constants/constants';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguageSelect = () => {
	let { i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(LanguageList[0]);
	const [isListOpen, setIsListOpen] = useState(false);

	const handleLanguageChange = async (event, language) => {
		event.stopPropagation();
		setSelectedLanguage(language);
		setIsListOpen(false);
		await i18n.changeLanguage(language.slug);
		document.documentElement.dir = i18n.dir(i18n.language);
		localStorage.setItem('language', i18n.language);
	};

	useEffect(() => {
		let ActiveLanguage = LanguageList.filter((item) => item.slug === i18n.language);
		setSelectedLanguage(ActiveLanguage[0]);
		console.log('rendering');
	}, []);

	const handleSelectClick = () => {
		setIsListOpen(!isListOpen);
	};
	return { selectedLanguage, isListOpen, LanguageList, handleLanguageChange, handleSelectClick };
};

export default useLanguageSelect;
