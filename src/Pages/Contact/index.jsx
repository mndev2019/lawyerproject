//import React from 'react'

import AllBanner from "../../Component/AllBanner"
import contactbanner from '../../assets/images/contact-banner-bg.webp'
//import contact2 from '../../assets/images/young-attractive-emotionacontact2.jpg'
import Info from "./info"

const Contact = () => {
    return (
        <>
          <AllBanner title="Contact" subtitle="Contact" image={contactbanner}/>
          <Info/>
        </>
    )
}

export default Contact