//import React from 'react'
import teammember1 from '../../assets/images/member-1.webp'
import teammember2 from '../../assets/images/member-2.webp'
import teammember3 from '../../assets/images/member-3.webp'
import teammember4 from '../../assets/images/member-4.webp'
import linkdin from '../../assets/images/linkdien-dark.svg'
import twitter from '../../assets/images/twitter-dark.svg'
import facebook from '../../assets/images/facebook-dark.svg'
import share from '../../assets/images/share-dark.svg'
import arrowdark from '../../assets/images/arrow-top-dark.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Team = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };
    const teamMembers = [
        {
            name: "OB. Oliver Benjamin",
            role: "Business Lawyer",
            imgSrc: teammember1,
            profileLink: "attorneys.html",
            socialLinks: [
                { platform: "LinkedIn", iconSrc: linkdin, link: "#" },
                { platform: "Twitter", iconSrc: twitter, link: "#" },
                { platform: "Facebook", iconSrc: facebook, link: "#" },
                { platform: "Share", iconSrc: share, link: "#" }
            ],
            arrowIcon: arrowdark
        },
        {
            name: "Isabella Elijah Leo",
            role: "Family Lawyer",
            imgSrc: teammember2,
            profileLink: "attorneys.html",
            socialLinks: [
                { platform: "LinkedIn", iconSrc: linkdin, link: "#" },
                { platform: "Twitter", iconSrc: twitter, link: "#" },
                { platform: "Facebook", iconSrc: facebook, link: "#" },
                { platform: "Share", iconSrc: share, link: "#" }
            ],
            arrowIcon: arrowdark
        },
        {
            name: "Elizabeth Alexander",
            role: "Managing Partner",
            imgSrc: teammember3,
            profileLink: "attorneys.html",
            socialLinks: [
                { platform: "LinkedIn", iconSrc: linkdin, link: "#" },
                { platform: "Twitter", iconSrc: twitter, link: "#" },
                { platform: "Facebook", iconSrc: facebook, link: "#" },
                { platform: "Share", iconSrc: share, link: "#" }
            ],
            arrowIcon: arrowdark
        },
        {
            name: "Grace Ella Ethan",
            role: "Tax Attorney",
            imgSrc: teammember4,
            profileLink: "attorneys.html",
            socialLinks: [
                { platform: "LinkedIn", iconSrc: linkdin, link: "#" },
                { platform: "Twitter", iconSrc: twitter, link: "#" },
                { platform: "Facebook", iconSrc: facebook, link: "#" },
                { platform: "Share", iconSrc: share, link: "#" }
            ],
            arrowIcon: arrowdark
        }
    ];
    return (
        <>
            <section className="team-area-3 pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-12 col-md-12">
                            <div className="team-member-top pb-50">
                                <span className="section-subtitle pb-10 fade-slide bottom" data-delay="0.2">Our Best Of Service</span>
                                <h2 className="section-title fade-slide bottom section-titleblue" data-delay="0.4">Legal Practice Areas Best Of <span className="title-yellow">Special Team Members</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-12 m-auto fade-slide bottom" data-delay="0.6">
                            <div className="gallery-card-grid d-inline gallery-card-slider mb-20-mb-lg-80">
                                <Slider {...settings}>
                                    {teamMembers.map((itm, index) => (
                                        <div key={index}>
                                            <article className="team-card ">
                                                <div className="img position-relative">
                                                    <img className="team-thumb-img" src={itm.imgSrc} alt={itm.role} />
                                                    <ul className="member-social-profile">
                                                        {itm.socialLinks.map((social, idx) => (
                                                            <li className="social-list" key={idx}>
                                                                <a className="team-social-link" href={social.link}>
                                                                    <img className="team-social-icon" src={social.iconSrc} alt={social.platform} />
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="text team-card-body">
                                                    <p className="mb-10 mt-10">{itm.role}</p>
                                                    <div className="team-card-text d-flex justify-content-between align-items-center">
                                                        <h3><a className="team-title" href={itm.profileLink}>{itm.name}</a></h3>
                                                        <a href={itm.profileLink}>
                                                            <img className="team-arrow-icon" src={itm.arrowIcon} alt="Arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team