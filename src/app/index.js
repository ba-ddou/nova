import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'


@observer
export default class App extends Component {
  
  render() {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    )
  }
}
