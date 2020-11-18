import React from 'react';
import { useHistory } from 'react-router-dom';
import { combinedStateInterface } from '../../store/store';
import './style.css';
import { useDispatch } from 'react-redux';
import { toggleSearchBarActionCreator } from '../../store/searchBar/searchBarActions';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';

interface breadcrumbProps {
    state: combinedStateInterface;
}

const Breadcrumbs = (props: breadcrumbProps): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = history.location.pathname.split('/');

    const generateCrumbs = () => {
        const homeButtonClick = () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
            history.push('/');
        };
        const regionsButtonClick = () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
            history.push('/regions');
        };
        const cityButtonClick = () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
            history.push(
                `/cities/${props.state.city.cities.find(({ id: n }) => n === props.state.club.clubs[0].city)?.id}`,
            );
        };
        const clubButtonClick = () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
            history.push(`/clubs/${props.state.club.club?.id}`);
        };
        const groupButtonClick = () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
            history.push(`/groups/${props.state.group.group?.id}`);
        };

        if (params.length > 1) {
            switch (params[1].toLowerCase()) {
                case 'regions':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item active"> Regioner </li>
                        </>
                    );

                case 'cities':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item" onClick={regionsButtonClick}>
                                {' '}
                                Regioner{' '}
                            </li>
                            {typeof props.state.city.cities !== 'undefined' ? (
                                <li className="breadcrumb-item active">
                                    {' '}
                                    {props.state.city.cities.find(({ id: n }) => n.toString() === params[2])?.name}
                                </li>
                            ) : (
                                <></>
                            )}
                        </>
                    );

                case 'sports':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item" onClick={regionsButtonClick}>
                                {' '}
                                Regioner{' '}
                            </li>
                            {typeof props.state.city.cities !== 'undefined' ? (
                                <li className="breadcrumb-item" onClick={cityButtonClick}>
                                    {' '}
                                    {
                                        props.state.city.cities.find(
                                            ({ id: n }) => n === props.state.club.clubs[0].city,
                                        )?.name
                                    }{' '}
                                </li>
                            ) : (
                                <></>
                            )}
                            {props.state.sport.sport !== null ? (
                                <li className="breadcrumb-item active"> {props.state.sport.sport?.name} </li>
                            ) : (
                                <></>
                            )}
                        </>
                    );

                case 'clubs':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item" onClick={regionsButtonClick}>
                                {' '}
                                Regioner{' '}
                            </li>
                            {typeof props.state.club.club?.id !== 'undefined' &&
                            props.state.city.cities.length !== 0 ? (
                                <li className="breadcrumb-item" onClick={cityButtonClick}>
                                    {
                                        props.state.city.cities.find(({ id: n }) => n === props.state.club.club?.city)
                                            ?.name
                                    }
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.club.club?.id !== 'undefined' ? (
                                <li className="breadcrumb-item active"> {props.state.club.club.name} </li>
                            ) : (
                                <></>
                            )}
                        </>
                    );

                case 'groups':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item" onClick={regionsButtonClick}>
                                {' '}
                                Regioner{' '}
                            </li>
                            {typeof props.state.club.club?.id !== 'undefined' &&
                            props.state.city.cities.length !== 0 ? (
                                <li className="breadcrumb-item" onClick={cityButtonClick}>
                                    {
                                        props.state.city.cities.find(({ id: n }) => n === props.state.club.club?.city)
                                            ?.name
                                    }
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.club.club?.id !== 'undefined' ? (
                                <li className="breadcrumb-item" onClick={clubButtonClick}>
                                    {' '}
                                    {props.state.club.club.name}{' '}
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.group !== 'undefined' ? (
                                <li className="breadcrumb-item active"> {props.state.group.group?.name}</li>
                            ) : (
                                <></>
                            )}
                        </>
                    );

                case 'teams':
                    return (
                        <>
                            <li className="breadcrumb-item" onClick={homeButtonClick}>
                                {' '}
                                Forside{' '}
                            </li>
                            <li className="breadcrumb-item" onClick={regionsButtonClick}>
                                {' '}
                                Regioner{' '}
                            </li>
                            {typeof props.state.club.club?.id !== 'undefined' &&
                            props.state.city.cities.length !== 0 ? (
                                <li className="breadcrumb-item" onClick={cityButtonClick}>
                                    {
                                        props.state.city.cities.find(({ id: n }) => n === props.state.club.club?.city)
                                            ?.name
                                    }
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.club.club?.id !== 'undefined' ? (
                                <li className="breadcrumb-item" onClick={clubButtonClick}>
                                    {' '}
                                    {props.state.club.club.name}{' '}
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.group !== 'undefined' ? (
                                <li className="breadcrumb-item" onClick={groupButtonClick}>
                                    {' '}
                                    {props.state.group.group?.name}
                                </li>
                            ) : (
                                <></>
                            )}
                            {typeof props.state.team !== 'undefined' ? (
                                <li className="breadcrumb-item active"> {props.state.team.team?.name}</li>
                            ) : (
                                <></>
                            )}
                        </>
                    );
            }
        }
    };

    const breadcrumbs = generateCrumbs();

    return (
        <div className="row">
            <ol className="breadcrumb" key="breadcrumbs">
                {breadcrumbs}
            </ol>
        </div>
    );
};

export default Breadcrumbs;
