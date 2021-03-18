import React from 'react'
import Link from 'next/link'

import classes from './event-item.module.css'

const FeaturedEventsItem = (props) => {
    const { title, image, date, location, id } = props.event

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formatedAddrress = location.replace(', ', '\n')

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item} key={id}>
        <img src={'/' + image} alt={title} />
        <div>
            <h2>{title}</h2>
            <div>
                <time>{humanReadableDate}</time>
            </div>
            <div>
                <address>{formatedAddrress}</address>
            </div>
        </div>
        <div>
            <Link href={exploreLink}>Explore Event</Link>
        </div>
        </li>
    )
}

export default FeaturedEventsItem
