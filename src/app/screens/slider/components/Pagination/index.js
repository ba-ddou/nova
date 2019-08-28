import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'


const Pagination = (props) => {
    return (
        <div id="sliderPagination" className="horizontal-center">
            <div className={props.position == 0 ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
            <div className={props.position == "-100%" ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
            <div className={props.position == "-200%" ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
        </div>
    );
}


export default Pagination;