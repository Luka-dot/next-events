import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import FeaturedEventsList from '../../components/events/FeaturedEventsList'
import ResultTitle from '../../components/events/results-title/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

const EventsPageFiltered = () => {
    const router = useRouter()

    const filteredData = router.query.slug

    if (!filteredData) {
        return <p className='center'>Loading...</p>
    }

    const year = filteredData[0]
    const month = filteredData[1]
    const numYear = +year
    const numMonth = +month

    if (isNaN(numYear) || isNaN(numMonth)) {
        return (
            <Fragment >
                <div className='center'>
                    <ErrorAlert><p className='center'>Invalid filter, please adjust values</p></ErrorAlert>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        ) 
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    console.log(filteredEvents)

    if (filteredEvents.length === 0 || !filteredEvents) {
        return (
            <Fragment >
                <div className='center'>
                    <ErrorAlert><p> No events has been found for your selection.</p></ErrorAlert>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth -1)

    return (
        <Fragment>
            <ResultTitle date={date}/>
            <FeaturedEventsList featuredEvents={filteredEvents}/>
        </Fragment>
    )
}

export default EventsPageFiltered
