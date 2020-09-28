import React from 'react'
import { Link } from 'react-router-dom'
import { Area } from '../services/MockupDB'

type ComponentProps = {
    Areas: Array<Area>,
    changeAreaNameFunction: Function,
}


function AreaList(props : ComponentProps) {
    const listAreas = props.Areas.map((Area) => (
        <div className="container">
            <Link to='/search' key={Area.Name} onClick={() => props.changeAreaNameFunction(Area)} >{Area.Name}</Link>
        </div>
        ))
    return (
        <div className="container">
            <ul> {listAreas} </ul>

        </div>
    )
}

export default AreaList;