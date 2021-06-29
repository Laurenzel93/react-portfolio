import React from "react";
import './style.css';

function Contact() {
    return (

        <div id="contact" ClassName="contact">
            <div ClassName="container">

                <div ClassName="section-title m-4 text-center">
                    <h2>Send Me a Message!</h2>
                </div>

                <div ClassName="row mt-1">

                    <div ClassName="col-lg-4">
                        <div ClassName="info">
                            <div ClassName="address">
                                <h4>Location:</h4>
                                <h3>Detroit, MI USA</h3>
                            </div>

                            <div ClassName="email">
                                <h4>Email:</h4>
                                <h3><a ClassName="email-link" href="mailto: LwenzelWebDev@gmail.com">LWenzelWebDev@gmail.com</a></h3>
                            </div>

                        </div>

                    </div>

                    <div ClassName="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" ClassName="php-email-form">
                            <div ClassName="row">
                                <div ClassName="col-md-6 form-group">
                                    <input type="text" name="name" ClassName="form-control" id="name" placeholder="Your Name"
                                        required="">
                                    </input>
                                    <div ClassName="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" ClassName="form-control" name="email" id="email" placeholder="Your Email"
                                            required="">
                                        </input>
                                    </div>
                                    <div ClassName="form-group mt-3">
                                        <input type="text" ClassName="form-control" name="subject" id="subject" placeholder="Subject"
                                            required="">
                                        </input>
                                        <div ClassName="form-group mt-3">
                                            <textarea ClassName="form-control" name="message" rows="5" placeholder="Message"
                                                required=""></textarea>
                                        </div>
                                        <h4>Thank you for your message. I look forward to speaking with you as soon as I can!</h4>
                                        <div ClassName="text-center"><button type="submit" ClassName="btn btn-secondary">Send Message</button></div>
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