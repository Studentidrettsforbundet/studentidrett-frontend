import React from 'react'
import { Link } from 'react-router-dom'
import { Location } from '../services/MockupDB'

type ComponentProps = {
    listContent: Array<Location>,
}


function LocationContent(props: ComponentProps) {
    const listLocations = props.listContent.map((Location) => (
        <div className="Location">
            <Link to={{ pathname: `/${Location.Name}`, state: Location.Name }} key={Location.Name}>{Location.Name}</Link>
        </div>
    ))
    return (
        <div className="Locations">
            <ul> {listLocations} </ul>

        </div>
    )
}

export default LocationContent;