import React, { Component } from "react";
import styles from "./styles.scss";


const SendButton = (props) => {
    return (
        <div id={"contactForm-sendButton"}>
            <div id="contactForm-sendButton-innerContainer" className="horizontal-center">
                <p id="contactForm-sendButton-text" className="vertical-center">Send</p>
                <i id="contactForm-sendButton-icon" className="vertical-center icon ion-ios-send" size="50"></i>
            </div>

        </div>

    );
}


export default SendButton;
