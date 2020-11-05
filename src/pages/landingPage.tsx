import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import { setSessionIDActionCreator } from '../store/pages/interest/interestActions';
import { style, classes } from 'typestyle';
import colors from '../styles/colors';

const LandingPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (!reduxState.interest.sessionID) {
            dispatch(setSessionIDActionCreator());
        }
    }, []);

    return (
        <div className={frontPage}>
            <div className={wrapper}>
                <p>
                    Norges Studentidrettsforbund har et bredt idrettstilbud rundt i hele Norge gjennom våre
                    studentidrettslag. På denne nettsiden kan du finne hva vi tilbyr i din studieby!
                </p>
                <Link to="/Regions" style={{ color: colors.secondary }} className="btn btn-default">
                    <button type="button" className="btn btn-default">
                        Finn idrett
                    </button>
                </Link>
            </div>
            <div className={wrapper}>
                <p>
                    Usikker på hva du ønsker å drive med på fritiden, eller ønsker du å vite hvilke idretter som kunne
                    passet til deg? Vi har laget en idrettsvalgomat som foreslår idretter vi tenker du kunne likt!
                </p>
                <Link to="/questionnaire" style={{ color: colors.secondary }}>
                    <button type="button" className="btn btn-default">
                        Idrettsvalgomat
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;

const frontPage = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const wrapper = classes(
    frontPage,
    style({
        textAlign: 'center',
        maxWidth: '550px',
        $nest: {
            '&>a>button': {
                marginBottom: '6vh',
                backgroundColor: colors.primary,
                borderColor: colors.primary,
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            },
            '&>a>': {
                textDecoration: 'none',
            },
        },
    }),
);
