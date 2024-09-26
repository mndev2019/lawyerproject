//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,  // Show 3 slides in a row
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For mobile screens in landscape
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // For small mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className="case-study-area-2 pb-150 pt-150 casestudy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >
                            <span className="title roboto">Latest Best case study</span>
                            <h2 className="subtitle roboto">The Works Check <span className="bluecolor">Our Case study</span></h2>
                        </div>
                       
                    </div>
                </div>
                {/* Slider */}
                <div className="case-study-slider pt-5">
                    <Slider {...settings}>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case1} alt="Image" />
                                    <div className="case-study-content-2">
                                        <img src={slider1} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Criminal Defense</a></h3>
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
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Contract Review</a></h3>
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
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Immigration Issues</a></h3>
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
                                        <img src={slider4} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Business law</a></h3>
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
                                        <img src={slider1} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Immigration Issues</a></h3>
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