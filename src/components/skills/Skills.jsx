import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Cloud from './Cloud';
import Database from './Database';


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="alt__section__title">Skills</h2>
            <span className="alt__section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Cloud />
                <Database />
                
            </div>
        </section>
    )
}

export default Skills