import React from 'react';

const FlyMenu = () => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="group relative">
				<button className="rounded-lg bg-blue-500 px-4 py-2 text-white">Menu</button>
				<ul className="absolute right-0 mt-2 hidden w-40 rounded-lg bg-white p-2 shadow-lg group-hover:block">
					<li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Option 1</li>
					<li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Option 2</li>
					<li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Option 3</li>
					<li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Option 4</li>
				</ul>
			</div>
		</div>
	);
};

export default FlyMenu;
