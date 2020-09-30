import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Club } from '../services/MockupDB';

type ClubListElementProps = {
    club: Club,
}

const ClubListElement = (props: ClubListElementProps) => {
    return (
        <div className="container">
            <Link to={{ pathname: useLocation().pathname + `${props.club.Name}`, state: props.club.Name }} >{props.club.Name}</Link>
        </div>
    )
}

export default ClubListElement;