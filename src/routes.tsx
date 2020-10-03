import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import CityPage from './pages/cityPage';
import ClubPage from './pages/clubPage';
import RegionPage from './pages/regionPage';
import SportPage from './pages/sportPage';
import TeamPage from './pages/teamPage';
import store from './store/store';

const createRoutes = () => (
    <Provider store={store}>
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Regions" component={RegionPage} />
                    <Route exact path="/:Regions" component={SportPage} />
                    <Route exact path="/:Regions/:Sports" component={ClubPage} />
                    <Route exact path="/:Regions/:Sports/:Team" component={TeamPage} />
                    {/*>}<Route exact path="/:Regions/:Sports" component={CityPage}
                    <Route exact path="/:Regions/:Sports/:clubSlug" component={ClubPage} />
                     {*/}
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default createRoutes;
