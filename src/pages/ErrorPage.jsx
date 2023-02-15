import { useRouteError } from "react-router-dom";

import React from 'react'

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <main>
            <p>{error.statusText}</p>
        </main>
    )
}
