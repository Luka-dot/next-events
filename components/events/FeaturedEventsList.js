import React from 'react'
import FeaturedEventsItem from './FeaturedEventsItem'

const FeaturedEventsList = ({ featuredEvents }) => {
    return (
        <div>
            <ul>
                {featuredEvents.map((event) => <FeaturedEventsItem event={event}/>)}
            </ul>
        </div>
    )
}

export default FeaturedEventsList
