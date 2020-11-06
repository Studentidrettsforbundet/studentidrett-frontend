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
    }, [dispatch, reduxState.interest.sessionID]);

    return (
        <div className={frontPage}>
            <div className={wrapper}>
                <h2>Utforsk muligheter</h2>
                <p>
                    Norges Studentidrettsforbund har et bredt spekter av idrettstilbud rundt om i hele Norge gjennom våre
                    studentidrettslag. Her kan du finne hvilke idretter vi tilbyr i din studieby!
                </p>
                <Link to="/Regions"  className="btn btn-default">
                    <button type="button" className="btn btn-default">
                        Utforsk
                    </button>
                </Link>
            </div>
            <div className={wrapper}>
                <h2>Idrettsvalgomat</h2>
                <p>
                    Er du usikker på hva du ønsker å drive med på fritiden, eller ønsker du å vite hvilke idretter som kunne
                    passet til deg? Vi har laget en idrettsvalgomat som foreslår idretter vi tenker du kunne likt!
                </p>
                <Link to="/questionnaire" >
                    <button type="button" className="btn btn-default">
                        Ta valgomaten
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
                color: colors.secondary
            },
            '&>a>': {
                textDecoration: 'none',
            },
        },
    }),
);
