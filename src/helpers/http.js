import axios from 'axios';
import {
    REPL_MODE_SLOPPY
} from 'repl';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
}

const validStatuses = [
    200, 201, 202, 203, 204,
    300, 301, 302, 303, 304,
]


function getHeaders(multipart = false) {
    let defaultHeaders = DEFAULT_HEADERS

    if (multipart) {
        defaultHeaders = {}
    }

    if (localStorage.token) {
        defaultHeaders = {
            'Authorization': 'JWT ${localStorage.token}',
            ...defaultHeaders
        }
    }

    return defaultHeaders
}

//authentification
export function checkResponse(response) {
    if (validStatuses.includes(response.status)) {
        return response
    }

    //If the user is not autorise then go back to the home page

    if (response.status === 401) {
        localStorage.removeItem('token')
        return Promise.reject(new Error('USER_UNKNOWN'))
    }

    let err = new Error(response.statusText)
    err.response = response

    return Promise.reject(err)
}

export function processAPIErrors(apiErrors) {
    let errors = {}

    if (apiErrors) {
        for (let key of Object.keys(apiErrors)) {
            let err = apiErrors[key]

            errors[key] = err

            if (typeof err === Object || err.hasOwnProperty('lenght')) {
                error[key] = apiErrors[key][0]
            }
        }
    }

    return errors
}


export const esc = encodeURIComponent

export function qs(params) {
    return (
        Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&')
    )
}



/*** 
 * Axios wrappers and provides post & get calls ***/

//POST method

export function post(uri, data) {
    return axios.post(uri, data, {
        headers: getHeaders(),
        withCredentials: false,
    })
}


//GET method

export function get(uri, data) {
    return axios.get(uri, data = {}) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${qs(data)}`
        }
        return axios.get(uri, {
            headers: getHeaders(),
            withCredentials: false
        })
    }

    export function upload(uri, data) {
        return fetch(uri, {
            headers: getHeaders(true),
            cors: true,
            method: 'POST',
            body: data
        })
    }

    //endpoint
    export function e(uri) {
        return BASE_URL + uri
    }
}