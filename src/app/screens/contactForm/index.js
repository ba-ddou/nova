import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'
import store from './store';
import FormField from '../../components/FormField'
import SendButton from './components/SendButton'

@observer
export default class ContactForm extends Component {


    render() {
        return (
            <div id="contactForm">
                <div id="contactForm-header">
                    <p id="contactForm-header-title">CONTACT US</p>
                    <p id="contactForm-header-text">Talk to us about your project, and we'll reach out as soon as possible.</p>
                </div>
                <FormField type="input-regular" value={store.fullname} placeholder="Fullname" onChange={(text) => { store.fullname = text.target.value }} />
                <FormField type="input-regular" value={store.email} placeholder="Email" onChange={(text) => { store.email = text.target.value }} />
                <FormField type="input-regular" value={store.phone} placeholder="Phone" onChange={(text) => { store.phone = text.target.value }} />
                <FormField type="input-message" value={store.message} placeholder="what can we do for you ?" onChange={(text) => { store.message = text.target.value }} />
                <SendButton />
                <div id="mdn" className="horizontal-center">NOVA© 2019. Moroccan digital nomads</div>
            </div>
        )
    }
}
