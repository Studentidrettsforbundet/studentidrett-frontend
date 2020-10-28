import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import RegionPage from './pages/regionPage';
import CityPage from './pages/cityPage';
import SportPage from './pages/sportPage';
import ClubPage from './pages/clubPage';
import GroupPage from './pages/groupPage';
import QuestionnairePage from './pages/questionnairePage';
import ResultPage from './pages/resultPage';
import store from './store/store';
import SearchResults from './pages/searchResults';

const createRoutes = () => (
    <Provider store={store}>
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/questionnaire" component={QuestionnairePage} />
                    <Route path="/questionnaire/result" component={ResultPage} />
                    <Route path="/regions" component={RegionPage} />
                    <Route path="/cities/:id" component={CityPage} />
                    <Route path="/clubs/:id" component={ClubPage} />
                    <Route path="/sports/:id" component={SportPage} />
                    <Route path="/groups/:id" component={GroupPage} />
                    <Route path="/search" component={SearchResults} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default createRoutes;
