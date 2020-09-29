import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import SearchPage from './pages/SearchPage'
import ClubPage from './pages/ClubPage'
import RegionPage from './pages/RegionPage';
import SportPage from './pages/SportPage';
import CityPage from './pages/CityPage';


const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Regions" component={RegionPage} />
                <Route exact path="/:Regions" component={SportPage} />
                <Route exact path="/:Regions/:Sports" component={CityPage} />
                <Route exact path="/:Regions/:Sports/:clubSlug" component={ClubPage} />

                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/clubs" component={ClubPage} />
                   
            </Switch>
        </div>
    </Router>
);

export default createRoutes;
