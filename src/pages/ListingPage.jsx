import React from 'react'
import { Link } from 'react-router-dom'

export default function ListingPage() {
    return (
        <section>
            <h1>Listing page</h1>
            <ul>
                <li><Link to="p1"><div className='underline'>Test Product Page Link</div></Link></li>
            </ul>
        </section>
    )
}
