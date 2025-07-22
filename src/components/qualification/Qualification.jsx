import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    // const [toogleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* <div className={toogleState ===1 ?"qualification__button qualification__active button--flex": "qualification__button button--flex"}
                        onClick = {()=> toggleTab(1)}
                    > */}
                     <div className="qualification__button button--flex">   
                        <i className="util uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    {/* <div className={toogleState ===2 ?"qualification__button qualification__active button--flex": "qualification__button button--flex"}
                        onClick = {()=> toggleTab(2)}
                    > */}
                    <div className="qualification__button button--flex">
                        <i className="util uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    {/* <div className={toogleState ===1 ? "qualification__content qualification__content-active": "qualification__content"}> */}
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Engineer</h3>
                                <span className="qualification__subtitle">PNC Bank</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2025 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Masters in Computer Science</h3>
                                <span className="qualification__subtitle">SUNY Bingahmton</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2022 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Sage Sofetech</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelors in Computer Engineering</h3>
                                <span className="qualification__subtitle">Ramrao Adik Institute of Technology</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2014 - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className={toogleState ===2 ? "qualification__content qualification__content-active": "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Engineer</h3>
                                <span className="qualification__subtitle">PNC Bank</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2025 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Masters in Computer Science</h3>
                                <span className="qualification__subtitle">SUNY Bingahmton</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2022 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Sage Sofetech</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelors in Computer Engineering</h3>
                                <span className="qualification__subtitle">Ramrao Adik Institute of Technology</span>
                                <div className="qualification__calender">
                                    <i className="bxr  bx-calendar-alt"></i> 2014 - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Qualification