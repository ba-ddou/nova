import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject, Provider } from 'mobx-react'
import styles from './styles.scss'
import store from './store';
import FormField from '../../components/FormField'
import SendButton from './components/SendButton'
import logo from '../../assets/images/logotypeBlack.png'
import LoaderWithFeedback from '../../components/LoaderWithFeedback'
import services from '../../lib/services.js'
@observer
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
    }

    send() {
        store.validateForm();
        if (store.payload) {
            store.loader = true;
            services.postInquiry(store.payload, (res, err) => {
                if (err) {
                    this.resolve(false, "network error");
                } else if (res.res) {
                    this.resolve(res.res, false);
                } else {
                    this.resolve(false, res.err);
                }
            });

        }
    }

    resolve(res, err) {
        setTimeout(() => {
            this.loader.resolve();
            store.requestStatus = { res, err }
            store.reset();
        }, 3000);
    }

    render() {
        return (
            <Provider store={store}>
                <div id="contactForm">
                    <img src={logo} id="contactform-logo" />
                    <div id="formInnerContainer" >
                        <div id="contactForm-header">
                            <p id="contactForm-header-title">CONTACT US</p>
                            <p id="contactForm-header-text">Talk to us about your project, and we'll reach out as soon as possible.</p>
                        </div>
                        <FormField id="fullname" error={store.fullnameError} type="input-regular" value={store.fullname} placeholder="Fullname" onChange={(text) => { store.storeFullname(text.target.value) }} />
                        <FormField id="email" validate={store.emailValidate} error={store.emailError} type="input-regular" value={store.email} placeholder="Email" onChange={(text) => { store.storeEmail(text.target.value) }} />
                        <FormField id="phone" validate={store.phoneValidate} error={store.phoneError} type="input-regular" value={store.phone} placeholder="Phone" onChange={(text) => { store.storePhone(text.target.value) }} />
                        <FormField id="message" error={store.messageError} type="input-message" value={store.message} placeholder="What can we do for you ?" onChange={(text) => { store.storeMessage(text.target.value) }} />
                        <SendButton onPress={this.send} />
                    </div>

                    <div id="mdn-container">
                        <div id="mdn" className="horizontal-center">NOVA© 2019. Moroccan digital nomads</div>
                    </div>
                    {store.loader && <LoaderWithFeedback ref={ref => this.loader = ref} />}
                </div>
            </Provider>

        )
    }
}
