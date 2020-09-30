import React from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { Sport } from '../services/MockupDB'

type SportListElementProps = {
    sport: Sport,
}

const SportListElement = (props: SportListElementProps) => {
    return (
        <div className="Sport" key={props.sport.Name} >
            <Link key={props.sport.Name} to={{ pathname: `/${props.sport.Name}`, state: props.sport.Name }} >{props.sport.Name}</Link>
        </div>
    )
}

export default SportListElement;