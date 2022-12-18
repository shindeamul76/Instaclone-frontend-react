import React from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom';
export default function LandingPage() {
    return (
        <>
            <main>
                <section className="img">
                    <img src="https://images.unsplash.com/photo-1671224352372-6a40361be66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='landingpage' />
                </section>
                <section className="name-landing">
                    <h1>10x Team 04</h1>
                    <Link to='/postview'><button>Enter</button></Link>
                </section>
            </main>
        </>
    )
}
