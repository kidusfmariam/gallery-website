import React from 'react'
import Logo from '/RumaLogo.svg'
import './FooterLinks.css'
import { motion } from 'framer-motion'
const FooterLinks = () => {
  return (
    <footer>
        <motion.hr
        initial={{width: 0}} whileInView={{width: "95%"}} transition={{duration: 1.3, delay: 0.3}} />
        <div className='footer-content'>
        <div className='footer-logo'>
            <img src={Logo} alt="logo" className='footer-logo-img' />
        </div>
        <div className='footer-menu'>
        <div className="useful-footer-links">
            <h3>Links</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-socials">
            <h3>Socials</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
            </ul>
        </div>
        <div className="footer-faq">
            <h3>FAQ</h3>
            <ul>
                <li>FAQs</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        </div>
        </div>
        <div className='copyright'>
            <p>Designed and Developed by <a href="https://github.com/kidusfmariam" target="_blank">Kidus Ayalew.</a></p>
        </div>
    </footer>
  )
}

export default FooterLinks