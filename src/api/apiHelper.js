// import { handleError, handleResponse } from './httpHelper.js'

export function saveImage(image, token) {

    return fetch('/postImage', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            physicalPath: image.name,
            status: image.initialDiagnosis
        })
    })


}

export function uploadImage(data, token) {
    return fetch('/upload', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: data
    })
}


export function rigisterQueueListener(nickname, token) {
    return fetch('/rigisterQueue', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: nickname
    })
}


