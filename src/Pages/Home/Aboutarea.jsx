//import React from 'react'
//import aboutarea from '../../assets/images/ab-thumb-3.webp'
import aboutarea from '../../assets/images/aboutus.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Aboutarea = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
          once: false, // Whether the animation should happen only once
        });
      }, []);
    return (
        <>

            <section className="about-area-3 pt-150 pb-150 aboutarea">
                <div className="container roboto">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-12"  data-aos="flip-left">
                            <div>
                                <img src={aboutarea} alt="Image" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="about-right-3">
                                <span className="title roboto">Our Best Of Service</span>
                                <h2 className="subtitle roboto" data-delay="0.4">We Are Professional <span className="bluecolor">Law Firm Since 2012</span></h2>

                                <div className="aboutinnerheading roboto py-3">
                                    <h3 className="roboto">Our Mission</h3>
                                    <p className="roboto">Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin. Vivamus neque urna, iaculis et orci id, euismod tempor arcu.</p>

                                </div>
                                
                                <div className="aboutinnerheading roboto pb-3">
                                    <h3 className="roboto">Our Visection-titlebluesion</h3>
                                    <p className="roboto">Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin. Vivamus neque urna, iaculis et orci id, euismod tempor arcu.</p>

                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Aboutarea
