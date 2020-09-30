import React from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { Region } from '../services/MockupDB'

export type RegionListElementProps = {
    region: Region,
}

const RegionListElement = (props: RegionListElementProps) => {
    return (
        <div className="Region" key={props.region.Name} >
            <Link to={{ pathname: `/${props.region.Name}`, state: props.region.Name }}>{props.region.Name}</Link>
        </div>
     )
}

export default RegionListElement;