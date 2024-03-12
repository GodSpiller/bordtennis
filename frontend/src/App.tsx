import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Layout } from './components/Layout';
import { SeasonPlanPage } from './pages/SeasonPlanPage';
import { RatingListPage } from './pages/RatingListPage';
import { TeamTournamentPage } from './pages/TeamTournamentPage';
import { ConventionPage } from './pages/ConventionPage';
import { PlayerPage } from './pages/PlayerPage';
import { ClubPage } from './pages/ClubPage';
import { CreateAccountPage } from './pages/CreateAccountPage';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/saeson" element={<SeasonPlanPage />} />
					<Route path="/ratingliste" element={<RatingListPage />} />
					<Route path="/holdturnering" element={<TeamTournamentPage />} />
					<Route path="/stævne" element={<ConventionPage />} />
					<Route path="/spillere" element={<PlayerPage />} />
					<Route path="/klubber" element={<ClubPage />} />
					<Route path="/create_account" element={<CreateAccountPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
