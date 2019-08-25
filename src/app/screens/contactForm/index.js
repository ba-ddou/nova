import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'
import store from './store';
import FormField from '../../components/FormField'
import SendButton from './components/SendButton'

@observer
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
    }

    send() {
        store.validateForm();
    }

    render() {
        return (
            <div id="contactForm">
                <div id="contactForm-header">
                    <p id="contactForm-header-title">CONTACT US</p>
                    <p id="contactForm-header-text">Talk to us about your project, and we'll reach out as soon as possible.</p>
                </div>
                <FormField error={store.fullnameError} type="input-regular" value={store.fullname} placeholder="Fullname" onChange={(text) => { store.storeFullname(text.target.value) }} />
                <FormField validate={store.emailValidate} error={store.emailError} type="input-regular" value={store.email} placeholder="Email" onChange={(text) => { store.storeEmail(text.target.value) }} />
                <FormField validate={store.phoneValidate} error={store.phoneError} type="input-regular" value={store.phone} placeholder="Phone" onChange={(text) => { store.storePhone(text.target.value) }} />
                <FormField error={store.messageError} type="input-message" value={store.message} placeholder="What can we do for you ?" onChange={(text) => { store.storeMessage(text.target.value) }} />
                <SendButton onPress={this.send} />
                <div id="mdn" className="horizontal-center">NOVA© 2019. Moroccan digital nomads</div>
            </div>
        )
    }
}
