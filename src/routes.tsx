import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import ClubPage from './pages/clubPage';
import RegionPage from './pages/regionPage';
import SportPage from './pages/sportPage';
import CityPage from './pages/cityPage';

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Regions" component={RegionPage} />
                <Route exact path="/:Regions" component={SportPage} />
                <Route exact path="/:Regions/:Sports" component={CityPage} />
                <Route exact path="/:Regions/:Sports/:clubSlug" component={ClubPage} />                   
            </Switch>
        </div>
    </Router>
);

export default createRoutes;
