import React from 'react'
import { useRouter } from 'next/router'

const EventsDetailPage = () => {
    const router = useRouter()
    return (
        <div>
            <h2>This is detail page for Event: {router.query.id}</h2>
        </div>
    )
}

export default EventsDetailPage
