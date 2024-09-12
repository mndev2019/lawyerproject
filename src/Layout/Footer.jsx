//import React from 'react'
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer-area pt-140">
                <div className="container">
                    <div className="footer-content footer-two-border">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-4 col-md-10 col-12 mb-40 mb-lg-0-">
                                <div className="footer-left">
                                    <a href="index-1.html" className="footer-logo mb-30 d-block">
                                        <img src={logo} alt="footer-logo" />
                                    </a>
                                    <div className="footer-text mb-30 ">
                                        <p className="footer-content">Fusce sodales egestas neque, in pulvinar enim ultricies at. Vivamus vitae consequat elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
                                <div className="footer-right">
                                    <div className="footer-nav-menu">
                                        <h3 className="footer-title">Quick Links</h3>
                                        <ul className="footer-list">
                                            <li><a className="footer-link" href="service.html">Areas We Serve</a></li>
                                            <li><a className="footer-link" href="contact.html">Contact Us</a></li>
                                            <li><a className="footer-link" href="faq.html">Privacy Policy</a></li>
                                            <li><a className="footer-link" href="testimonial.html">Testimonials</a></li>
                                            <li><a className="footer-link" href="about.html">Payment Portal</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-nav-item">
                                        <h3 className="footer-title">Greenville Office</h3>
                                        <ul className="footer-list">
                                            <li>819 E North St Suite</li>
                                            <li>234Greenville, SC</li>
                                            <li><a className="footer-link" href="tel:01(864)618-2323">01(864) 618-2323</a></li>
                                            <li><a className="footer-link" href="support.html">Directions</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-nav-item">
                                        <h3 className="footer-title">Columbia Office</h3>
                                        <ul className="footer-list">
                                            <li>1820 Bull Street</li>
                                            <li>Columbia, SC 29201</li>
                                            <li><a className="footer-link" href="#">(803) 879-4499</a></li>
                                            <li><a className="footer-link" href="#">Directions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Shape */}
                {/* <img className="footer-shape-1 moveBottom" src="images/footer-shape-1.png" alt="Shape" />
                <img className="footer-shape-2" src="images/footer-shape-2.png" alt="Shape" />
                <img className="footer-shape-3" src="images/footer-shape-3.png" alt="Shape" />
                <img className="footer-shape-4 moveBottom" src="images/footer-shape-4.png" alt="Shape" /> */}
            </footer>
        </>
    )
}

export default Footer