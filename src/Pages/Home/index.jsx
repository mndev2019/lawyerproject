//import React from 'react'

import Aboutarea from "./Aboutarea"
import Banner from "./Banner"
import CaseStudy from "./CaseStudy"
import EmergencyCases from "./EmergencyCases"
import MoreServices from "./MoreServices"
import Practisearea from "./Practisearea"
import Services from "./Services"
import Team from "./Team"

const Home= () => {
  return (
    <>
  <Banner/>
  <Services/>
  <Aboutarea/>
  <MoreServices/>
  <CaseStudy/>
  <EmergencyCases/>
  <Team/>
  <Practisearea/>
    </>
  )
}

export default Home