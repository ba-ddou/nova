import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'


const SliderCard = (props) => {
    return (
        <div id={props.id} className="slider-card" style={props.style}>
            <div className="slider-card-text">
                <span className="slider-card-title">{props.data.title}</span>
                <p className="slider-card-description">{props.data.description}</p>
            </div>
        </div>
    );
}


export default SliderCard;