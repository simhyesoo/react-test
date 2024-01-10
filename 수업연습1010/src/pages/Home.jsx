import { HashRouter, Route, Routes, Link } from 'react-router-dom'

import React from 'react'

function Home() {
    return (
        <>

            <main>
                <h1>OUR MEDIA LIBRARY</h1>
                <nav>
                    <Link to="/Media" state={'movies'}>MOVIES</Link>
                    <Link to="/Media" state={'music'}>MUSIC</Link>
                    <Link to="/Media" state={'apps'}>APPS</Link>
                    <Link to="/Media" state={'software'}>SOFTWARE</Link>
                </nav>
            </main>
        </>
    )
}

export default Home