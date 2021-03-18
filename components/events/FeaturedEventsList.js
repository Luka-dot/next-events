import React from 'react'
import FeaturedEventsItem from './FeaturedEventsItem'
import classes from './event-list.module.css'

const FeaturedEventsList = ({ featuredEvents }) => {
    return (
        <ul className={classes.list}>
            {featuredEvents.map((event) => <FeaturedEventsItem event={event}/>)}
        </ul>
    )
}

export default FeaturedEventsList
