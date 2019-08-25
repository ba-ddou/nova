import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'
import store from './store'
import Slider from '../slider'
import logo from '../../assets/images/logotypeWhite.png'
import ContactFloatingArrow from './components/ContactFloatingArrow'
import ContactForm from '../contactForm'

@observer
export default class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="banner" >
                    <Slider />
                    <img src={logo} id="banner-logo" className="horizontal-center" />
                    <ContactFloatingArrow />
                </div>
                <ContactForm />
            </React.Fragment>
        )
    }
}
