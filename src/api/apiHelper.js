import { handleError, handleResponse } from './httpHelper.js'



export function saveImage(image, token) {
    fetch('/postImage', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            physicalPath: image.name,
            status: image.initialDiagnosis
        })
    }).then(handleResponse)
        .catch(handleError);
}



export function uploadImage(data, token) {

    debugger
    console.log(data)
    fetch('/upload', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: data
    }).then(handleResponse)
        .catch(handleError);
}


