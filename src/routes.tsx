import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import RegionPage from './pages/RegionPage';
import CityPage from './pages/CityPage';
import SportPage from './pages/SportPage';
import ClubPage from './pages/ClubPage';
import GroupPage from './pages/GroupPage';
import store from './store/store';

const createRoutes = () => (
    <Provider store={store}>
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Regions" component={RegionPage} />
                    <Route exact path="/:City" component={CityPage} />
                    <Route exact path="/:City/:Club" component={ClubPage} />
                    <Route exact path="/:City/Sport/:Sport" component={SportPage} />
                    <Route exact path="/:City/:Club/:Group" component={GroupPage} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default createRoutes;
