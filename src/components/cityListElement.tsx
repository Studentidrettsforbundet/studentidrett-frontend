import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MockupDB, { City } from '../services/MockupDB'
import List from './list'

type CityListElementProps = {
    city: City
}

const CityListElement = (props: CityListElementProps) => {
    return (
        <div className="city" key={props.city.Name}>
            <p>{props.city.Name}</p>
            <List key="clubList" listContent={MockupDB.Clubs} />
        </div>
    )
}

export default CityListElement;