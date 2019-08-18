import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { observer, inject } from 'mobx-react'


@observer
export default class App extends Component {

  componentDidMount = () => {
    setInterval(()=>{
      store.value ++ ;
    },1000);
  };
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{store.value}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


