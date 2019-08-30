import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import './styles.scss'
import store from './store'
import Slider from '../slider'
import logo from '../../assets/images/logotypeWhite.png'
import ContactFloatingArrow from './components/ContactFloatingArrow'
import ContactForm from '../contactForm'
import services from '../../lib/services.js'

@observer
export default class Contact extends Component {
    constructor() {
        super()

        this.authentication();
    }

    authentication() {
        var token = window.localStorage.getItem('token');
        if (!token) {
            services.getToken((res, err) => {
                if (res) {
                    window.localStorage.setItem('token', res.token);
                    // alert(res.token);
                }
            });
        }

    }

    render() {
        return (
            <React.Fragment>
                <div id="banner" >
                    <Slider />
                    <img src={logo} id="banner-logo" className="horizontal-center" />
                    <ContactFloatingArrow />
                </div>
                <ContactForm send={this.send} />

            </React.Fragment>
        )
    }
}
