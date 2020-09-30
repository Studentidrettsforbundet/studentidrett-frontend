import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Club } from '../services/MockupDB';

type ClubListElementProps = {
    club: Club,
}

const ClubListElement = (props: ClubListElementProps) => {
    const uri = useLocation().pathname
    return (
        <div className="container">
            <Link to={{ pathname: uri + `/${props.club.Name}`, state: props.club.Name }} >{props.club.Name}</Link>
        </div>
    )
}

export default ClubListElement;