//import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import practisearea1 from '../../assets/images/practicarea1.jpg'
import practisearea2 from '../../assets/images/practisearea2.jpg'


import { useState } from "react";

const Practisearea = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    // default selection


    const items = [
        { id: 1, text: "Arbitration & Alternative Dispute Resolution", description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices.", image: practisearea1 },
        { id: 2, text: "Corporate Law", image: practisearea2, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 3, text: "Civil Litigation", image: practisearea1, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 4, text: "Criminal Law", image: practisearea2, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 5, text: "Employment Law", image: practisearea1, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 6, text: "Environmental Law", image: practisearea2, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 7, text: "Family Law", image: "practicarea7.jpg", description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
        { id: 8, text: "Immigration Law", image: practisearea1, description: "Dua Associates’ Dispute Resolution practice involving civil, commercial, taxation, criminal and constitutional law, comprises of about twenty five partners and counsel supported by over fifty litigation lawyers is represented at all the eight locations where the Firm has offices." },
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
            <section className="service-area-4 pt-150 pb-150 practisearea">
                <div className="container">
                    <div className="service-topwrap-3 text-center">
                        <span className="roboto title shadow" >
                            Our Best Of Service
                        </span>
                        <h2 className="subtitle roboto">
                            What People Say About Our Best Of <span className=" d-block"> Legal Practice Areas </span>
                        </h2>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className="w-100 leftcol p-5">
                                <ul>
                                    {items.map(item => (
                                        <li
                                            key={item.id}
                                            className={`mb-3 p-2 roboto ${selectedItem === item.id ? 'active' : ''}`} 
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

                            <div
                                className="w-100 rightcol position-relative"
                                style={{ backgroundImage: `url(${items.find(item => item.id === selectedItem)?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                {
                                    items.find(item => item.id) && (
                                        <>
                                            <div className="practisetext position-relative">
                                                <h2 className="practicetitle animate__animated animate__bounce roboto">
                                                    {items.find(item => item.id === selectedItem).text}
                                                </h2>
                                                <p className="practiseareasubtitle roboto text-white">
                                                    {items.find(item => item.id === selectedItem).description}
                                                </p>
                                                <div className='practisetextcircle mt-2'>
                                                    <ArrowRightOutlined/>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Practisearea