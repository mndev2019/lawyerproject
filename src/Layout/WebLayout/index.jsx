//import React from 'react'

import { Link, Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Banner from "../../Pages/Home/Banner";
import React from "react";


const WebLayout = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const home = location.pathname == "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update the scroll position when scrolling
    };

    // Add the event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <div className=" fixedSidebar vh-100 d-flex align-items-center bg-transparent roboto">
        <div className={`w-100 ${scrollPosition > 300 ? 'invertbg' : ''}`}>
          <h4 className={home ? "" : "text-dark"}>
            KUMAR DEEPRAJ
          </h4>
          <ul className="roboto">
            <li>
              <Link className={home ? "" : "text-dark"} to={'/'}>Home</Link>
            </li>
            <li>
              <Link className={home ? "" : "text-dark"}  to={'/about-us'}>About Us</Link>
            </li>
            <li>
              <Link className={home ? "" : "text-dark"}  to={'/blogs'}>Blog</Link>
            </li>


          </ul>
        </div>
      </div>
      <main>
        {
          location.pathname == "/" && (
            <>
              <Banner />
            </>
          )
        }
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-2">
              <div className="w-100 h-100 sidebarfixedbg"></div>
            </div>
            <div className="col-md-10">
              {<Outlet />}
              <Footer />
            </div>
          </div>
        </div>


      </main>

    </>
  )
}

export default WebLayout