import React from 'react'
import { Link } from 'react-router-dom'
import LocationContent from './LocationContent'
import SportsContent from './SportsContent'

type ComponentProps = {
    listContent: Array<any>,
    type: String,
}


function List(props: ComponentProps) {
    if (props.type == "Location") {
        var listContent = LocationContent(props);
    } else {
        var listContent = SportsContent(props);
    }
    
    return (
        <div className="container">
            <ul> {listContent} </ul>

        </div>
        )

}

export default List;