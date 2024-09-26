//import React from 'react'

import AllBanner from "../../Component/AllBanner"
import career from '../../assets/images/career.jpg'


const Career = () => {
    return (
        <>
            <AllBanner title="Career" subtitle="career" image={career} />
            <section className="career py-5">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8 py-4">
                            <div className="w-100">
                                <h2 className='formheading roboto'>
                                    Career With Us
                                </h2>
                                <p className="py-1 roboto">
                                    We welcome motivated and technically qualified professionals who can think of out of the box solutions at all levels of experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <div className="w-100 applicationform px-3 py-3">

                                {/* <div className="formdiv roboto">
                                    Basic Details
                                </div> */}
                                <div className="row py-4">

                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-transparent custom-input mb-3 roboto"
                                            placeholder="Enter your first name"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-transparent custom-input mb-3 roboto"
                                            placeholder="Enter your last name"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">Email ID</label>
                                        <input
                                            type="email"
                                            className="form-control bg-transparent custom-input mb-3 roboto"
                                            placeholder="Enter your email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">Mobile no</label>
                                        <input
                                            type="tel"
                                            className="form-control bg-transparent custom-input mb-3 roboto"
                                            placeholder="Enter your mobile number"
                                            name="mobile"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">Qualification</label>
                                        <input
                                            type="text"
                                            className="form-control bg-transparent custom-input mb-3 roboto"
                                            placeholder="Maximum Qualification"
                                            name="maximumqualification"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label roboto">Experience</label>
                                        <input
                                            type="text"
                                            className="form-control bg-transparent custom-input mb-3 roboto "
                                            placeholder="Total Work Experience"
                                            name="experience"
                                        />
                                    </div>


                                    <div className="col-md-6 file">
                                        <label htmlFor="cv-upload" className="form-label roboto"> Upload CV</label>
                                        <input
                                            type="file"
                                            className="form-control bg-transparent custom-input roboto"
                                            id="cv-upload"
                                            name="cv"
                                            accept=".pdf,.doc,.docx"  // This restricts file types to common CV formats
                                        />
                                    </div>
                                    <div className="col-md-6 file">
                                        <label htmlFor="cv-upload" className="form-label roboto">Research Paper/Articles/Blogs</label>
                                        <input
                                            type="file"
                                            className="form-control bg-transparent custom-input roboto"
                                            id="Research Paper/Articles/Blogs"
                                            name="reaearchpaper"
                                            accept=".pdf,.doc,.docx"  // This restricts file types to common CV formats
                                        />
                                    </div>
                                    <div className="col-md-12 pt-4 file text-center">
                                        <button className="formbtn px-5 py-2 roboto">Submit</button>
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

export default Career