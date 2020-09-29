import React from 'react'
import { Link } from 'react-router-dom'
import { Region } from '../services/MockupDB'

type ComponentProps = {
    listContent: Array<Region>,
}


function RegionContent(props: ComponentProps) {
    const listLocations = props.listContent.map((Location) => (
        <div className="Region">
            <Link to={{ pathname: `${Location.Name}`, state: Location.Name }} key={Location.Name}>{Location.Name}</Link>
        </div>
    ))
    return (
        <div className="Locations">
            <ul> {listLocations} </ul>

        </div>
    )
}

export default RegionContent;