import React from 'react'
import { useRouter } from 'next/router'

const EventsPageFiltered = () => {
    const router = useRouter()

    return (
        <div>
            <h2>This is Filtered Events Page</h2>
            {router.query.slug.map(entry => (
                <h5>{entry}</h5>
            ))}
        </div>
    )
}

export default EventsPageFiltered
