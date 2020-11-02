import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="Landing">
            <div className="col">
                <button type="button" className="btn btn-primary">
                    <Link to="/Regions" style={{ color: 'black' }}>
                        Regioner
                    </Link>
                </button>
                <button type="button" className="btn btn-primary">
                    <Link to="/questionnaire" style={{ color: 'black' }}>
                        Idrettsvalgomat
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
