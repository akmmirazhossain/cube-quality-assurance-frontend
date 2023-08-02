import AppBar from '@/components/organisms/AppBar';
import Footer from '@/components/templates/Footer';

const Layout = ({ children = null }) => {
	return (
		<>
			<AppBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
