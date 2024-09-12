//import React from 'react'
import imgsrc1 from '../../assets/images/service-icon-1.svg'
import imgsrc2 from '../../assets/images/service-icon-9.svg'
import imgsrc3 from '../../assets/images/service-icon-8.svg'
import imgsrc4 from '../../assets/images/service-icon-7.svg'
import imgsrc5 from '../../assets/images/service-icon-6.svg'
import imgsrc6 from '../../assets/images/service-icon-10.svg'

import shape from '../../assets/images/service-shape-4.png'

const MoreServices = () => {
    const services = [
        {
            imgSrc: imgsrc1,
            title: "Business Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
           
            delay: 0.2
        },
        {
            imgSrc: imgsrc2,
            title: "Education Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
           
            delay: 0.4
        },
        {
            imgSrc: imgsrc3,
            title: "Family Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
          
            delay: 0.6
        },
        {
            imgSrc: imgsrc4,
            title: "Insurance Defense",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
           
            delay: 0.8
        },
        {
            imgSrc: imgsrc6,
            title: "Divorce Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
           
            delay: 0.2
        },
        {
            imgSrc: imgsrc5,
            title: "Car Accidents Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
          
            delay: 0.4
        },
        {
            imgSrc: imgsrc6,
            title: "Child Crime Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
           
            delay: 0.6
        },
        {
            imgSrc: imgsrc3,
            title: "Health Care Law",
            description: "Maecenas efficitur neque posu rutrum justo vel, placerat.",
            link: "service-detail.html",
           
            delay: 0.8
        }
    ];
    return (
        <>
            <section className="service-area-4 pt-150 pb-150 position-relative ">
                <div className="container">
                    <div className="service-topwrap-3 text-center pb-50">
                        <span className="section-subtitle pb-10 fade-slide top" data-delay="0.2">Our Best Of Service</span>
                        <h2 className="section-title fade-slide bottom" data-delay="0.4">What People Says Our Best Of <span className="title-yellow"> Legal Practice Areas </span></h2>
                    </div>
                    <div className="more-service">
                        {
                            services.map((itm) => (
                                <>
                                    <div className="fade-slide bottom" data-delay={itm.delay}>
                                        <div className="service-item-4">
                                            <div className="d-flex justify-content-center">
                                                <div className='moreserviceimage'>
                                                    <img src={itm.imgSrc} className="service-img-4" alt="img" />
                                                </div>
                                            </div>
                                            <h3><a className="service-title-4" href="service-detail.html">{itm.title}</a></h3>
                                            <p className="service-text-4description">{itm.description}</p>
                                          
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                {/* Shape  */}
                <img className="service-shape-four-1" src={shape} alt="Shape" />
            </section>
        </>
    )
}

export default MoreServices