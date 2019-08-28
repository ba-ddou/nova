import config from '../config/config.js'


var services = {};


services.getToken = (callback) => {
    var endpoint = config.endpoints.getToken;

    fetch(endpoint)
        .then(res => res.json())
        .then(res => callback(res, false))
        .catch(err => callback(false, err))
}

services.postInquiry = (payload, callback) => {
    var endpoint = config.endpoints.postInquiry;

    fetch(endpoint, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => callback(res, false))
        .catch(err => callback(false, err))
}



export default services;