import React from 'react'
import { getAllEvents } from '../../dummy-data'
import FeaturedEventList from '../../components/events/FeaturedEventsList'
import EventsSearch from '../../components/events/events-search'

const EventsPage = () => {
    const events = getAllEvents()

    return (
        <div>
        <EventsSearch />
            <FeaturedEventList featuredEvents={events} />
        </div>
    )
}

export default EventsPage
