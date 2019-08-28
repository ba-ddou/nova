import React, { Component } from 'react'
import styles from './styles.scss'

const ContactFloatingArrow = () => {
    return (
        <a href="#contactForm">
            <div id="banner-contactFloatingArrow" className="horizontal-center">
                <p>CONTACT US</p>
                <i className="icon ion-ios-arrow-down" size="50"></i>
            </div>
        </a>

    );
}


export default ContactFloatingArrow;
