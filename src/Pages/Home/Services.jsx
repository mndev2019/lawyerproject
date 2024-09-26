//import React from 'react'
import servicescard1 from '../../assets/images/card-img-1.webp'
import servicescard2 from '../../assets/images/card-img-2.webp'
import servicecard3 from '../../assets/images/card-img-3.webp'
import services2 from '../../assets/images/h3-icon-2.svg'
import services3 from '../../assets/images/arrow-top-dark.svg'
import services4 from '../../assets/images/h3-icon-1.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
        slidesToShow: 2,  // Show 2 slides in a row
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                    slidesToShow: 1, // Show 2 slides at a time on tablet
                }
            },
            {
                breakpoint: 768, // For mobile screens in landscape mode
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on mobile landscape
                }
            },
            {
                breakpoint: 480, // For small mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on small devices
                }
            }
        ]
    };
    return (
        <>
            <section className="service-area-3 pt-150 pb-150 position-relative aboutus">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="service-left-4 text-start">
                                <span className="title roboto">About us</span>
                                <h2 className="subtitle roboto py-3" >It is always better to know the credentials <span className="bluecolor">of your attorney</span></h2>
                                <div >
                                    <p className="roboto py-3">In addition to our key areas of practice, LACCO Legal believes, that every human being deserves to be respected, and thus, being in this Nobel profession, LACCO Legal aims to provide pro – bono services to the one who are deprived of their human rights.</p>
                                    <p className="roboto pb-3">Our services cover a wide range of industry areas such as Financial Services, Power, Telecom, Insurance, Consumer Durables, IT, Media, Transport, Energy, Infrastructure, Environment, and Agricultural.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 fade-slide bottom" data-delay="0.4">
                            <div className="service-right-4">
                                <Slider {...settings}>
                                    <div>
                                        <div className="service-item-3">
                                            <img className="service-img-3" src={servicescard1} alt="Crimanal" />
                                            <div className="service-text">
                                                <div className="service-iconwrap-3">
                                                    <img src={services2} alt="Criminal" />
                                                </div>
                                                <h3 className='text-start roboto'><a className="service-title-3" href="case-detail.html">Dui Defense Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3 roboto">Case Details
                                                    <img className="service-icon-3" src={services3} alt="Icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="service-item-3">
                                            <img className="service-img-3" src={servicescard2} alt="Crimanal" />
                                            <div className="service-text">
                                                <div className="service-iconwrap-3">
                                                    <img src={services4} alt="Criminal" />
                                                </div>
                                                <h3 className='text-start roboto'><a className="service-title-3" href="case-detail.html">Personal Injury Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3 roboto">Case Details
                                                    <img className="service-icon-3" src={services3} alt="Icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="service-item-3">
                                            <img className="service-img-3" src={servicecard3} alt="Crimanal" />
                                            <div className="service-text">
                                                <div className="service-iconwrap-3">
                                                    <img src={services2} alt="Criminal" />
                                                </div>
                                                <h3 className='text-start roboto'><a className="service-title-3" href="case-detail.html">Dui Defense Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3 roboto">Case Details
                                                    <img className="service-icon-3" src={services3} alt="Icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>



                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}

export default Services