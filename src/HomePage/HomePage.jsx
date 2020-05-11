import React from 'react';
import { Header } from '../Layout'
import { LandingPage } from '../Pages';
// import { Link } from 'react-router-dom'\

function HomePage() {
    
    return(
        <div className="container-fluid" style={{padding: 0}}>
            <Header />
            <LandingPage />
        </div>
    )
}

export { HomePage }