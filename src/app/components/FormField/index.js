import React, { Component } from "react";
import styles from "./styles.scss";


const FormField = (props) => {
    return (
        <div className={"genericInputContainer " + props.type}>
            {props.type == "input-regular" ? <input
                className="genericInput"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            /> : <textarea
                    className="genericInput genericTextArea"
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />}
            <div className="genericInputError">

            </div>
        </div>

    );
}


export default FormField;
