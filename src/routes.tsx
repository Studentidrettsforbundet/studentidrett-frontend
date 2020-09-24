import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import ClubPage from './pages/ClubPage';
import LocationsPage from './pages/LocationsPage';
import SportsPage from './pages/SportsPage';
import TeamPage from './pages/TeamPage';

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Locations" component={LocationsPage} />
                <Route exact path="/:Locations" component={SportsPage} />
                <Route exact path="/:Locations/:Sports" component={ClubPage} />
                <Route exact path="/:Locations/:Sports/:Clubs" component={TeamPage} />
            </Switch>
        </div>
    </Router>
);

export default createRoutes;
