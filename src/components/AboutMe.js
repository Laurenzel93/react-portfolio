import React from "react";
import './style.css';

function AboutMe() {
    return (

        <div ClassName="section about-section gray-bg" id="about">
            <div ClassName="container">
                <div ClassName="row align-items-center justify-content-around flex-row-reverse">
                    <div ClassName="col-lg-6">
                        <div ClassName="about-text">
                            <h2 ClassName="dark-color text-center">Full Stack Web Developer (in training!)</h2>
                            <h3 ClassName="theme-color text-center">Hear me roar</h3>

                            <ul ClassName="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                <li ClassName="nav-item">
                                    <a ClassName="nav-link active" data-toggle="tab" href="#aboutMe" role="tab" aria-controls="aboutMe"
                                        aria-selected="true">About Me</a>
                                </li>
                                <li ClassName="nav-item">
                                    <a ClassName="nav-link" data-toggle="tab" href="#education" role="tab"
                                        aria-controls="education" aria-selected="false">Education</a>
                                </li>
                                <li ClassName="nav-item">
                                    <a ClassName="nav-link" data-toggle="tab" href="#professionalExperience" role="tab" aria-controls="professionalExperience"
                                        aria-selected="false">Work Experience</a>
                                </li>
                                <li ClassName="nav-item">
                                    <a ClassName="nav-link" data-toggle="tab" href="#skills" role="tab" aria-controls="skills"
                                        aria-selected="false">Skills</a>
                                </li>
                            </ul>
                        </div>
                        <div ClassName="tab-content" id="myTabContent">
                            <div ClassName="tab-pane fade show active" id="aboutMe" role="tabpanel" aria-labelledby="aboutMe-tab">
                                <h4>I'm 28 years old and grew up and am currently based in Detroit, Michigan. However, I
                                can't wait to explore and find a
                                        new city to make my new stomping grounds!</h4>
                                <h4>I've been interested in programming for years and have finally decided to pursue my
                                passion to become a web
                                        developer!</h4>
                                <h4>I love to travel and some of my favorite places that I've visited are Zurich,
                                        Barcelona, and Copenhagen!</h4>
                                <h4>I love CrossFit and will definitely let you know it! 😉 </h4>
                            </div>
                            <div ClassName="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                                <h4>Associates Degree in Liberal Arts</h4>
                                <p>2011 - 2013 - Oakland Community College (Farmingtom Hills, MI)</p>
                                <h4>Bachelor of Science in Criminal Justice</h4>
                                <p>2013 - 2015 - University of Michigan (Dearborn, MI)</p>
                                <h4>30-Week Intensive Spanish Course Certification</h4>
                                <p>2018 - SpeakEasy Language School (Barcelona, Spain)</p>
                                <h4>Full-Stack Web Development Certification</h4>
                                <p>2021 - Michigan State University (Remote)</p>

                            </div>
                            <div ClassName="tab-pane fade" id="professionalExperience" role="tabpanel" aria-labelledby="professionalExperience-tab">
                                <h3>I'm looking for new employment opportunities to help me grow as a professional
                                        developer!</h3>

                                <h4>Administrative Clerk - The City of Orchard Lake</h4>
                                <p>2019 - Present | Orchard Lake, MI</p>

                                <div ClassName="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                                    <h4>Browser-Based Technologies:</h4>
                                    <p>HTML5, CSS, JavaScript, GitHub, JSON, jQuery, Bootstrap, Handlebars, Responsive
                                    Design, Local Storage, React.js
                                    </p>
                                    <h4>API Interaction:</h4>
                                    <p>API, JSON</p>
                                    <h4>Databases:</h4>
                                    <p>MySQL, MongoDB</p>
                                    <h4>Server-Side Development:</h4>
                                    <p>MERN Stack, Node.js, Express.js</p>
                                    <h4>Future Studies:</h4>
                                    <p>Python, Sass, Next.js, Vue.js</p>

                                </div>
                            </div>
                        </div>
                        <div id="aboutMePic" ClassName="col-lg-6 text-center">
                            <img src="./assets/AboutMePic.jpeg" width="100%" height="auto">

                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;