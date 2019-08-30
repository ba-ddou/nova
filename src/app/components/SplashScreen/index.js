import React, { Component } from "react";
import "./styles.scss";
import logo from '../../assets/images/badgeWhite.png'
import { inject } from "mobx-react";


@inject('viewStore')
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ opacity: 0 })
            setTimeout(() => {
                this.props.viewStore.splashScreen = false;
            }, 600);
        }, 1000);
    };



    render() {
        return (
            <div id="splashScreen" style={{ opacity: this.state.opacity }}>
                <img src={logo} id="splashScreen-logo" className="center-XY" />
            </div>

        );
    }
}




