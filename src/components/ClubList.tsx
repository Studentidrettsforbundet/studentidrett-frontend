import React from 'react'
import { Link } from 'react-router-dom'
import { City, Area } from '../services/MockupDBONS'

type ClubListProps = {
    clubs: Array<string>,
    changeClubFunction?: Function,
}
//onClick = {() => props.changeAreaNameFunction(Club)}

function ClubList(props: ClubListProps): JSX.Element {
    const listClubs = props.clubs.map((Club) =>
        <div className="container">
            <Link to={{ pathname: `/clubs/${Club}`, state: Club }} onClick={() => { if (props.changeClubFunction != null) { props.changeClubFunction(Club) } }} >{Club}</Link>
        </div>
    )
    return (
        <div className="container">
            <ul> {listClubs} </ul>

        </div>
    )
}

export default ClubList;