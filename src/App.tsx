import React from 'react';
import SearchBar from './components/searchBar';
// Minimum bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { CLUB, REGION } from './constants';

function App() {
    return (
        <div className="App">
            <SearchBar typeOfSearch={CLUB} />
        </div>
    );
}

export default App;
