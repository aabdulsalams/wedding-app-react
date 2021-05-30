import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Home extends React.Component {
    
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs([
            'assets/js/jquery.min.js', 'assets/js/jquery.easing.1.3.js', 'assets/js/bootstrap.min.js',
            'assets/js/jquery.waypoints.min.js','assets//owl.carousel.min.js','assets/js/jquery.countTo.js',
            'assets/js/jquery.stellar.min.js', 'assets/js/jquery.magnific-popup.min.js', 'assets/js/magnific-popup-options.js',
            'assets/js/simplyCountdown.js', 'assets/js/main.js'
        ], 'homejs');
        
        loadjs.ready('homejs', function() {
            console.log("Duarr");
        });
    }
    
    
    render() {
        return(
		<div>
            {/* <div class="fh5co-loader"></div> */}
	
            <div id="page">
            <Navbar />
            <header id="fh5co-header" class="fh5co-cover" role="banner" style={{backgroundImage:`url(assets/images/img_bg_2.jpg)`}} data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <div class="display-t">
                                <div class="display-tc animate-box" data-animate-effect="fadeIn">
                                    <h1>Ammar &amp; Calonnya</h1>
                                    <h2>We Are Getting Married</h2>
                                    <div class="simply-countdown simply-countdown-one"></div>
                                    <p><a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NzFqNjZjOWg2ZGhqYWJiNWNrcW0yYjlrY2dzNjZiYjJjaGdqOGI5cGNwaGpncGhpNjlpM2dkMWc2byA0Njh0MHBrNDVucHIxdGRvaG1zNjJtNDNia0Bn&amp;tmsrc=468t0pk45npr1tdohms62m43bk%40group.calendar.google.com" target="_blank" class="btn btn-default btn-sm">Ingatkan Saya</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="fh5co-couple">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <h2>Assalamu'alaikum</h2>
                            <p>Dengan memohon rahmat dan ridho Allah SWT yang telah menciptakan mahluknya secara berpasang-pasangan. Kami bermaksud menyelenggarakan penikahan kami</p>
                        </div>
                    </div>
                    <div class="couple-wrap animate-box">
                        <div class="couple-half">
                            <div class="groom">
                                <img src="assets/images/groom.jpg" alt="groom" class="img-responsive" />
                            </div>
                            <div class="desc-groom">
                                <h3>Ammar</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                            </div>
                        </div>
                        <p class="heart text-center"><i class="icon-heart2"></i></p>
                        <div class="couple-half">
                            <div class="bride">
                                <img src="assets/images/bride.jpg" alt="groom" class="img-responsive" />
                            </div>
                            <div class="desc-bride">
                                <h3>Calonnya</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-event" class="fh5co-bg" style={{backgroundImage:`url(assets/images/img_bg_3.jpg)`}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>Insya Allah</span>
                            <h2>Akad &amp; Resepsi</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="display-t">
                            <div class="display-tc">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box">
                                            <h3>Akad</h3>
                                            <div class="event-col">
                                                <i class="icon-clock"></i>
                                                <span>4:00 PM</span>
                                                <span>6:00 PM</span>
                                            </div>
                                            <div class="event-col">
                                                <i class="icon-calendar"></i>
                                                <span>Senin 1</span>
                                                <span>Agustus, 2021</span>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box">
                                            <h3>Resepsi</h3>
                                            <div class="event-col">
                                                <i class="icon-clock"></i>
                                                <span>7:00 PM</span>
                                                <span>12:00 AM</span>
                                            </div>
                                            <div class="event-col">
                                                <i class="icon-calendar"></i>
                                                <span>Selasa 2</span>
                                                <span>Agustus, 2021</span>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-couple-story">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>We Love Each Other</span>
                            <h2>Our Story</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-md-offset-0">
                            <ul class="timeline animate-box">
                                <li class="animate-box">
                                    <div class="timeline-badge" style={{backgroundImage:`url(assets/images/couple-1.jpg)`}}></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h3 class="timeline-title">First We Meet</h3>
                                            <span class="date">December 25, 2015</span>
                                        </div>
                                        <div class="timeline-body">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted animate-box">
                                    <div class="timeline-badge" style={{backgroundImage:`url(assets/images/couple-2.jpg)`}}></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h3 class="timeline-title">First Date</h3>
                                            <span class="date">December 28, 2015</span>
                                        </div>
                                        <div class="timeline-body">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="animate-box">
                                    <div class="timeline-badge" style={{backgroundImage:`url(assets/images/couple-3.jpg)`}}></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h3 class="timeline-title">In A Relationship</h3>
                                            <span class="date">January 1, 2016</span>
                                        </div>
                                        <div class="timeline-body">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-gallery" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>Our Memories</span>
                            <h2>Wedding Gallery</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div class="row row-bottom-padded-md">
                        <div class="col-md-12">
                            <ul id="fh5co-gallery-list">
                                
                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-1.jpg)`}}> 
                                <a href="images/gallery-1.jpg">
                                    <div class="case-studies-summary">
                                        <span>14 Photos</span>
                                        <h2>Two Glas of Juice</h2>
                                    </div>
                                </a>
                            </li>
                            <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`url(images/gallery-2.jpg)`}}>
                                <a href="#" class="color-2">
                                    <div class="case-studies-summary">
                                        <span>30 Photos</span>
                                        <h2>Timer starts now!</h2>
                                    </div>
                                </a>
                            </li>


                            <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`url(assets/images/gallery-3.jpg)`}}>
                                <a href="#" class="color-3">
                                    <div class="case-studies-summary">
                                        <span>90 Photos</span>
                                        <h2>Beautiful sunset</h2>
                                    </div>
                                </a>
                            </li>
                            <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`url(assets/images/gallery-4.jpg)`}}>
                                <a href="#" class="color-4">
                                    <div class="case-studies-summary">
                                        <span>12 Photos</span>
                                        <h2>Company's Conference Room</h2>
                                    </div>
                                </a>
                            </li>

                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-5.jpg)`}}>
                                    <a href="#" class="color-3">
                                        <div class="case-studies-summary">
                                            <span>50 Photos</span>
                                            <h2>Useful baskets</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-6.jpg)`}}>
                                    <a href="#" class="color-4">
                                        <div class="case-studies-summary">
                                            <span>45 Photos</span>
                                            <h2>Skater man in the road</h2>
                                        </div>
                                    </a>
                                </li>

                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-7.jpg)`}}>
                                    <a href="#" class="color-4">
                                        <div class="case-studies-summary">
                                            <span>35 Photos</span>
                                            <h2>Two Glas of Juice</h2>
                                        </div>
                                    </a>
                                </li>

                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-8.jpg)`}}> 
                                    <a href="#" class="color-5">
                                        <div class="case-studies-summary">
                                            <span>90 Photos</span>
                                            <h2>Timer starts now!</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage:`assets/url(images/gallery-9.jpg)`}}>
                                    <a href="#" class="color-6">
                                        <div class="case-studies-summary">
                                            <span>56 Photos</span>
                                            <h2>Beautiful sunset</h2>
                                        </div>
                                    </a>
                                </li>
                            </ul>		
                        </div>
                    </div>
                </div>
            </div>

            <div id="map" class="fh5co-map"></div>
            

            <div id="fh5co-started" class="fh5co-bg" style={{backgroundImage:`url(assets/images/img_bg_4.jpg)`}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Are You Attending?</h2>
                            <p>Please Fill-up the form to notify you that you're attending. Thanks.</p>
                        </div>
                    </div>
                    <div class="row animate-box">
                        <div class="col-md-10 col-md-offset-1">
                            <form class="form-inline">
                                <div class="col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="name" class="sr-only">Name</label>
                                        <input type="name" class="form-control" id="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="email" class="sr-only">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <button type="submit" class="btn btn-default btn-block">I am Attending</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>

            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
            </div>
        </div>
        )
    }
}

export default Home;