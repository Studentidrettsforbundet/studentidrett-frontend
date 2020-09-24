import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import SearchPage from './pages/SearchPage'
import ClubPage from './pages/ClubPage'
import LocationPage from './pages/LocationPage';
import SportPage from './pages/SportPage';
import TeamPage from './pages/TeamPage';

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Locations" component={LocationPage} />
                <Route exact path="/:Locations" component={SportPage} />
                <Route exact path="/:Locations/:Sports" component={ClubPage} />
                <Route exact path="/:Locations/:Sports/:Clubs" component={TeamPage} />

                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/clubs" component={ClubPage} />
                <Route path="/clubs/:club" component={ClubPage} />
             </Switch>
        </div>
    </Router>
);

export default createRoutes;