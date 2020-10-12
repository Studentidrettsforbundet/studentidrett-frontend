import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import RegionPage from './pages/regionPage';
import CityPage from './pages/cityPage';
import SportPage from './pages/SportPage';
import ClubPage from './pages/clubPage';
import GroupPage from './pages/groupPage';
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
                    <Route exact path="/:City/:Sport" component={SportPage} />
                    <Route exact path="/:City/:Club/:Group" component={GroupPage} />
                    {/*>}<Route exact path="/:Regions/:Sports" component={CityPage}{*/}
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default createRoutes;
