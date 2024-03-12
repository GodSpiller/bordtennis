import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { links } from '../constants';

export function Layout() {
	return (
		<div>
			<Navbar links={links} />
			<div className="m-7">
				<Outlet />
			</div>
		</div>
	);
}
