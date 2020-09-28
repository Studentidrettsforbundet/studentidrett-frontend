import React from 'react'
import { Link } from 'react-router-dom'
import { Sport } from '../services/MockupDB'

type ComponentProps = {
    listContent: Array<Sport>,
}


function SportsContent(props: ComponentProps) {
    const listSports = props.listContent.map((Sport) => (
        <div className="Sport">
            <Link to={{ pathname: window.location.pathname + `/${Sport.Name}`, state: Sport.Name }} key={Sport.Name} >{Sport.Name}</Link>
        </div>
    ))
    return (
        <div className="Sports">
            <ul> {listSports} </ul>

        </div>
    )
}

export default SportsContent;