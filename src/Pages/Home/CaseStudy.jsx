//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowyellow from '../../assets/images/arrow-top-yellow.svg'
import arrowblack from '../../assets/images/arrow-top-black.svg'
import slider1 from '../../assets/images/s-slide-1.png'
import slider2 from '../../assets/images/s-slide-2.png'
import slider3 from '../../assets/images/s-slide-3.png'
import slider4 from '../../assets/images/s-slide-4.png'
import case1 from '../../assets/images/case-study-1.webp'
import case2 from '../../assets/images/case-study-2.webp'
import case3 from '../../assets/images/case-study-3.webp'
import case4 from '../../assets/images/case-study-4.webp'
import shape1 from '../../assets/images/shaddow-shape.png'
import shape2 from '../../assets/images/about-shape-4.png'
import shape3 from '../../assets/images/about-shape-3.png'
const CaseStudy = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="case-study-area-2 pb-150">
                <div className="container">
                    <div className="case-study-top-2 pb-50">
                        <div className="case-study-topitem fade-slide left" data-delay="0.2">
                            <span className="section-subtitle">Latest Best case study</span>
                            <h2 className="section-title section-titleblue">The Works Check <span className="title-yellow">Our Case study</span></h2>
                        </div>
                        <div className="case-study-topitem fade-slide right" data-delay="0.4">
                            <a href="contact.html" className="btn-fill gap-2 d-flex align-items-center">
                                All Case Study
                                <img className="btn-icon-black" src={arrowyellow} alt="Icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className="case-study-slider">
                    <Slider {...settings}>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case1} alt="Image" />
                                    <div className="case-study-content-2">
                                        <img src={slider1} />
                                        <h3><a className="case-study-title-2" href="case-detail.html">Criminal Defense</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case2} />
                                    <div className="case-study-content-2">
                                        <img src={slider2} />
                                        <h3><a className="case-study-title-2" href="case-detail.html">Contract Review</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case3} />
                                    <div className="case-study-content-2">
                                        <img src={slider3} />
                                        <h3><a className="case-study-title-2" href="case-detail.html">Immigration Issues</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case4} />
                                    <div className="case-study-content-2">
                                        <img src={slider4 } />
                                        <h3><a className="case-study-title-2" href="case-detail.html">Business law</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case3}/>
                                    <div className="case-study-content-2">
                                        <img src={slider1} />
                                        <h3><a className="case-study-title-2" href="case-detail.html">Immigration Issues</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Slider>




                </div>
                {/* Shape */}
                <img className="case-study-shapetwo-1" src={shape1} alt="Shape" />
                <img className="case-study-shapetwo-2" src={shape2} alt="Shape" />
                <img className="case-study-shapetwo-3 moveBottom" src={shape3} alt="Shape" />
            </section>
        </>
    )
}

export default CaseStudy