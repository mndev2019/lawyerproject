//import React from 'react'

import Disclaimer from "../../Component/Disclaimer"
import Aboutarea from "./Aboutarea"
// import Banner from "./Banner"
import CaseStudy from "./CaseStudy"
import Counter from "./Counter"
//import EmergencyCases from "./EmergencyCases"
import MoreServices from "./MoreServices"
import Practisearea from "./Practisearea"
import Services from "./Services"
import Team from "./Team"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <>
      <Disclaimer />
      <Aboutarea />
      <Practisearea />
      <MoreServices />
      <Services />
      <CaseStudy />
      <Team />
      <Testimonial/>
      <Counter />
    </>
  )
}

export default Home