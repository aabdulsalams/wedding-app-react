import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            {/* <div class="fh5co-loader"></div> */}
	
            <div id="page">
            <Navbar />
            <header id="fh5co-header" class="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage:`url(assets/images/img_bg_1.jpg)`}}>
                <div class="overlay"></div>
                <div class="fh5co-container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <div class="display-t">
                                <div class="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Contact Us</h1>
                                    <h2>Web Organizer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="fh5co-couple" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-push-6 animate-box">
                            <h3>Get In Touch</h3>
                            <form action="#">
                                <div class="row form-group">
                                    <div class="col-md-6">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control" placeholder="Your firstname" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control" placeholder="Your lastname" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" class="form-control" placeholder="Your email address" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="subject">Subject</label>
                                        <input type="text" id="subject" class="form-control" placeholder="Your subject of this message" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Write us something"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Send Message" class="btn btn-primary" />
                                </div>

                            </form>		
                        </div>
                        <div class="col-md-5 col-md-pull-5 animate-box">
                            
                            <div class="fh5co-contact-info">
                                <h3>Contact Information</h3>
                                <ul>
                                    <li class="address">Bumi Tamalanrea Permai <br/>Makassar</li>
                                    <li class="phone"><a href="tel://0895386899139">+62 8953 8689 9139</a></li>
                                    <li class="email"><a href="mailto:abdulsalamsabil@gmail.com">abdulsalamsabil@gmail.com</a></li>
                                    <li class="url"><a href="http://abdulsalam.it.student.pens.ac.id">abdulsalam.it.student.pens.ac.id</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>

            {/* <div id="map" class="fh5co-map"></div>
                <!-- END map --> */}

            <Footer />
            </div>

            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
            </div>
        </div>
    );

};
        
export default Contact;