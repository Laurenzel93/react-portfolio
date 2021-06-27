import React from "react";
import './style.css';

function Contact() {
    return (

        <div id="contact" class="contact">
            <div class="container">

                <div class="section-title m-4 text-center">
                    <h2>Send Me a Message!</h2>
                </div>

                <div class="row mt-1">

                    <div class="col-lg-4">
                        <div class="info">
                            <div class="address">
                                <h4>Location:</h4>
                                <h3>Detroit, MI USA</h3>
                            </div>

                            <div class="email">
                                <h4>Email:</h4>
                                <h3><a class="email-link" href="mailto: LwenzelWebDev@gmail.com">LWenzelWebDev@gmail.com</a></h3>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                        required="">
                                    </input>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                            required="">
                                        </input>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                            required="">
                                        </input>
                                        <div class="form-group mt-3">
                                            <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                                required=""></textarea>
                                        </div>
                                        <h4>Thank you for your message. I look forward to speaking with you as soon as I can!</h4>
                                        <div class="text-center"><button type="submit" class="btn btn-secondary">Send Message</button></div>
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