//import React from 'react'
import practisearea1 from '../../assets/images/practicarea1.jpg'
import practisearea2 from '../../assets/images/practisearea2.jpg'

import { useState } from "react";

const Practisearea = () => {
    const [selectedItem, setSelectedItem] = useState(1); // default selection
    const items = [
        { id: 1, text: "Arbitration & Alternative Dispute Resolution", image: practisearea1 },
        { id: 2, text: "Corporate Law", image: practisearea2 },
        { id: 3, text: "Civil Litigation", image: "practicarea3.jpg" },
        { id: 4, text: "Criminal Law", image: "practicarea4.jpg" },
        { id: 5, text: "Employment Law", image: "practicarea5.jpg" },
        { id: 6, text: "Environmental Law", image: "practicarea6.jpg" },
        { id: 7, text: "Family Law", image: "practicarea7.jpg" },
        { id: 8, text: "Immigration Law", image: "practicarea8.jpg" },
        { id: 9, text: "Intellectual Property Law", image: "practicarea9.jpg" },
        { id: 10, text: "Media Law", image: "practicarea10.jpg" },
        { id: 11, text: "Real Estate Law", image: "practicarea11.jpg" },
        { id: 12, text: "Securities Law", image: "practicarea12.jpg" },
        { id: 13, text: "Tax Law", image: "practicarea13.jpg" },
        { id: 14, text: "Technology Law", image: "practicarea14.jpg" },
        { id: 15, text: "Trusts and Estates", image: "practicarea15.jpg" }
    ];
    return (
        <>
            <section className="service-area-4 practisearea">
                <div className="container">
                    <div className="service-topwrap-3 text-center pb-50">
                        <span className="section-subtitle pb-10 fade-slide top" data-delay="0.2">
                            Our Best Of Service
                        </span>
                        <h2 className="section-title fade-slide bottom" data-delay="0.4">
                            What People Say About Our Best Of <span className="title-yellow"> Legal Practice Areas </span>
                        </h2>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className="w-100 leftcol p-5">
                                <ul>
                                    {items.map(item => (
                                        <li
                                            key={item.id}
                                            className={`mb-3 ${selectedItem === item.id ? 'active' : ''}`}
                                            onClick={() => setSelectedItem(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="w-100 rightcol"
                                style={{ backgroundImage: `url(${items.find(item => item.id === selectedItem).image})` }}>
                                <div className="practisetext">
                                    <h2 className="practicetitle">{items.find(item => item.id === selectedItem).text}</h2>
                                    <p className="practiseareasubtitle">
                                        Description for {items.find(item => item.id === selectedItem).text}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Practisearea