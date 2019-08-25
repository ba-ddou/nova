import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'

import store from './store'
import Slider from '../slider'

@observer
export default class Contact extends Component {

    render() {
        return (
            <div>
                <div id="banner" >
                    <Slider />
                </div>

            </div>
        )
    }
}
