//import React from 'react'

import AllBanner from "../../Component/AllBanner"
import contactbanner from '../../assets/images/contact-banner-bg.webp'
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