import React from 'react';
import Subscribe from './Subscribe';
//styling
import './index.scss';

//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <Subscribe/>
            <section className='footer'>
                <div className='links'>
                    <div className='textbox'>
                        <div className="textbox-customer">
                            <h6>Customer</h6>
                            <ul>
                                <li>Account</li>
                                <li>Login</li>
                                <li>Log Out</li>
                                <li>Cart</li>
                            </ul>
                        </div>
                        <div className="textbox-company">
                            <h6>Company</h6>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Return Policy</li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                    <div className='newsbox'>
                        <h6>Latest News</h6>
                        <p><FontAwesomeIcon icon={faTwitter}/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p><FontAwesomeIcon icon={faTwitter}/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="socialmedia">
                    <hr />
                    <h5>
                        Join us on
                    </h5>
                    <div className="socialmedia-links">
                        <div className="socialmedia-links_instagram">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="socialmedia-links_twitter">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="socialmedia-links_facebook">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </div>
                    </div>
                </div>
           {/* copyright and signature at bottom of page */}
            <h6 className='copyright'>
                © {new Date().getFullYear()} ACND Lifestyle
            </h6>
            </section>
        </footer>
    )
}

export default Footer
