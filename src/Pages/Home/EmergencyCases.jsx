//import React from 'react'
import emergency1 from '../../assets/images/doctor.webp'
import emergency2 from '../../assets/images/tecu.webp'
import emergencyshape1 from '../../assets/images/emergency-shape-1.png'
import emergencyshape2 from '../../assets/images/emergency-shape-2.png'

const EmergencyCases = () => {
    return (
        <>
            <section className="emargency-case pt-140 pb-150 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-6">
                            <div className="d-flex align-items-center">
                                <span className="section-subtitle fade-slide top" data-delay="0.2">Emergency Cases</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 col-lg-6">
                            <div className="d-flex flex-column mb-40 fade-slide right" data-delay="0.4">
                                <h2 className="section-title">Non-Emergency <span className="title-yellow">Medical Transport Accidents </span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="fade-slide bottom" data-delay="0.2">
                                <p className="emargency-text">A non-emergency medical transport (NEMT) company provides transportation for disabled, elderly, and other people who need help accidents.</p>
                            </div>
                            <img className="fade-slide bottom" data-delay="0.4" src={emergency1} alt="image" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column">
                            <div className="col">
                                <img className="mb-20 fade-slide right" data-delay="0.2" src={emergency2} />
                                <div className="fade-slide bottom" data-delay="0.4">
                                    <p className="emargency-subtitle">NEMT accidents are different from car accidents and claims must be handled carefully.</p>
                                    <p>A non-emergency medical transport (NEMT) company provides transportation for disabled, elderly, and other people who need help getting to and from their medical providers. Accidents and injuries can occur to these passengers in a number of ways including motor vehicle accidents.</p>
                                </div>
                            </div>
                            <div className="col d-block d-md-none mb-30">
                                <p className="mb-20">A non-emergency medical transport (NEMT) company provides transportation for disabled, elderly, and other people who need help accidents.</p>
                                <img src={emergency1} />
                            </div>
                            <div className="section-btn w-fit fade-slide bottom" data-delay="0.4">
                                <a href="contact.html" className="btn-fill s-btn d-flex align-items-center">Free Consultancy
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Shape  */}
                <img className="emargency-shape-1" src={emergencyshape1 } alt="Shape" />
                <img className="emargency-shape-2" src={emergencyshape2} alt="Shape" />
            </section>
        </>
    )
}

export default EmergencyCases