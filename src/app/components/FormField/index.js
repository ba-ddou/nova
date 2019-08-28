import React, { Component } from "react";
import styles from "./styles.scss";


const FormField = (props) => {
    var inputClassNames;
    if (props.error) inputClassNames = "genericInput genericInput-error";
    else if (props.validate) inputClassNames = "genericInput genericInput-validate";
    else inputClassNames = "genericInput";

    return (
        <div id={props.id} className={"genericInputContainer " + props.type}>
            {props.type == "input-regular" ? <input
                className={inputClassNames}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            /> : <textarea
                    className={props.error ? "genericInput genericTextArea genericInput-error" : "genericInput genericTextArea"}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />}
            <div className="genericInputInfo">
                {props.error && <p className="genericInputInfo-error"><i className="icon ion-ios-warning"></i>{" " + props.error}</p>}
                {!props.error && props.validate && <p className="genericInputInfo-validate"><i className="icon ion-ios-checkmark-circle-outline"></i></p>}
            </div>
        </div>

    );
}


export default FormField;
