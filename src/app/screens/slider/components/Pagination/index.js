import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'


const Pagination = (props) => {
    return (
        <div id="sliderPagination" className="horizontal-center">
            <div onClick={props.onTabClick.bind(0, 0)} className={props.position == 0 ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
            <div onClick={props.onTabClick.bind(0, "-100%")} className={props.position == "-100%" ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
            <div onClick={props.onTabClick.bind(0, "-200%")} className={props.position == "-200%" ? "sliderPagination-block sliderPagination-block-active" : " sliderPagination-block"}></div>
        </div>
    );
}


export default Pagination;