import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './styles/index.scss'
import Contact from './screens/contact'


@observer
export default class App extends Component {



  componentDidMount = () => {
    window.scrollTo(0, 1);
  }


  render() {
    return (
      <BrowserRouter>
        <Route path='/' render={(props) => <Contact />} />
      </BrowserRouter>
    )
  }
}
