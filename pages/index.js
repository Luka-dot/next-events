import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
import FeaturedEventsList from '../components/events/FeaturedEventsList'

const LandingPage = () => {
    const featuredEvents = getFeaturedEvents()

    return (
        <div>
            <h1>This is Landing Page</h1>
            <div>
                <FeaturedEventsList featuredEvents={featuredEvents} />
            </div>
            
        </div>
    )
}

export default LandingPage