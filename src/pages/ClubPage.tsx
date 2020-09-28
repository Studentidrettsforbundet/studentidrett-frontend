import React, { useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../components/TeamInfo/TeamInfo';
import '../components/ClubOverview/ClubOverview.css';

const ClubPage = () => {
    const params = useParams() as { clubSlug: string };
    const clubSlug = params.clubSlug;

    const [showInfo, setShowInfo] = useState(false);

    function changeShowInfo(showInfo: boolean) {
        setShowInfo(showInfo);
    }


    const clubInfo = {
        name: `Club 1 with slug: ${clubSlug}`,
        text:
            'Text about club 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales ac lectus vitae vehicula. Phasellus sollicitudin, nisi quis molestie imperdiet, turpis enim eleifend justo, vel feugiat ipsum massa ut leo. Aliquam erat volutpat. Nunc aliquet tempus mauris, ut lacinia ex condimentum vel. Aliquam varius est convallis tortor bibendum, non dapibus tortor vulputate. Fusce malesuada sagittis elementum. Vestibulum bibendum ut diam sit amet consectetur. Suspendisse tincidunt sagittis urna, in consequat tellus mattis quis. In id dictum purus.',
        teams: [
            { name: 'team 1', text: 'Text about team 1', img: 'sunflower' },
            { name: 'team 2', text: 'Text about team 2', img: 'japanese' },
            { name: 'team 3', text: 'Text about team 3', img: 'sunflower' },
        ],
    };

    const listItems = clubInfo.teams.map((team) => (
        <ClubInfo key={team.name} name={team.name} text={team.text} img={team.img} showInfo={changeShowInfo} />
    ));

    return (
        <div className="overview">
            <h1>{clubInfo.name}</h1>
            <p>{clubInfo.text}</p>
            {listItems}
        </div>
    );
};
export default ClubPage;