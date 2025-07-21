import React from "react";

const Info = () =>{
    return (
       <div className="about__info grid">
        <div className="about__box">
        <i className='bx  bx-briefcase-alt about__icon'  ></i> 
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4+ Years Working</span>
        </div>

        <div className="about__box">
        <i className='bx  bx-education about__icon'  ></i> 
            <h3 className="about__title">Education</h3>
            {/* <span className="about__subtitle">December 2024</span> */}
            <span className="about__subtitle">Masters in Computer Science</span>

            {/* <span className="about__subtitle">Bachelors Degree in Computer Engineering from Ramrao Adik Institute of Technology</span> */}
        </div>

        <div className="about__box">
        <i className='bx  bx-body about__icon ' ></i> 
            <h3 className="about__title">Hobbies</h3>
            {/* <span className="about__subtitle">I enjoy sketching, exploring hiking trails, and have recently started learning to skateboard</span> */}
            <span className="about__subtitle">sketching, hiking & skateboard</span>
        </div>
       </div>
    )

}

export default Info