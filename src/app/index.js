import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject, Provider } from 'mobx-react'
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.scss'
import viewStore from './viewStore'
import Contact from './screens/contact'
import smoothscroll from 'smoothscroll-polyfill';
import SplashScreen from './components/SplashScreen'

@observer
export default class App extends Component {



  componentDidMount = () => {

    smoothscroll.polyfill();

  }


  render() {
    return (
      <Provider viewStore={viewStore}>
        <BrowserRouter>
          <Route path='/' render={(props) => <Contact />} />
          {viewStore.splashScreen && <SplashScreen />}
        </BrowserRouter>
      </Provider>

    )
  }
}
