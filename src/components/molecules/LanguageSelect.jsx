import Image from 'next/image';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { LanguageList } from '@/constants/constants';

const LanguageSelect = ({ footer = false, header = false }) => {
	let { i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(LanguageList[0]);
	const [isListOpen, setIsListOpen] = useState(false);

	// const handleLanguageChange = async (event, language) => {
	// 	event.stopPropagation();
	// 	setSelectedLanguage(language);
	// 	setIsListOpen(false);
	// 	await i18n.changeLanguage(language.slug);
	// 	document.documentElement.dir = i18n.dir(i18n.language);
	// 	localStorage.setItem('language', i18n.language);
	// };

	useEffect(() => {
		let ActiveLanguage = LanguageList.filter((item) => item.slug === i18n.language);
		setSelectedLanguage(ActiveLanguage[0]);
		console.log('rendering');
	}, []);

	const handleSelectClick = () => {
		setIsListOpen(!isListOpen);
	};

	return (
		<div className="relative inline-block w-full" onClick={handleSelectClick}>
			<div className="relative">
				{footer || header ? (
					<span
						className={`block w-full cursor-pointer rounded py-3 pr-8 leading-tight ${
							header ? 'text-secondary' : 'text-white'
						}`}
					>
						<span className="flex items-center gap-2">
							<Image
								src={selectedLanguage.icon}
								alt={selectedLanguage.title}
								className="mr-2 h-6 w-6"
							/>
							{selectedLanguage.title}
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="h-4 w-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</span>
				) : (
					<span className="flex cursor-pointer place-items-center justify-center rounded align-middle leading-tight text-white">
						<div className="flex place-items-center justify-center align-middle">
							<span className="flex place-items-center items-center">
								<Image
									src={selectedLanguage.icon}
									alt={selectedLanguage.title}
									className="h-6 w-6"
								/>
							</span>

							<span className="pointer-events-none relative inset-y-0 flex items-center px-2 text-xl text-primary">
								<BiSolidDownArrow />
							</span>
						</div>
					</span>
				)}
			</div>
			{/* {isListOpen && (
				<ul
					className={`absolute left-0 z-10 mt-2 place-content-center rounded-lg border  text-black  ${
						footer || header ? 'w-full border-gray-300 bg-white shadow-md' : ''
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					{LanguageList.map((language) => (
						<li
							key={language.id}
							className="px-2 py-2 cursor-pointer hover:rounded-lg hover:bg-gray-100"
							onClick={(e) => handleLanguageChange(e, language)}
						>
							<span className="flex items-center gap-2">
								<Image src={language.icon} alt={language.title} className="w-6 h-6 mr-2" />
								{(footer || header) && language.title}
							</span>
						</li>
					))}
				</ul>
			)} */}
		</div>
	);
};

export default LanguageSelect;
