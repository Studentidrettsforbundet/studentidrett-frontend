import React from 'react';
import { Link } from 'react-router-dom';
import './styles/global.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <h1>Hello</h1>
            <div className="col">
                <button type="button" className="btn btn-primary">
                    <Link to="/Regions" style={{ color: 'black' }}>
                        Regions
                    </Link>
                </button>
                <button type="button" className="btn btn-primary">
                    <Link to="/questionnaire" style={{ color: 'black' }}>
                        questionnaire
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default App;
