import i18n from '@/i18n/config';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const isRTL = () => i18n.dir() === 'rtl';
