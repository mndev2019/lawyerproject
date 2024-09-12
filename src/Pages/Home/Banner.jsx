//import React from 'react'
import banner1 from '../../assets/images/arrow-top-black.svg'
import banner2 from '../../assets/images/arrow-top-yellow.svg'
//import banner3 from '../../assets/images/logo-two-small.png'
//import banner4 from '../../assets/images/h-shape-three-1.png'
//import banner5 from '../../assets/images/h-shape-three-2.png'
//import banner6 from '../../assets/images/p-two-shape-1.png'
//import phone from '../../assets/images/phone-plus-yellow.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <section className="hero-area-3 banner position-relative">
                <div className="container-xxl">
                    <div className="hero-content-3 text-center">
                        <div className="hero-content-slider">
                            <Slider {...settings}>
                                <div>
                                    <div className="hero-slide-item-3">
                                        <span className="section-subtitle pb-10 fade-slide top" data-delay="0.2">Dedicated to Protecting Your Rights and Future</span>
                                        <h1 className="section-title-lg mb-20 fade-slide bottom" data-delay="0.4">We Provide Legal Zstal Our <span className="title-yellow">Law Firm</span></h1>
                                        <div className="fade-slide bottom" data-delay="0.6">
                                            <p className="hero-text-3 mb-30">Mauris nec auctor velit. Maecenas ultricies facilisis lectus vel auctor. Maecenas erat nunc, placerat vitae finibus et, tincidunt vitae erat.</p>
                                        </div>
                                        <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                                            <div className="fade-slide left" data-delay="0.7">
                                                <a href="contact.html" className="btn-fill gap-2 d-flex align-items-center">Free Consultancy<img className="btn-icon-black" src={banner2} alt="Icon" /></a>
                                            </div>
                                            <div className="fade-slide right" data-delay="0.8">
                                                <a href="contact.html" className="btn-gradiant">Contact Us<img src={banner1} alt="Icon" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="hero-slide-item-3">
                                        <span className="section-subtitle pb-10">Dedicated to Protecting Your Rights and Future</span>
                                        <h1 className="section-title-lg mb-20">We Provide Legal Zstal Our <span className="title-yellow">Law Firm</span></h1>
                                        <p className="hero-text-3 mb-30">Mauris nec auctor velit. Maecenas ultricies facilisis lectus vel auctor. Maecenas erat nunc, placerat vitae finibus et, tincidunt vitae erat.</p>
                                        <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                                            <a href="contact.html" className="btn-fill gap-2 d-flex align-items-center">Free Consultancy
                                                <img className="btn-icon-black" src={banner2} alt="Icon" />
                                            </a>
                                            <a href="contact.html" className="btn-gradiant">
                                                Contact Us
                                                <img src={banner1} alt="Icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="hero-slide-item-3">
                                        <span className="section-subtitle pb-10">Dedicated to Protecting Your Rights and Future</span>
                                        <h1 className="section-title-lg mb-20">We Provide Legal Zstal Our <span className="title-yellow">Law Firm</span></h1>
                                        <p className="hero-text-3 mb-30">Mauris nec auctor velit. Maecenas ultricies facilisis lectus vel auctor. Maecenas erat nunc, placerat vitae finibus et, tincidunt vitae erat.</p>
                                        <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                                            <a href="contact.html" className="btn-fill gap-2 d-flex align-items-center">Free Consultancy
                                                <img className="btn-icon-black" src={banner2} alt="Icon" />
                                            </a>
                                            <a href="contact.html" className="btn-gradiant">
                                                Contact Us
                                                <img src={banner1} alt="Icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </Slider>



                        </div>
                    </div>
                    {/* Circle */}
                    
                  {/*  <div className="hero-two-textwrap fade-slide top" data-delay="0.6">
                        <p className="hero-text-left">we are the best Our law firm</p>
                    </div>
                    <div className="hero-two-contact fade-slide top" data-delay="0.8">
                        <span className="hero-two-phone">
                            <img src={phone} alt="Icon" />
                        </span>
                        <a className="hero-contact-link" href="tel:+12223334455">+ 1 222 333 44 55</a>
                    </div>*/}
                </div>
                {/* Shape 
                <img className="hero-shape-three-1 zoom-in-out" src={banner4} alt="Shape" />
                <img className="hero-shape-three-2 zoom-in-out" src={banner5} alt="Shape" />
                <img className="hero-shape-three-3" src={banner6} alt="Shape" />*/}
            </section>
        </>
    )
}

export default Banner