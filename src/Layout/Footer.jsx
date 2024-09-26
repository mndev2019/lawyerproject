//import React from 'react'
//import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
//import logo2 from '../assets/images/logo2.png'
import { LinkedinFilled } from '@ant-design/icons'

const Footer = () => {
    return (
        <>
            <footer className="footer-area pt-140">
                <div className="container">
                    <div className="footer-content ">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-10 col-12  mb-lg-0-">
                                <div className="footer-left">
                                    <a href="index-1.html" className="footer-logo mb-30 d-block roboto text-start">
                                        KUMAR DEEPRAJ
                                    </a>
                                    <div className="footer-text mb-30 ">
                                        <p className="footer-content roboto">Disclaimer: As per Bar Council of India rules, advocates cannot solicit work or advertise publicly. This website is for informational purposes only and does not serve as advertising or solicitation. The content is meant to inform and guide clients and professionals but is not a substitute for professional advice. Accessing this site does not establish an attorney-client relationship. Please seek professional counsel before relying on any information provided here.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
                                <div className="footer-right">
                                    <div className="footer-nav-menu">
                                        <h3 className="footer-title roboto">Our Office</h3>
                                        <p className='roboto'>
                                            D/200, L.G.F., Defence Colony, New Delhi - 110024
                                        </p>
                                    </div>
                                    <div className="footer-nav-item">
                                        <h3 className="footer-title roboto">Contact Us</h3>
                                        <Link to={'/'} className='footertext roboto'>info@laccolegal.com</Link>
                                    </div>
                                    <div className="footer-nav-item">
                                        <h3 className="footer-title roboto">Social Media</h3>
                                        <div className="w-full h-full flex gap-2 justify-start socialMedia footertext">

                                            <Link to={'https://www.linkedin.com/company/lacco-legal'} className='w-6 h-6  leading-6 text-center t-20 roboto'>
                                                <LinkedinFilled />
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4 footer-two-border footertext roboto">
                            &copy; Copyright 2023
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer