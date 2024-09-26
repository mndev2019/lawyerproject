//import React from 'react'
//import banner1 from '../../assets/images/arrow-top-black.svg'
//import banner2 from '../../assets/images/arrow-top-yellow.svg'
//import banner3 from '../../assets/images/logo-two-small.png'
//import banner4 from '../../assets/images/h-shape-three-1.png'
//import banner5 from '../../assets/images/h-shape-three-2.png'
//import banner6 from '../../assets/images/p-two-shape-1.png'
//import phone from '../../assets/images/phone-plus-yellow.svg'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import bannercircle from '../../assets/images/bannercircle.svg'


const Banner = () => {
    {/* var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };*/}
    return (
        <>
            {/*  <section className="hero-area-3 banner position-relative">
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

                </div >

            </section >*/}
            <section className="banner  d-flex align-items-center justify-content-center space position-relative">
                <img src={bannercircle} alt="image" className='position-absolute bannercircle' />
                <div className="container">
                    <div className="row pb-5">
                        {/* <div className="col-md-3 flex justify-center">
                            <div className="w-100 flex align-items-center justify-">
                                <h3 className="roboto">SIDLEY</h3>
                                <ul className="menu-list flex flex-col items-center space-y-4">
                                    <li><a href="#">People</a></li>
                                    <li><a href="#">Services and Industries</a></li>
                                    <li><a href="#">Insights</a></li>
                                    <li><a href="#">Our Story</a></li>
                                </ul>
                            </div>
                        </div>*/}
                        <div className="col-md-6">
                            <div className="w-100 leftcol">
                                <h2 className="roboto ">
                                    Talent.
                                    Teamwork.
                                    Results.
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6 position-relative rightcol ">
                            <div className="collast p-5 text-start">
                                <p className="parahead roboto">
                                    Announcements
                                </p>
                                <h2 className='roboto'>
                                    Sidley Represents Long-Time Client Angel City Football Club in Its Definitive Agreement with Willow Bay and Bob Iger to Become the New Controlling Owners of the World’s Most Valuable Women’s Professional Sports Team
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner