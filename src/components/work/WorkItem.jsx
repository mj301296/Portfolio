import React from 'react';

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      {/* Tech Stack */}
      <ul className="work__tech-list grid">
        {item.tech && item.tech.map((tech, index) => (
          <li key={index} className="work__tech-item">
            • {tech}
          </li>
        ))}
      </ul>

      <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
        GitHub <i className="bx bx-arrow-right-stroke work__button-icon"></i>
      </a>
    </div>
  );
};


export default WorkItem