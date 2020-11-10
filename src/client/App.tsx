//@ts-nocheck
//library imports
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//component imports
import Home from "././views/Home";
import DM from "././views/DM";
import Player from "/./views/Player";
import Login from "././views/Login";
import Role from "././views/Role";
import RegisterDM from "././views/RegisterDM";
import RegisterPlayer from "././views/RegisterPlayer";
import PrivateRoute from "./components/PrivateRoute";
import Discussion from "./views/Discussion";
import ListPlayers from "./views/ListPlayers";
import Profile from "./views/Profile";
import UploadDiscussion from "./views/UploadDiscussion";


const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
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
