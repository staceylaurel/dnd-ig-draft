//library imports
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component imports
import Home from './views/entry/Home';
import DM from './views/entry/DM';
import Player from './views/entry/Player';
import Login from './views/entry/Login';
import Role from './views/entry/Role';
import RegisterDM from './views/entry/RegisterDM';
import RegisterPlayer from './views/entry/RegisterPlayer';
import PrivateRoute from './utils/PrivateRoute';
import Discussion from './views/Discussion';
import ListPlayers from './views/ListPlayers';
import Profile from './views/Profile';
import UploadDiscussion from './views/UploadDiscussion';

const App: React.FC<AppProps> = props => {
	return (
		<BrowserRouter>
			{/* <NavBar /> */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/DM">
					<DM />
				</Route>
				<Route exact path="/Player">
					<Player />
				</Route>
				<Route exact path="/Role">
					<Role />
				</Route>
				<Route exact path="/registerDM">
					<RegisterDM />
				</Route>
				<Route exact path="/registerPlayer">
					<RegisterPlayer />
				</Route>
				<PrivateRoute exact path="/Discussion">
					<Discussion />
				</PrivateRoute>
				<PrivateRoute exact path="/ListPlayers">
					<ListPlayers />
				</PrivateRoute>
				<PrivateRoute exact path="/Profile">
					<Profile />
				</PrivateRoute>
				<PrivateRoute exact path="/UploadDiscussion">
					<UploadDiscussion />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
