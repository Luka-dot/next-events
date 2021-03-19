import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-data'
import FeaturedEventList from '../../components/events/FeaturedEventsList'
import EventsSearch from '../../components/events/events-search'

const EventsPage = () => {
    const router = useRouter()
    const events = getAllEvents()

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <FeaturedEventList featuredEvents={events} />
        </Fragment>
    )
}

export default EventsPage
