import React, { Component } from "react";
import styles from "./styles.scss";

export default class FormField extends Component {
    render() {
        return (
            <Input
                className="genericInput"
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
            />
        );
    }
}
