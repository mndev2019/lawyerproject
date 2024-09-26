//import React from 'react'

import formimage from '../../assets/images/contact.jpg'
import { EnvironmentOutlined, MailOutlined} from '@ant-design/icons'
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from 'react-icons/io5';

const Info = () => {
    return (
        <>
            <section className="info py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <div className="w-100 infobox shadow p-5 position-relative ">
                                <div className="infocircle">
                                    <EnvironmentOutlined className='icon' />
                                </div>
                                <h1 className='roboto'>
                                    Office Address
                                </h1>
                                <p className='pt-2 text-center roboto'>
                                    14/4, Bonosri, USA.

                                    road-8, house-13, canada
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 infobox shadow p-5 position-relative ">
                                <div className="infocircle">
                                    <FiPhone className='icon' />
                                </div>
                                <h1 className='roboto'>
                                    Phone Number
                                </h1>
                                <p className='pt-2 text-center roboto'>
                                    +9862233335
                                </p>
                                <p className='pt-1 text-center roboto'>
                                    +8900008288
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 infobox shadow p-5 position-relative ">
                                <div className="infocircle">
                                    <IoMailOutline className='icon' />
                                </div>
                                <h1 className='roboto'>
                                    E-Mail Us
                                </h1>
                                <p className='pt-2 text-center roboto'>
                                    info.zstal@gmail.com </p>
                                <p className='pt-1 text-center roboto'>
                                    info.@gmail.com

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='info pb-5 px-3'>
                <div className="container formcontent shadow">
                    <div className="row p-4 ">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h2 className='formheading py-3 roboto'>
                                    Contact Information
                                </h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mt-4 text-start">
                                            <label htmlFor="name" className="form-label roboto">Enter First Name</label>
                                            <input type="text" id="name" className="form-control bg-transparent roboto" placeholder="Enter Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-4 text-start">
                                            <label htmlFor="name" className="form-label roboto">Enter Last Name</label>
                                            <input type="text" id="name" className="form-control bg-transparent roboto" placeholder="Enter Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-4 text-start">
                                            <label htmlFor="email" className="form-label roboto">Enter Your Email ID</label>
                                            <input type="email" id="email" className="form-control bg-transparent roboto" placeholder="Enter Your Email ID" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-4 text-start">
                                            <label htmlFor="mobile" className="form-label roboto">Enter Your Mobile Number</label>
                                            <input type="tel" id="mobile" className="form-control bg-transparent roboto" placeholder="Enter Your Mobile Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4 text-start">
                                            <label htmlFor="message" className="form-label roboto">Enter Your Message</label>
                                            <textarea id="message" className="form-control bg-transparent roboto" rows={8} placeholder="Enter Your Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className='mt-4'>
                                            <button className='contactbtn px-5 py-2 roboto'>SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="w-100">
                                <img src={formimage} alt='image' className='img-fluid contactimg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-5 info'>
                <div className="map-container" style={{ height: '400px', width: '100%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1950444874297!2d144.96332!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f897b9%3A0x5045675218ce6e0!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632643947745!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </>
    )
}

export default Info