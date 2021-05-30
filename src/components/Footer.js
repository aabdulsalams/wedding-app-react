import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);  
      return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div>
            <footer id="fh5co-footer" role="contentinfo">
                <div class="container">

                    <div class="row copyright">
                        <div class="col-md-12 text-center">
                            <p>
                                <small class="block">&copy; 2021 aabdulsalams. All Rights Reserved.</small>
                            </p>
                            <p>
                                <ul class="fh5co-social-icons">
                                    <li><a href="#"><i class="icon-twitter"></i></a></li>
                                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                                    <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                    <li><a href="#"><i class="icon-dribbble"></i></a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );

    };
        
export default Footer;