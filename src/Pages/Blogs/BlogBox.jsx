//import React from 'react'
import blog1 from '../../assets/images/blog-1.webp'
import calendaricon from '../../assets/images/calendar-icon.svg'
import blogarrow from '../../assets/images/arrow-top-dark.svg'

const BlogBox = () => {
    return (
        <>
            <div className="blog-area py-5 position-relative overflow-hidden">
                <div className="container">
                    <div className="row gy-5 justify-content-center fade-slide bottom" data-delay="0.2">
                        {
                            [1, 2, 3, 4, 5, 6].map(() => (
                                <>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <article className="blog-card">
                                            <div className="blog-thumb-wrap">
                                                <img className="blog-thumb" src={blog1} alt="Crimanal" />
                                            </div>
                                            <div className="text p-3">
                                                <div className="d-flex align-items-center mt-20 mb-20">
                                                    <p className="head">by <span>Zstal</span> </p>
                                                    <a className="blog-category" href="#">Attorney</a>
                                                </div>
                                                <h2><a className="blog-title" href="blog-detail.html">Domestic Violence in California – How a Lawyer Can Help.</a></h2>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center date pt-20 px-3">
                                                <p className="blog-date"><img src={calendaricon} alt="Icon" />09 March 2024</p>
                                                <a className="blog-btn" href="blog-detail.html">Read More <img className="blog-icon" src={blogarrow} alt="Icon" /></a>
                                            </div>
                                        </article>
                                    </div>
                                </>
                            ))
                        }

                    </div>

                </div>

            </div>
        </>
    )
}

export default BlogBox