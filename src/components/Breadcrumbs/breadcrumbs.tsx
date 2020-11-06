import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { combinedStateInterface } from '../../store/store';
import BackButton from '../BackButton/backButton';
import './style.css';

interface breadcrumbProps {
    state: combinedStateInterface;
}

const Breadcrumbs = (props: breadcrumbProps) => {
    var history = useHistory();
    const params = history.location.pathname.split('/');

    const generateCrumbs = () => {
        const homeButtonClick = () => {
            history.push('/');
        };
        const regionsButtonClick = () => {
            history.push('/regions');
        };
        const cityButtonClick = () => {
            history.push(
                `/cities/${props.state.city.cities.find(({ id: n }) => n === props.state.club.clubs[0].city)?.id}`,
            );
        };
        const sportButtonClick = () => {
            history.push(`/sports/${props.state.sport.sport?.id}`);
        };
        const clubButtonClick = () => {
            history.push(`/clubs/${props.state.club.club?.id}`);
        };
        const groupButtonClick = () => {
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
                            {typeof props.state.sport.sport !== null ? (
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
