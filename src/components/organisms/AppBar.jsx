import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MenuBar from '../molecules/MenuBar';
import LogoPrimary from '../molecules/LogoPrimary';
import LogoSecondary from '../molecules/LogoSecondary';
import MenuRightAction from '../molecules/MenuRightAction';
const AppBar = () => {
	const router = useRouter();
	return (
		<div className="bg-solitude">
			<div className="mx-auto max-w-[1200px]">
				<div className="grid grid-cols-1 md:grid-cols-2">
					{router.pathname === '/' ? <LogoPrimary /> : <LogoSecondary />}

					<div className="relative h-auto align-middle">
						<div className="flex place-items-center justify-between">
							<MenuBar />
							<MenuRightAction />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppBar;
