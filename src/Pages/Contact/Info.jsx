//import React from 'react'

const Info = () => {
    return (
        <>
            <section className="info">
                <div className="map-area pt-150 position-relative overflow-hidden">
                    <div className="container">
                        <div className="responsive-map fade-slide bottom" data-delay="0.2">
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <img className="blog-detail-shape" src="images/shaddow-shape.png" alt="Shape" />
                </div>
                <div className="contact-info-card">
                    <div className="container">
                        <div className="card-content fade-slide bottom" data-delay="0.2">
                            <div className="card-item">
                                <img className="contact-info-img" src="images/contact-info-icon-3.svg" alt="Phone" />
                                <a className="contact-info-link" href="tel:+55(9900)66622">+55 (9900) 666 22</a>
                                <a className="contact-info-link" href="tel:+55(9900)66622">+55 (9900) 666 22</a>
                                <p className="contact-info-text">Contact Number</p>
                            </div>
                            <div className="card-item">
                                <img className="contact-info-img" src="images/mail.svg" alt="Email" />
                                <a className="contact-info-link" href="/cdn-cgi/l/email-protection#bbd2d5ddd495c1c8cfdad7fbdcd6dad2d795d8d4d6"><span className="__cf_email__" data-cfemail="fb92959d94d581888f9a97bb9c969a9297d5989496">[email&nbsp;protected]</span></a>
                                <a className="contact-info-link" href="/cdn-cgi/l/email-protection#b3daddd5dc9df3d4ded2dadf9dd0dcde"><span className="__cf_email__" data-cfemail="90f9fef6ffbed0f7fdf1f9fcbef3fffd">[email&nbsp;protected]</span></a>
                                <p className="contact-info-text">Contact Email</p>
                            </div>
                            <div className="card-item">
                                <img className="contact-info-img" src="images/contact-info-icon-1.svg" alt="Location" />
                                <p className="contact-info-title">14/4, Bonosri, USA.</p>
                                <p className="contact-info-title">road-8, house-13, canada</p>
                                <p className="contact-info-text">Contact Email</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        
        </>
    )
}

export default Info