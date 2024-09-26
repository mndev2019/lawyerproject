//import React from 'react'
import blog1 from '../../assets/images/blog-1.webp'
import blog2 from '../../assets/images/blog-2.webp'
import blog3 from '../../assets/images/blog-3.webp'
import calendaricon from '../../assets/images/calendar-icon.svg'


const BlogBox = () => {
    return (
        <>

            <section className='py-5 blogs'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto'>Blogs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-4">
                            <div className="w-100 blogbox p-3 shadow">
                                <img src={blog1} alt='image' className='blogboximage' />
                                <div className="text py-3">
                                    <h2 className='roboto'>Domestic Violence in California – How a Lawyer Can Help.</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className="icon">
                                            <img src={calendaricon} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='blogdate roboto pt-2'>09 March 2024</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='roboto blogbtn shadow'>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 blogbox p-3 shadow">
                                <img src={blog2} alt='image' className='blogboximage' />
                                <div className="text py-3">
                                    <h2 className='roboto'>Domestic Violence in California – How a Lawyer Can Help.</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className="icon">
                                            <img src={calendaricon} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='blogdate roboto pt-2'>09 March 2024</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='roboto blogbtn shadow'>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 blogbox p-3 shadow">
                                <img src={blog3} alt='image' className='blogboximage' />
                                <div className="text py-3">
                                    <h2 className='roboto'>Domestic Violence in California – How a Lawyer Can Help.</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className="icon">
                                            <img src={calendaricon} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='blogdate roboto pt-2'>09 March 2024</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='roboto blogbtn shadow'>Read more</button>
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

export default BlogBox