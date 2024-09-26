
//import teamimg from '../../assets/images/teamimage.jfif'
import teamnew from '../../assets/images/teamnew.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
          once: false, // Whether the animation should happen only once
        });
      }, []);

    return (
        <>
            <section className="about-area-3 pt-150 pb-150 team">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 text-start">
                            <div className="w-100 h-100 cards">
                                <span className="title roboto">
                                    KUMAR DEEPRAJ</span>
                                <h2 className="subtitle roboto"> We Are Professional <span className="bluecolor">Law Firm Since 2012</span></h2>
                                <p className='roboto py-1'>
                                Kumar Deepraj is a Partner at LACCO Legal, and overlooks the Dispute Resolution of the firm. He holds a B.A. LL.B. degree and is perusing LLM.
                                </p>
                                <p className='roboto py-3'>
                                Deepraj's initial foray into legal organising included steering the second and third editions of the Prof. N.R. Madhava Menon SAARCLAW Mooting Competition and Law Students' Conference during college. These events provided him the opportunity to interact with apex court justices, senior advocates, and academicians from various SAARC countries, working closely with the late Padma Shree Prof. (Dr.) N.R. Madhava Menon, a luminary in Indian Modern Legal Education. 
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="about-left-3 fade-slide left" data-aos="flip-right">
                                <img src={teamnew} alt="Image" className='img-fluid shadow' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Team