//import React from 'react'
import aboutbanner from '../../assets/images/aboutbanner.jpg'

import AllBanner from "../../Component/AllBanner"
import Abouttestimonial from './Abouttestimonial'


const About = () => {
    return (
        <>
            <AllBanner title="About Us" subtitle="About Us" image={aboutbanner} />
            <Abouttestimonial/>
            <section className='about pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto'>About Us</h2>
                                <p className='pt-3 roboto'>LACCO stands for Litigation and Corporate Compliances. LACCO Legal is an emerging full service corporate & commercial law firm with a team of seasoned lawyers having expertise in Litigation, Arbitration, Insolvency & Bankruptcy, Corporate Advisory, Real Estate, Consumer Protection, and Media/IT industry.Our services cover a wide range of industry areas such as Financial Services, Power, Telecom, Insurance, Consumer Durables, IT, Media, Transport, Energy, Infrastructure, Environment, and Agricultural.</p>
                                <p className='pt-3 roboto'>In addition to our key areas of practice, LACCO Legal believes, that every human being deserves to be respected, and thus, being in this Nobel profession, LACCO Legal aims to provide pro – bono services to the one who are deprived of their human rights At LACCO Legal, we foster a culture of collaboration, prioritizing client-centric solutions. We curate specialized teams of experts tailored to address unique client issues effectively. Our commitment to delivering legal and commercial solution goes beyond conventional approaches, understanding and aligning with each client strategic goals and business needs.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default About