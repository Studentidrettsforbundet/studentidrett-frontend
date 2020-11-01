import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import RegionPage from './pages/regionPage';
import CityPage from './pages/cityPage';
import SportPage from './pages/sportPage';
import ClubPage from './pages/clubPage';
import GroupPage from './pages/groupPage';
import QuestionnairePage from './pages/questionnairePage';
import ResultPage from './pages/resultPage';
import LandingPage from './pages/landingPage';
import SearchResults from './pages/searchResults';
import TeamPage from './pages/teamPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/questionnaire" component={QuestionnairePage} />
        <Route exact path="/questionnaire/result" component={ResultPage} />
        <Route path="/regions" component={RegionPage} />
        <Route path="/cities/:id" component={CityPage} />
        <Route path="/clubs/:id" component={ClubPage} />
        <Route path="/sports/:id" component={SportPage} />
        <Route path="/groups/:id" component={GroupPage} />
        <Route path="/teams/:id" component={TeamPage} />
        <Route path="/search" component={SearchResults} />
    </Switch>
);

export default Routes;
