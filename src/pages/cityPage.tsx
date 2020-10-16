import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/clubCard';
import SportCard from '../components/sportCard';
import { CLUB, SPORT } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';


/* TODO 
 * combine sportpage and clubpage into this page.
 * Sportcards should link to "/:City/Sport/:Sport"
 * ClubCards should link to "/:City/:Club"
 */
interface urlParams {
    city: string;
}

const CityPage = () => {
    const [showClubs, setshowClubs] = useState(true);
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const urlParams = useParams<urlParams>();

    const toggleshowClubs = (clubs: boolean) => {
        setshowClubs(clubs);
    };

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(CLUB));
            dispatch(fetchDataThunk(SPORT));
        }
      });

    const listSportContent = reduxState.sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name });
    });

    const listClubContent = reduxState.club.clubs.map((entry) => {
        return ClubCard({
            id: entry.id,
            city: entry.city,
            name: entry.name,
            description: entry.description,
            contact_email: entry.contact_email,
            pricing: entry.pricing,
            register_info: entry.register_info,
        });
    });

    return (
        <div>
            <h1>{urlParams.city}</h1>
            <div className="Tabs">
                <button onClick={() => toggleshowClubs(true)}>Clubs</button>
                <button onClick={() => toggleshowClubs(false)}>Sports</button>
            </div>
            {showClubs ? (
                    <div className="container" >
                        <p>Viser klubber i {urlParams.city}:</p>
                        {listClubContent}
                    </div>
                ) : (
                    <div className="container">
                        <p>Viser sporter i {urlParams.city}: </p>
                        {listSportContent}
                    </div>
                    )
            }
        </div>
    );
};

export default CityPage;
