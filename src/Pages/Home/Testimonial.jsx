//import React from 'react'
import testimonial from '../../assets/images/testimonialimg.png'
import clip from '../../assets/images/clip.png'
//import clip from '../../assets/images/binder-clip.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,  // Show 3 slides in a row
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,  // Adjust for medium devices
                settings: {
                    slidesToShow: 2,  // Show 2 slides in a row on medium screens
                }
            },
            {
                breakpoint: 768,  // Adjust for small devices
                settings: {
                    slidesToShow: 1,  // Show 1 slide in a row on small screens
                }
            }
        ]
    };
    return (
        <>
            <section className="testimonial pb-150">
                <div className="container">
                    <div className="service-topwrap-3 text-center">
                        <span className="title roboto">Our Best Of Service</span>
                        <h2 className="subtitle roboto">Testimonial</h2>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            <Slider {...settings}>
                                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                    <div key={index} className="px-4">
                                        <div className="col-md-4 w-100"> {/* Keep col-md-4 within each slide */}
                                            <div className="w-100 position-relative">
                                                <div className="clipimage">
                                                    <img src={clip} alt="testimonial clip" />
                                                </div>
                                                <div className="w-100 testimonialbox px-4 py-5 shadow">
                                                    <p className="roboto">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                        Officiis rerum, repellendus dignissimos possimus eos
                                                        ratione odit unde ducimus iusto aspernatur alias delectus
                                                        error architecto sint velit, vel est perferendis beatae.
                                                    </p>
                                                    <h5 className="roboto mt-4">SCOTT ATKINS</h5>
                                                    <p className="roboto">Immediate Past President</p>
                                                    <p className="roboto">INSOL International</p>
                                                </div>
                                                <div className="circleimg">
                                                    <img src={testimonial} alt="testimonial person" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial