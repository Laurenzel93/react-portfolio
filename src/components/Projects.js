import React from "react";
import './style.css';

function Projects() {
    return (

        <div id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h1 className="title-a">
                                Please check out some of my projects!
                        </h1>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4">
                        <div className="work-box">
                            <h2 className="w-title text-center">Inspecto-Gadget</h2>
                            <div className="work-img ">
                                <img src="assets/comingsoon.jpeg" className="img-fluid" width="300px" height="300px" >
                                </img>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="w-more">
                                                <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/inspecto-gadget" className="repo-link"
                                                    target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">July 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="work-box">
                                <h2 className="w-title text-center">Team Profile Generator</h2>
                                <div className="work-img ">
                                    <a href="https://github.com/Laurenzel93/team-profile-generator" target="blank"><img
                                        src="assets/team-profile-generator.png" className="img-fluid" width="300px" height="300px" ></img>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="w-more">

                                                    <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/team-profile-generator" className="repo-link"
                                                        target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">June 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box">
                                    <h2 className="w-title text-center">The Bashful Diner</h2>
                                    <div className="work-img ">
                                        <a href="http://www.thebashfuldiner.com/" target="blank"><img src="assets/BashfulDiner.png" className="img-fluid" width="300px" height="300px" ></img>
                                        </a>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="w-more">

                                                        <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/the-bashful-diner" className="repo-link"
                                                            target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">May 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="work-box">
                                        <h2 className="w-title text-center">Weather Dashboard</h2>
                                        <div className="work-img ">
                                            <a href="https://laurenzel93.github.io/weather-dashboard/" target="blank"><img src="assets/weather-dashboard.png"
                                                className="img-fluid" width="300px" height="300px" ></img>
                                            </a>
                                            <div className="work-content">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="w-more">
                                                            <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/weather-dashboard" className="repo-link"
                                                                target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">April 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="work-box">
                                            <h2 className="w-title text-center">Day Planner</h2>
                                            <div className="work-img ">
                                                <a href="https://laurenzel93.github.io/workday-scheduler/" target="blank"><img src="assets/scheduler.png"
                                                    className="img-fluid" width="300px" height="300px" ></img>
                                                </a>
                                                <div className="work-content">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="w-more">

                                                                <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/workday-scheduler" className="repo-link"
                                                                    target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">March 2021</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="work-box">
                                                <h2 className="w-title text-center">Password Generator</h2>
                                                <div className="work-img ">
                                                    <a href="laurenzel93.github.io/password-generator/" target="blank">
                                                        <img src="assets/password-generator.png" className="img-fluid" width="300px" height="300px" ></img>
                                                    </a>
                                                    <div className="work-content">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <div className="w-more">

                                                                    <span className="w-ctegory"> <a href="https://github.com/Laurenzel93/password-generator" className="repo-link"
                                                                        target="_blank">Github
                                                Repo </a></span> / / / <span className="w-date">Feb 2021</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Projects;