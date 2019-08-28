import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import './styles.scss'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'


const RequestStatus = (props) => {
    if (props.data.err) return (
        <div className="requestStatus center-XY">
            <div className="requestStatus-innerContainer vertical-center">
                <i className="icon ion-ios-alert"></i>
                <p>{props.data.err}</p>
            </div>
        </div>
    )
    else return (

        <div className="requestStatus center-XY">
            <div className="requestStatus-innerContainer vertical-center">
                <i className="icon ion-ios-checkmark-circle-outline"></i>
                <p>{props.data.res}</p>
            </div>
        </div>
    )
}





@inject('store')
@observer
export default class LoaderWithFeedback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 1,
            mateWidth: "100%",
            mateHeight: "100%",
            mateRadius: "0",

        }
        this.resolve = this.resolve.bind(this);
    }

    resolve() {
        this.setState({
            mateWidth: "40%",
            mateHeight: "25%",
            mateRadius: "10px"
        });
        setTimeout(() => {
            this.setState({ opacity: 0 });
            setTimeout(() => {
                this.props.store.destroyLoader();
            }, 500);
        }, 4000);
    }






    render() {
        return (
            <div id="loaderWithFeedback" style={{
                opacity: this.state.opacity
            }}>
                <div className="loaderWithFeedback-colorMate center-XY" style={{
                    width: this.state.mateWidth,
                    height: this.state.mateHeight,
                    borderRadius: this.state.mateRadius

                }}></div>
                <div className="loaderWithFeedback-loaderContainer center-XY">
                    {!this.props.store.requestStatus &&
                        <Loader
                            type="Puff"
                            color="#141414"
                            height="30"
                            width="30"
                        />}
                </div>
                {this.props.store.requestStatus && <RequestStatus data={this.props.store.requestStatus} />}
            </div>
        )
    }
}
