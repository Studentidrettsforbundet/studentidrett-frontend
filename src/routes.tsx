import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import LocationsPage from './pages/LocationsPage'
import SportsPage from './pages/SportsPage'

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Locations" component={LocationsPage} />
                <Route exact path="/:Locations" component={SportsPage} />
             </Switch>
        </div>
    </Router>
);

export default createRoutes;
