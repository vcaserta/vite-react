import React from 'react';
import { Outlet } from 'react-router-dom';
import TheFooter from './TheFooter';
import TheHeader from './TheHeader';

export default function MainLayout() {
    return (
        <>
            <TheHeader />
            <main>
                <Outlet />
            </main>
            <TheFooter />
        </>
    )
}
