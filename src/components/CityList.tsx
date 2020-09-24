import React from 'react'
import { Link } from 'react-router-dom'
import { City, Area } from '../services/MockupDB'
import ClubList from './ClubList'

type CityListProps = {
    cities: Array<City>,
}
//onClick = {() => props.changeAreaNameFunction(Club)}

function CityList(props: CityListProps): JSX.Element {
    const listClubs = props.cities.map((City) =>
        <div className="container">
            <p>{City.Name}</p>
            <ClubList key="clubList" clubs={City.Clubs} />
        </div>
    )
    return (
        <div className="container">
            <ul> {listClubs} </ul>

        </div>
    )
}

export default CityList;