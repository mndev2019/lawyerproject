//import React from 'react'
import aboutarea from '../../assets/images/ab-thumb-3.webp'

const Aboutarea = () => {
    return (
        <>
            <section className="about-area-3 pt-150 pb-150">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="about-left-3 fade-slide left" data-delay="0.2">
                                <img src={aboutarea} alt="Image" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="about-right-3">
                                <span className="section-subtitle pb-10 fade-slide bottom" data-delay="0.2">Our Best Of Service</span>
                                <h2 className="section-title pb-20 fade-slide bottom section-titleblue" data-delay="0.4">Zstal Law Group Over 20+ Years We Are Professional <span className="title-yellow">Law Firm Since 2012</span></h2>
                                <div className="about-btm-3 fade-slide bottom" data-delay="0.6">
                                    <div className="about-item-3">
                                        <div className="about-item-left-3">
                                            <h3 className="about-subtitle-3 section-titleblue ">Our Mission</h3>
                                            <p className="about-subtext-3">Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin. Vivamus neque urna, iaculis et orci id, euismod tempor arcu.</p>
                                        </div>
                                    </div>
                                    <div className="about-item-3 textblue">
                                        <div className="about-item-left-3">
                                            <h3 className="about-subtitle-3">Our Visection-titlebluesion</h3>
                                            <p className="about-subtext-3">Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin. Vivamus neque urna, iaculis et orci id, euismod tempor arcu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Aboutarea
