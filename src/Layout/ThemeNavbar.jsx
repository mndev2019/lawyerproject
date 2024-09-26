//import React from 'react'
//import logo from '../assets/images/logo.png'
//import logo2 from '../assets/images/logo2.png'
//import arrowyellow from '../assets/images/arrow-top-yellow.svg'

const ThemeNavbar = () => {
  return (
    <>
      <section className='header'>
        <nav className="navbar navbar-expand-lg  roboto">
          <div className="container">
            {/* <a className="navbar-brand logo pt-4" href="#">
              <img src={logo2} alt="image" className="img-fluid logo" />
              KUMAR DEEPRAJ
            </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Expertise</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/career">Career</a>
                </li>
                <li className="nav-item">
                  <div className="case-study-topitem fade-slide right" data-delay="0.4">
                    <a href="/contact" className="btn-fill gap-2 d-flex align-items-center nav-link active">
                      Get In Touch
                      {/*<img className="btn-icon-black" src={arrowyellow} alt="Icon" />*/}
                    </a>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default ThemeNavbar