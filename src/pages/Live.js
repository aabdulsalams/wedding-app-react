import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Live = () => {
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
                                    <h1>Live</h1>
                                    <h2>belumpi jadi bosku</h2>
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
                            <h3>Live Video</h3>
                            <div class="fh5co-video fh5co-bg" style={{backgroundImage:`url(assets/images/img_bg_3.jpg)`}}>
                                <a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo"><i class="icon-video2"></i></a>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-pull-5 animate-box">
                            
                            <div class="fh5co-contact-info">
                                <h3>Live Chat</h3>
                                <form action="#">
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
        
export default Live;