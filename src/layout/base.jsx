import AppBar from '@/components/organisms/AppBar';
import Footer from '@/components/templates/Footer';
import { AiFillMessage } from 'react-icons/ai';

const Layout = ({ children = null }) => {
	return (
		<>
			<AppBar />
			{children}
			<div className="container">
				<div className="relative h-full w-full">
					<div className="fixed bottom-2 right-0 z-50 h-[49px] w-[49px] rounded-full bg-eminence">
						<div className="flex place-items-center justify-center p-2">
							<AiFillMessage className="h-full w-full text-white" />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Layout;
