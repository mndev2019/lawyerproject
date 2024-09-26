
import { useState, useEffect } from "react";
import disclaimer from '../assets/images/disclaimer.png'

const Disclaimer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Close the popup
    const handleClose = () => {
        setIsVisible(false);
    };

    // useEffect to show the popup 6 seconds after the page loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Show the disclaimer popup after 6 seconds
        }, 3000); // 6000 milliseconds = 6 seconds

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="modal fade show d-flex align-items-center justify-content-center" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" style={{ maxWidth: '800px', width: '90%' }}>
                        <div className="modal-content">
                            <div className="modal-header justify-content-center">
                                <img src={disclaimer} className="modal-title roboto " />

                            </div>
                            <div className="modal-body">
                                <p className="roboto">
                                    Under the rules of the Bar Council of India, an advocate and/or a Law Firm is
                                    prohibited from soliciting work or advertising through communication in the public
                                    domain. This website is meant solely for the purposes of providing information and
                                    not for the purpose of advertising.
                                </p>
                                <p className="roboto">
                                    This website does not solicit potential clients. The contents of this website are
                                    solely for the purposes of informing, assisting, and guiding the clients,
                                    associates, and other professionals and are not in any way a substitute for
                                    professional opinion or advice. Accessing this web site does not in any way create
                                    a client-attorney relationship. We urge you to seek advice from your professional
                                    counselors before using any information on this website for your requirements.
                                </p>
                            </div>
                            <div className="modal-footer justify-content-center align-items-center">
                                <button
                                    type="button"
                                    className="open roboto"
                                    onClick={handleClose}
                                >
                                    AGREE
                                </button>
                              <div className="pt-2">
                              <button
                                    type="button"
                                    className=" roboto close"
                                    onClick={handleClose}
                                    aria-label="Close"
                                >DECLINE</button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal backdrop for the dark overlay */}
            {isVisible && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default Disclaimer;