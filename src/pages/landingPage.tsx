import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="Landing">
            <h1>Kundestyrt</h1>
            <div className="col">
                <button type="button" className="btn btn-primary">
                    <Link to="/Regions" style={{ color: 'black' }}>
                        Regions
                    </Link>
                </button>
                <button type="button" className="btn btn-primary">
                    <Link to="/questionnaire" style={{ color: 'black' }}>
                        Questionnaire
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
