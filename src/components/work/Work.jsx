import React from 'react';
import "./work.css";
import Works from './Works.jsx'
const Work = () =>{
    return (
        <section className="work section" id="portfolio">
            <h2 className="alt__section__title">Portfolio</h2>
            <span className="alt__section__subtitle">Most recent works</span>
        <Works />
        </section>
    )
}

export default Work