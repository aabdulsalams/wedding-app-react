import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <nav class="fh5co-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2">
                            <div id="fh5co-logo"><Link to="/">Ajee<strong>.</strong></Link></div>
                        </div>
                        <div class="col-xs-10 text-right menu-1">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/live">Live</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

    };
        
export default Navbar;