import React from 'react';
import MenuBar from '../molecules/MenuBar';

const Logo = () => {
	return (
		<div className="relative z-50 mx-auto px-6 md:container">
			<img src="logo.png" alt="My Logo" className="h-24 w-24" />
		</div>
	);
};

export default Logo;
