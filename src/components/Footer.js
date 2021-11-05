import React from 'react';
import './Footer.css';
import image1 from '../assets/facebook-white.svg';
import image2 from '../assets/instagram-white.svg';
import image3 from '../assets/twitter-white.svg';
import store1 from '../assets/app-store.svg';
import store2 from '../assets/play-store.svg';
import store3 from '../assets/windows-store.svg';



function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-top">
                <span className="footer-elements">Home </span>
                <span> | </span>
                <span className="footer-elements">  Terms and Conditions   </span>
                <span> | </span>
                <span className="footer-elements" >  Privacy Policy    </span>
                <span> | </span>
                <span className="footer-elements">Collection Statement    </span>
                <span> | </span>
                <span className="footer-elements"> Help    </span>
                <span> | </span>
                <span className="footer-elements">Manage Account</span>
                <div className="footer-copyright">Copyright @2016 DEMO Streaming. All rights reserved.</div>
            </div>
            <div className="footer-bottom">
                <div className="social-icons">
                    <img className="socialIcons" src={image1} alt="facebook"></img>
                    <img className="socialIcons-two" src={image3} alt="twitter"></img>
                    <img className="socialIcons-two" src={image2} alt="instagram"></img>
                </div>
                <div className="store-icons">
                    <img className="storeIcons" src={store1} alt="facebook"></img>
                    <img className="storeIcons" src={store2} alt="twitter"></img>
                    <img className="storeIcons-two" src={store3} alt="instagram"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
