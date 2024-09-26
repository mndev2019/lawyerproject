//import React from 'react'
import imgsrc1 from '../../assets/images/service-icon-1.svg'
import imgsrc2 from '../../assets/images/service-icon-9.svg'
import imgsrc3 from '../../assets/images/service-icon-8.svg'
import imgsrc4 from '../../assets/images/service-icon-7.svg'
import imgsrc5 from '../../assets/images/service-icon-6.svg'
import imgsrc6 from '../../assets/images/service-icon-10.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const MoreServices = () => {
    var settings = {
        arrows:false,
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
    const services = [
        {
            imgSrc: imgsrc1,
            title: "Combination of experience, energy & youth",
            description: "At LACCO Legal, experienced & seasoned lawyers combines with young, energetic & vibrant lawyers, bringing out peerless legal strategy.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc2,
            title: "Networking",
            description: "With some of the partners having 3 decades of experience and in toto a combination of a century, LACCO Legal connects with every industry. LACCO Legal also connects to every major city in India, and extend its services Pan India.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc3,
            title: "All solutions under a single umbrella",
            description: "With the areas of the expertise, which LACCO Legal possess, an end-to-end legal solution across the sectors is provided under the same banner, ensuring hassle free experience.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc4,
            title: "PAN India presence",
            description: "Foreign corporates and MNCs operating in India doesn’t have to look for multiple legal hands for multiple location, as LACCO Legal ensures in presence through its principal team or its associate team almost at every prominent city.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc6,
            title: "Stepping into the shoes",
            description: "At LACCO Legal, we understand the client’s prospective and value the commercial importance, and thus endeavour to provide the best & effective way out to every legal trouble.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc5,
            title: "Safeguard to Disputes",
            description: "Our endeavour at LACCO Legal is to comply mandatory legal and regulatory compliances, which would safeguard Corporates from landing up in litigation.",
            link: "service-detail.html",
        },
        {
            imgSrc: imgsrc6,
            title: "Client centric solution",
            description: "At LACCO Legal, we foster a culture of collaboration, prioritizing client-centric solutions. We curate specialized teams of experts tailored to address unique client issues effectively",
        },
        {
            imgSrc: imgsrc3,
            title: "Out of the box thinking",
            description: "As we are a hard believer of traditional way of handling, however, at the same, with the advent of new challenges, we don’t hesitate in enduing innovative solutions.",
            link: "service-detail.html",
        }
    ];
    return (
        <>
             <section className="service-area-4 moreservices pt-150 pb-150 position-relative">
                <div className="container">
                    <div className="service-topwrap-3 text-center">
                        <span className="title roboto">Our Best Of Service</span>
                        <h2 className="subtitle roboto">What makes us apart</h2>
                    </div>
                    <div className="row pt-5 h-100">
                        <div className="col-12 h-100">
                            <Slider {...settings}>
                                {services.map((itm, index) => (
                                    <div key={index}>
                                        <div className="service-item-4 h-100 text-center">
                                            <div className="d-flex justify-content-center">
                                                <img src={itm.imgSrc} className="service-img-4" alt="img" />
                                            </div>
                                            <h3 className="roboto text-center">{itm.title}</h3>
                                            <p className="roboto text-center">{itm.description}</p>
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

export default MoreServices