import React from 'react'
import './footer.css'
import twitter from '../../images/twitter.png'
import github from '../../images/github.png'
import insta from '../../images/instagram.png'
import nasa from '../../images/nasa.png'
import youtube from '../../images/youtube.png'

function Footer() {
    return (
        <div id='footerWrapper'>
            <a href="https://www.nasa.gov/" className="icon">
                <img src={nasa} alt='' id='icon' />
            </a>
            <a href="https://www.instagram.com/nasa/" className="icon">
                <img src={insta} alt='' id='icon' />
            </a>
            <a href="https://twitter.com/nasa" className="icon">
                <img src={twitter} alt='' id='icon' />
            </a>
            <a href="https://www.youtube.com/@NASA" className="icon">
                <img src={youtube} alt='' id='icon' />
            </a>
            <a href="https://github.com/qspencer0224/nasa" className="icon">
                <img src={github} alt='' id='icon' />
            </a>
        </div>
    )
}

export default Footer