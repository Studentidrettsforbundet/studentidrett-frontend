import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { City } from '../services/MockupDB'

type CityListElementProps = {
    city: City
}

const CityListElement = (props: CityListElementProps) => {
    
    return (
        <div className="city">
            <Link to={{ pathname: useLocation().pathname + `${props.city.Name}`, state: props.city.Name }} >{props.city.Name}</Link>
        </div>
    )
}

export default CityListElement;