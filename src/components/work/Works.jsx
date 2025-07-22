import React from 'react';
import {projectsData} from './Data.jsx';
import WorkItem from './WorkItem.jsx';

const extendedProjects = [...projectsData, ...projectsData]; // duplicate
const Works = () =>{
    return (
        <div className="work__container container grid">
            <div className="work__carousel" id="work-carousel">
                {extendedProjects.map((item) => (
                <WorkItem item={item} key={item.id} />
                ))}
            </div>

        </div>
    )
}

export default Works