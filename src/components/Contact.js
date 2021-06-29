import React from "react";
import './style.css';

function Contact() {
    return (

        <div id="contact" className="contact">
            <div className="container">

                <div className="section-title m-4 text-center">
                    <h2>Send Me a Message!</h2>
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <h4>Location:</h4>
                                <h3>Detroit, MI USA</h3>
                            </div>

                            <div className="email">
                                <h4>Email:</h4>
                                <h3><a className="email-link" href="mailto: LwenzelWebDev@gmail.com">LWenzelWebDev@gmail.com</a></h3>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        required="">
                                    </input>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                            required="">
                                        </input>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                            required="">
                                        </input>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                                required=""></textarea>
                                        </div>
                                        <h4>Thank you for your message. I look forward to speaking with you as soon as I can!</h4>
                                        <div className="text-center"><button type="submit" className="btn btn-secondary">Send Message</button></div>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;