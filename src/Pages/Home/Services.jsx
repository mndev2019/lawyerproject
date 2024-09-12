//import React from 'react'
import servicescard1 from '../../assets/images/card-img-1.webp'
import servicescard2 from '../../assets/images/card-img-2.webp'
import servicecard3 from '../../assets/images/card-img-3.webp'
import services2 from '../../assets/images/h3-icon-2.svg'
import services3 from '../../assets/images/arrow-top-dark.svg'
import services4 from '../../assets/images/h3-icon-1.svg'
import shape from '../../assets/images/circle-shape-yellow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
    };
    return (
        <>
            <section className="service-area-3 pt-150 pb-150 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="service-left-4">
                                <span className="section-subtitle pb-20 fade-slide top" data-delay="0.2">Our Best Of Service</span>
                                <h2 className="section-title mb-20 fade-slide bottom" data-delay="0.4">What People Says Our Best Of <span className="title-yellow">Legal Practice Areas</span></h2>
                                <div className="fade-slide bottom" data-delay="0.6">
                                    <p className="service-content-3">Morbi posuere interdum viverra. Vivamus feugiat hendrerit nulla vitae finibus. Nam in viverra neque. Maecenas fermentum vehicula mauris.</p>
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
                                                <h3><a className="service-title-3" href="case-detail.html">Dui Defense Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3">Case Details
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
                                                <h3><a className="service-title-3" href="case-detail.html">Personal Injury Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3">Case Details
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
                                                <h3><a className="service-title-3" href="case-detail.html">Dui Defense Law</a></h3>
                                                <a href="case-detail.html" className="service-btn-3">Case Details
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
                {/* Shape */}
                <img className="service-shape-three-1 zoom-in-out" src={shape} alt="Shape" />
            </section>
        </>
    )
}

export default Services